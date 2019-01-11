import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pdf-viewer-toolbar',
  templateUrl: './pdf-viewer-toolbar.component.html',
  styleUrls: ['./pdf-viewer-toolbar.component.scss']
})
export class PdfViewerToolbarComponent implements OnInit {

  constructor() { }

  private _src = null;
  private _printerClass = null;
  private _zoomInClass = null;
  private _zoomOutClass = null;
  private _zoomToHeightClass = null;
  private _zoomToWidthClass = null;

  get src() {
    return this._src;
  }

  @Input('src')
  set src(src: string) {
    this._src = src;
  }

  get printerClass() {
    return this._printerClass;
  }

  @Input('icon-printer')
  set printerClass(printerClass: string) {
    this._printerClass = printerClass;
  }

  get zoomInClass() {
    return this._zoomInClass;
  }

  @Input('icon-zoom-in')
  set zoomInClass(zoomInClass: string) {
    this._zoomInClass = zoomInClass;
  }

  get zoomOutClass() {
    return this._zoomOutClass;
  }

  @Input('icon-zoom-out')
  set zoomOutClass(zoomOutClass: string) {
    this._zoomOutClass = zoomOutClass;
  }

  get zoomToHeightClass() {
    return this._zoomToHeightClass;
  }

  @Input('icon-zoom-to-height')
  set zoomToHeightClass(zoomToHeightClass: string) {
    this._zoomToHeightClass = zoomToHeightClass;
  }

  get zoomToWidthClass() {
    return this._zoomToWidthClass;
  }

  @Input('icon-zoom-to-width')
  set zoomToWidthClass(zoomToWidthClass: string) {
    this._zoomToWidthClass = zoomToWidthClass;
  }

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
