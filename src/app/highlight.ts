import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})


export class Highlight {
 
 @HostBinding('style.color') color = 'red';
 
  constructor() { 
    console.log('directive call');
  }
  @HostListener("document:click") onClick(){
    console.log('onkeyup');
    if(Date.now() %2==0)
    this.color='blue';
  else
    this.color='green';
  }

}
