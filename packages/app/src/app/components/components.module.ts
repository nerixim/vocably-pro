import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BackButtonComponent } from './back-button/back-button.component';
import { GoogleIconComponent } from './google-icon/google-icon.component';
import { LanguageInputComponent } from './language-input/language-input.component';
import { LoaderComponent } from './loader/loader.component';
import { OfflineComponent } from './offline/offline.component';
import { SubscriptionStatusPipe } from './subscription-status.pipe';
import { TooltipTriggerForDirective } from './tooltip/tooltip-trigger-for.directive';
import { TooltipComponent } from './tooltip/tooltip.component';

@NgModule({
  declarations: [
    TooltipComponent,
    TooltipTriggerForDirective,
    BackButtonComponent,
    SubscriptionStatusPipe,
    OfflineComponent,
    GoogleIconComponent,
    LoaderComponent,
    LanguageInputComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule,
    OverlayModule,
    MatIconModule,
    HttpClientModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    TooltipComponent,
    TooltipComponent,
    TooltipTriggerForDirective,
    BackButtonComponent,
    SubscriptionStatusPipe,
    OfflineComponent,
    GoogleIconComponent,
    LanguageInputComponent,
  ],
})
export class ComponentsModule {}
