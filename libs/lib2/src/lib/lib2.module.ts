import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib1Module } from '@nx-deps/lib1';

@NgModule({
  imports: [CommonModule, Lib1Module]
})
export class Lib2Module {}
