import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CountForwardComponent } from './count-forward/count-forward.component';
import { CountObjectsComponent } from './count-objects/count-objects.component';
import { Grade1HomeComponent } from './grade1-home/grade1-home.component';
import { Grade2HomeComponent } from './grade2-home/grade2-home.component';
import { Grade3HomeComponent } from './grade3-home/grade3-home.component';
import { Grade4HomeComponent } from './grade4-home/grade4-home.component';
import { Grade5HomeComponent } from './grade5-home/grade5-home.component';
import { Grade6HomeComponent } from './grade6-home/grade6-home.component';
import { Grade7HomeComponent } from './grade7-home/grade7-home.component';
import { GradekgHomeComponent } from './gradekg-home/gradekg-home.component';
import { GradeprekgHomeComponent } from './gradeprekg-home/gradeprekg-home.component';
import { HomeComponent } from './home/home.component';
import { OnlineSafetyComponent } from './online-safety/online-safety.component';
import { PaymentTermsComponent } from './payment-terms/payment-terms.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { SkillComponent } from './skill/skill.component';
import { TensonesComponent } from './tensones/tensones.component';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';

const routes: Routes = [
  {path : "skill/:skillNumber",component:SkillComponent},  
  {path : "home",component:HomeComponent},
  {path : "gradeprekg",component:GradeprekgHomeComponent},
  {path : "gradekg",component:GradekgHomeComponent},
  {path : "grade1",component:Grade1HomeComponent},
  {path : "grade2",component:Grade2HomeComponent},
  {path : "grade3",component:Grade3HomeComponent},
  {path : "grade4",component:Grade4HomeComponent},
  {path : "grade5",component:Grade5HomeComponent},
  {path : "grade6",component:Grade6HomeComponent},
  {path : "grade7",component:Grade7HomeComponent},
  {path : "count-objects/:maxCount",component:CountObjectsComponent},
  {path : "count-forward",component:CountForwardComponent},
  {path : "tensones",component:TensonesComponent},
  {path : "about-us",component:AboutUsComponent},
  {path : "privacy",component:PrivacyComponent},
  {path : "online-safety",component:OnlineSafetyComponent},
  {path : "payment-terms",component:PaymentTermsComponent},
  {path : "terms-of-service",component:TermsOfServiceComponent},
  { path: '', redirectTo: '/home',pathMatch:'full' }, 
  {path : "**",component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
