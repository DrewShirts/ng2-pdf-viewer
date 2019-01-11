import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule, MatFormFieldModule, MatInputModule, MatSlideToggleModule,
  MatToolbarModule
} from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { PdfViewerModule } from './pdf-viewer/pdf-viewer.module';
import { PdfViewerToolbarModule } from './pdf-viewer-toolbar/pdf-viewer-toolbar.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatToolbarModule,
    PdfViewerModule,
    PdfViewerToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
