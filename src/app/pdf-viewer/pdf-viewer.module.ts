/**
 * Created by vadimdez on 01/11/2016.
 */
import { NgModule } from '@angular/core';

import { PdfViewerComponent } from './pdf-viewer.component';
import { PDFJSStatic } from 'pdfjs-dist';
import { PdfViewerToolbarModule } from '../pdf-viewer-toolbar/pdf-viewer-toolbar.module';

declare global {
  const PDFJS: PDFJSStatic;
}

export {
  PDFJSStatic,
  PDFDocumentProxy,
  PDFViewerParams,
  PDFPageProxy,
  PDFSource,
  PDFProgressData,
  PDFPromise
} from 'pdfjs-dist';

@NgModule({
  imports: [PdfViewerToolbarModule],
  declarations: [PdfViewerComponent],
  exports: [PdfViewerComponent, PdfViewerToolbarModule]
})
export class PdfViewerModule {}
