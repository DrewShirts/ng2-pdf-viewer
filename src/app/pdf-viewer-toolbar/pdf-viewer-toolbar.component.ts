import { Component, Input, OnInit } from '@angular/core';
import { PDFSource } from 'pdfjs-dist';
import { PdfIconService } from '../services/pdf-icon.service';

@Component({
  selector: 'pdf-viewer-toolbar',
  templateUrl: './pdf-viewer-toolbar.component.html',
  styleUrls: ['./pdf-viewer-toolbar.component.scss']
})
export class PdfViewerToolbarComponent implements OnInit {

  constructor(private pdfIconService: PdfIconService) {
    // using service to register pdf icons
    this.pdfIconService.init();
  }

  @Input()
  public src: string | Uint8Array | PDFSource;

  ngOnInit() {
  }

  public print(): void {
    console.log('Print PDF');
    window.print();
  }

  public zoomIn(): void {
    console.log('zoomIn PDF');
  }

  public zoomOut(): void {
    console.log('zoomOut PDF');
  }

  public zoomToHeight(): void {
    console.log('zoomToHeight PDF');
  }

  public zoomToWidth(): void {
    console.log('zoomToWidth PDF');
  }
}
