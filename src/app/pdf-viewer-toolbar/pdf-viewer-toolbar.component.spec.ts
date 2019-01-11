import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfViewerToolbarComponent } from './pdf-viewer-toolbar.component';

describe('PdfViewerToolbarComponent', () => {
  let component: PdfViewerToolbarComponent;
  let fixture: ComponentFixture<PdfViewerToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfViewerToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfViewerToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
