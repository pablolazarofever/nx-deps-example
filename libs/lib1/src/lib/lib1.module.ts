import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib3Module } from '@nx-deps/ng-core/lib3';
import { Lib2Module } from '@nx-deps/ng-core/lib2';

@NgModule({
  imports: [CommonModule, Lib2Module, Lib3Module]
})
export class Lib1Module {}
