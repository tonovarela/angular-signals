import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent, SignalsComponent } from './pages';


const routes: Routes = [{ path: '', component: HomeComponent },
{
  path: '', component: SignalsComponent
},
{ path: 'signals', loadChildren: () => import('./signals/signals.module').then(m => m.SignalsModule) },
{
  path: '**', redirectTo: 'signals',
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
