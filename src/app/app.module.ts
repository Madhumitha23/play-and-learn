import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Grade2HomeComponent } from './grade2-home/grade2-home.component';
import { SkillComponent } from './skill/skill.component';
import { GradeprekgHomeComponent } from './gradeprekg-home/gradeprekg-home.component';
import { GradekgHomeComponent } from './gradekg-home/gradekg-home.component';
import { Grade1HomeComponent } from './grade1-home/grade1-home.component';
import { CountObjectsComponent } from './count-objects/count-objects.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { PaymentTermsComponent } from './payment-terms/payment-terms.component';
import { OnlineSafetyComponent } from './online-safety/online-safety.component';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';
import { CountForwardComponent } from './count-forward/count-forward.component';
import { TensonesComponent } from './tensones/tensones.component';
import { Grade3HomeComponent } from './grade3-home/grade3-home.component';
import { Grade4HomeComponent } from './grade4-home/grade4-home.component';
import { Grade5HomeComponent } from './grade5-home/grade5-home.component';
import { Grade6HomeComponent } from './grade6-home/grade6-home.component';
import { Grade7HomeComponent } from './grade7-home/grade7-home.component';


@NgModule({
  declarations: [
    AppComponent,    
    HomeComponent,
    Grade2HomeComponent,
    SkillComponent,
    GradeprekgHomeComponent,
    GradekgHomeComponent,
    Grade1HomeComponent,
    CountObjectsComponent,
    AboutUsComponent,
    PrivacyComponent,
    PaymentTermsComponent,
    OnlineSafetyComponent,
    TermsOfServiceComponent,
    CountForwardComponent,
    TensonesComponent,
    Grade3HomeComponent,
    Grade4HomeComponent,
    Grade5HomeComponent,
    Grade6HomeComponent,
    Grade7HomeComponent
    
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
