import { Directive, HostListener, Renderer2, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBody]'
})
export class BodyDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') click(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'border-top', '2px solid #F48024');
  }

  @HostListener('focusout') focusout(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'border-top', '');
  }

}
