import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DecksComponent } from './decks.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { NoDecksPageComponent } from './pages/no-decks-page/no-decks-page.component';
import { SelectedDeckComponent } from './selected-deck/selected-deck.component';
import { StudyPageComponent } from './pages/study-page/study-page.component';

const routes: Routes = [
  {
    path: '',
    component: DecksComponent,
    children: [
      {
        path: '',
        component: NoDecksPageComponent,
      },
      {
        path: ':language',
        component: SelectedDeckComponent,
        children: [
          {
            path: '',
            component: DashboardPageComponent,
          },
          {
            path: 'study',
            component: StudyPageComponent,
            data: {
              clearScreen: true,
            },
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DecksRoutingModule {}
