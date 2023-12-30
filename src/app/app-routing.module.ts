import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",//raiz de la app
    pathMatch:'full',//coincida nombre exacto
    loadChildren: () => import('src/pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'clients',
    //canActivate: [AuthGuard],
    loadChildren: () => import('src/pages/clients/clients.module').then(m => m.ClientsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
