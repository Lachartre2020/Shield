import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[displayMovies]'
})
export class DisplayMoviesDirective {

  constructor(private tplRef:TemplateRef<any>, private vwRef:ViewContainerRef) { }

  @Input() set displayMovies(showMovies:boolean){
    if (showMovies){
      this.vwRef.createEmbeddedView(this.tplRef);
    }else{
      this.vwRef.clear();
    }
  }
}
