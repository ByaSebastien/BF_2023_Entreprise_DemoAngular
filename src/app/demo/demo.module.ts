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
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    SharedModule
  ],
})
export class DemoModule { }
