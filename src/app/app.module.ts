import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdditionComponent } from './addition/addition.component';
import { SubtractionComponent } from './subtraction/subtraction.component';
import { MultiplicationComponent } from './multiplication/multiplication.component';
import { DivisionComponent } from './division/division.component';
import { HomeComponent } from './home/home.component';
import { Grade2HomeComponent } from './grade2-home/grade2-home.component';
import { SkillComponent } from './skill/skill.component';
import { GradekgHomeComponent } from './gradekg-home/gradekg-home.component';
import { Grade1HomeComponent } from './grade1-home/grade1-home.component';
import { CountObjectsComponent } from './count-objects/count-objects.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { PaymentTermsComponent } from './payment-terms/payment-terms.component';
import { OnlineSafetyComponent } from './online-safety/online-safety.component';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';

@NgModule({
  declarations: [
    AppComponent,
    AdditionComponent,
    SubtractionComponent,
    MultiplicationComponent,
    DivisionComponent,
    HomeComponent,
    Grade2HomeComponent,
    SkillComponent,
    GradekgHomeComponent,
    Grade1HomeComponent,
    CountObjectsComponent,
    AboutUsComponent,
    PrivacyComponent,
    PaymentTermsComponent,
    OnlineSafetyComponent,
    TermsOfServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
