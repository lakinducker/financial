import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { AppComponent } from './app.component';
import { FutureValueComponent } from './future-value/future-value.component';
import { CompoundInterestComponent } from './compound-interest/compound-interest.component';
import { PresentValueComponent } from './present-value/present-value.component';
import { MortgageComponent } from './mortgage/mortgage.component';
import { CagrComponent } from './cagr/cagr.component';

@NgModule({
  declarations: [
    AppComponent,
    FutureValueComponent,
    CompoundInterestComponent,
    PresentValueComponent,
    MortgageComponent,
    CagrComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule,
    BrowserAnimationsModule, // required animations module
    RouterModule.forRoot(
      [
        { path: 'future-value', component: FutureValueComponent },
        { path: 'present-value', component: PresentValueComponent },
        { path: 'compound-interest', component: CompoundInterestComponent },
        { path: 'cagr', component: CagrComponent },
        { path: 'mortgage', component: MortgageComponent },
        { path: '', redirectTo: 'future-value', pathMatch: 'full' },
        { path: '**', redirectTo: 'future-value', pathMatch: 'full' }
      ],
      { useHash: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
