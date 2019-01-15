/**
 * Created by shirtsdre on 01/09/2019.
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';


import { PdfViewerToolbarComponent } from './pdf-viewer-toolbar.component';
import { PdfIconService } from '../services/pdf-icon.service';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    MatIconModule,
    HttpClientModule
  ],
  declarations: [PdfViewerToolbarComponent],
  exports: [PdfViewerToolbarComponent],
  providers: [
    PdfIconService
  ],
})
export class PdfViewerToolbarModule {}
