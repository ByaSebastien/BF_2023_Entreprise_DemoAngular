import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToFahrenheitPipe } from './pipes/to-fahrenheit.pipe';
import { ConvertTempPipe } from './pipes/convert-temp.pipe';
import { ConvertTimePipe } from './pipes/convert-time.pipe';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    ToFahrenheitPipe,
    ConvertTempPipe,
    ConvertTimePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    ToFahrenheitPipe,
    ConvertTempPipe,
    ConvertTimePipe,
    RouterModule,
  ],
})
export class SharedModule { }
