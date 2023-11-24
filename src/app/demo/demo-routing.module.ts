import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo.component';
import { DemoBindingsComponent } from './demo-bindings/demo-bindings.component';
import { DemoPipeComponent } from './demo-pipe/demo-pipe.component';
import { DemoDirectiveComponent } from './demo-directive/demo-directive.component';
import { DemoStructuralDirectiveComponent } from './demo-structural-directive/demo-structural-directive.component';
import { DemoInputOutputComponent } from './demo-input-output/demo-input-output.component';
import { DemoServiceComponent } from './demo-service/demo-service.component';
import { DemoFormulaireComponent } from './demo-formulaire/demo-formulaire.component';
import { DemoRouteComponent } from './demo-route/demo-route.component';
import { RecupParamComponent } from './demo-route/recup-param/recup-param.component';
import { isLoggedGuard } from './demo-route/guards/is-logged.guard';
import { DemoHttpComponent } from './demo-http/demo-http.component';
import { CreateComponent } from './demo-http/create/create.component';
import { movieResolver } from './demo-http/resolvers/movie.resolver';

const routes: Routes = [
  {
    path: '', component: DemoComponent, children: [
      { path: 'demo01', component: DemoBindingsComponent },
      { path: 'demo02', component: DemoPipeComponent },
      { path: 'demo03', component: DemoDirectiveComponent },
      { path: 'demo04', component: DemoStructuralDirectiveComponent },
      { path: 'demo05', component: DemoInputOutputComponent },
      { path: 'demo06', component: DemoServiceComponent },
      { path: 'demo07', component: DemoFormulaireComponent },
      { path: 'demo08', component: DemoRouteComponent, canActivate: [isLoggedGuard] },
      { path: 'demo08/:param', component: RecupParamComponent },
      {
        path: 'demo09',
        component: DemoHttpComponent,
        resolve: { mr: movieResolver }
      },
      { path: 'demo09/create', component: CreateComponent, canActivate: [isLoggedGuard] },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
