import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { TranslocoRootModule } from '../transloco/transloco-root.module';
import { components } from './components/components';
import { pipes } from './pipes/pipes';

const modules = [
  BrowserModule,
  AppRoutingModule,
  HttpClientModule,
  TranslocoRootModule,
  FormsModule,
  ReactiveFormsModule,
  CommonModule,
];
const exports = [
  ...modules,
  ...components,
  ...pipes,
];
@NgModule({
  imports: modules,
  exports: exports,
  providers: [],
  declarations: components,
})
export class SharedModule {}
