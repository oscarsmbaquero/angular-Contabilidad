import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddClientComponent } from './components/addClient/add-client.component';
import { ClientRoutingModule } from './clients-routing.module';

@NgModule({
  declarations: [
    AddClientComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientsModule { }
