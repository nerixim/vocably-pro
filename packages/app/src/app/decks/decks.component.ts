import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  from,
  merge,
  startWith,
  Subject,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs';
import { DeckListStoreService } from './deck-list-store.service';
import { listLanguages } from '@vocably/api';
import { RefreshService } from '../refresh.service';

@Component({
  selector: 'app-decks',
  templateUrl: './decks.component.html',
})
export class DecksComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();

  isLoading = true;

  constructor(
    decksListStore: DeckListStoreService,
    refreshService: RefreshService
  ) {
    merge(decksListStore.reload$, refreshService.refresh$)
      .pipe(
        takeUntil(this.destroy$),
        startWith(null),
        tap(() => refreshService.register('decks-list')),
        tap(() => {
          this.isLoading = true;
        }),
        switchMap(() => from(listLanguages()))
      )
      .subscribe({
        next: (result) => {
          refreshService.unregister('decks-list');
          this.isLoading = false;
          if (!result.success) {
            throw new Error(result.reason);
          }
          decksListStore.store(result.value);
        },
      });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
