import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib1Module } from '@nx-deps/ng-core/lib1';
import { Lib2Module } from '@nx-deps/ng-core/lib2';

@NgModule({
  imports: [CommonModule, Lib1Module, Lib2Module ]
})
export class Lib3Module {}
