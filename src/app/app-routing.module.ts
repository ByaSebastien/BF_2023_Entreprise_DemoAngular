import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ExoModule } from './exo/exo.module';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'demo', loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule) },
  { path: 'exo', loadChildren: () => import('./exo/exo.module').then(m => ExoModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
