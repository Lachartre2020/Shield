import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[hightLightFontsize]'
})
export class HightLightFontsizeDirective {

  @HostBinding('class.hightLightFontsize')  mouseAction:boolean=false;

  constructor(private elRef:ElementRef, private renderer:Renderer2) { }

  @HostListener('mouseenter') mouseEnterEvent (eventData:Event){
    this.mouseAction=true;
  }

  @HostListener('mouseleave') mouseLeaveEvent (eventData:Event){
    this.mouseAction=false;
  }
}
