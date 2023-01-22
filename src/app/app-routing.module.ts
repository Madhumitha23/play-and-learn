import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditionComponent } from './addition/addition.component';
import { CountObjectsComponent } from './count-objects/count-objects.component';
import { DivisionComponent } from './division/division.component';
import { Grade1HomeComponent } from './grade1-home/grade1-home.component';
import { Grade2HomeComponent } from './grade2-home/grade2-home.component';
import { GradekgHomeComponent } from './gradekg-home/gradekg-home.component';
import { HomeComponent } from './home/home.component';
import { MultiplicationComponent } from './multiplication/multiplication.component';
import { SkillComponent } from './skill/skill.component';
import { SubtractionComponent } from './subtraction/subtraction.component';

const routes: Routes = [
  {path : "skill/:skillNumber",component:SkillComponent},  
  {path : "home",component:HomeComponent},
  {path : "gradekg",component:GradekgHomeComponent},
  {path : "grade1",component:Grade1HomeComponent},
  {path : "grade2",component:Grade2HomeComponent},
  {path : "count-objects/:maxCount",component:CountObjectsComponent},
  { path: '', redirectTo: '/home',pathMatch:'full' }, 
  {path : "**",component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
