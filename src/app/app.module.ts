import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { CagrComponent } from './cagr/cagr.component';
import { CompoundInterestComponent } from './compound-interest/compound-interest.component';
import { FutureValueComponent } from './future-value/future-value.component';
import { MortgageComponent } from './mortgage/mortgage.component';
import { PresentValueComponent } from './present-value/present-value.component';

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
    ChartsModule,
    BrowserAnimationsModule, // required animations module
    RouterModule.forRoot(
      [
        { path: 'future-value', component: FutureValueComponent },
        { path: 'present-value', component: PresentValueComponent },
        { path: 'compound-interest', component: CompoundInterestComponent },
        { path: 'cagr', component: CagrComponent },
        { path: 'mortgage', component: MortgageComponent },
        { path: '', redirectTo: 'mortgage', pathMatch: 'full' },
        { path: '**', redirectTo: 'mortgage', pathMatch: 'full' }
      ],
      { useHash: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
