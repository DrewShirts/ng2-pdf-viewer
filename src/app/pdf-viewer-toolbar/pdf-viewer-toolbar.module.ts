/**
 * Created by shirtsdre on 01/09/2019.
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PdfViewerToolbarComponent } from './pdf-viewer-toolbar.component';

@NgModule({
  imports: [BrowserModule ],
  declarations: [PdfViewerToolbarComponent],
  exports: [PdfViewerToolbarComponent]
})
export class PdfViewerToolbarModule {}
