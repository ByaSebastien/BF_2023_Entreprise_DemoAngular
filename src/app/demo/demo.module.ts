import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { DemoBindingsComponent } from './demo-bindings/demo-bindings.component';
import { SharedModule } from '../shared/shared.module';
import { DemoPipeComponent } from './demo-pipe/demo-pipe.component';
import { DemoDirectiveComponent } from './demo-directive/demo-directive.component';
import { DemoStructuralDirectiveComponent } from './demo-structural-directive/demo-structural-directive.component';
import { DemoInputOutputComponent } from './demo-input-output/demo-input-output.component';
import { EnfantComponent } from './demo-input-output/enfant/enfant.component';
import { DemoServiceComponent } from './demo-service/demo-service.component';
import { DemoFormulaireComponent } from './demo-formulaire/demo-formulaire.component';
import { DemoRouteComponent } from './demo-route/demo-route.component';
import { RecupParamComponent } from './demo-route/recup-param/recup-param.component';
import { DemoHttpComponent } from './demo-http/demo-http.component';
import { CreateComponent } from './demo-http/create/create.component';
import { FakeAuthServiceService } from './demo-service/service/fake-auth-service.service';


@NgModule({
  declarations: [
    DemoComponent,
    DemoBindingsComponent,
    DemoPipeComponent,
    DemoDirectiveComponent,
    DemoStructuralDirectiveComponent,
    DemoInputOutputComponent,
    EnfantComponent,
    DemoServiceComponent,
    DemoFormulaireComponent,
    DemoRouteComponent,
    RecupParamComponent,
    DemoHttpComponent,
    CreateComponent,
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    SharedModule
  ],
  providers: [
    FakeAuthServiceService
  ]
})
export class DemoModule { }
