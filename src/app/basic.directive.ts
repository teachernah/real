import { Directive, Renderer2, OnInit, ElementRef, HostListener } from '@angular/core';
import { callLifecycleHooksChildrenFirst } from '@angular/core/src/view/provider';

@Directive({
  selector: '[appBasic]'
})
export class BasicDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

ngOnInit() {
  // this.renderer.setStyle(this.elRef.nativeElement, 'border-bottom', '1px solid #F48024');
}

@HostListener('click') click(eventData: Event) {
  this.renderer.setStyle(this.elRef.nativeElement, 'border-bottom', '2px solid #F48024');
}


@HostListener('mouseleave') mouseleave(eventData: Event) {
  this.renderer.setStyle(this.elRef.nativeElement, 'border-bottom', '');
}


}
