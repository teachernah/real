import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appSearch]'
})
export class SearchDirective {
  @HostBinding('style.width') 'width': string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') click(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'width', '700px');
    this.width = '800px';
  }

  @HostListener('focusout') focusout(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'width', '500px');
    this.width = '600px';
  }
}
