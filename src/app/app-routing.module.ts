import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditionComponent } from './addition/addition.component';
import { DivisionComponent } from './division/division.component';
import { Grade2HomeComponent } from './grade2-home/grade2-home.component';
import { HomeComponent } from './home/home.component';
import { MultiplicationComponent } from './multiplication/multiplication.component';
import { SubtractionComponent } from './subtraction/subtraction.component';

const routes: Routes = [
  {path : "add",component:AdditionComponent},
  {path : "subtract",component:SubtractionComponent},
  {path : "multiply",component:MultiplicationComponent},
  {path : "divide",component:DivisionComponent},
  {path : "home",component:HomeComponent},
  {path : "grade2",component:Grade2HomeComponent},
  { path: '', redirectTo: '/home',pathMatch:'full' }, 
  {path : "**",component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
