import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToFahrenheitPipe } from './pipes/to-fahrenheit.pipe';
import { ConvertTempPipe } from './pipes/convert-temp.pipe';



@NgModule({
  declarations: [
    ToFahrenheitPipe,
    ConvertTempPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FormsModule,
    ToFahrenheitPipe,
    ConvertTempPipe
  ],
})
export class SharedModule { }
