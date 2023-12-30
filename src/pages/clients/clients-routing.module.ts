//import { VentasComponent } from './ventas.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientComponent } from './components/addClient/add-client.component';

const routes: Routes = [
  {
    path: "add",
    component: AddClientComponent
  },
  // {
  //   path: "addIssue",
  //   component: AddGastosComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }