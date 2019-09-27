import { Directive, ElementRef, Renderer2, Input } from '@angular/core';


@Directive({
  selector: '[appExpireWarn]'
})
export class ExpireWarnDirective{
  @Input() public  deadline: Date;
  @Input() public  isDone: boolean;
  constructor(public elementRef:ElementRef, public renderer2:Renderer2) { }

  public ngOnInit(){
    this.warningHighlight(this.deadline)
  }

  public warningHighlight(date: Date):void {
    const daysLeft = Math.floor((date.getTime() - Date.now())/86400000);

    switch(true) {
      case !this.isDone && daysLeft < 3:
        this.renderer2.addClass(this.elementRef.nativeElement, 'warn')
        break;
      case !this.isDone && daysLeft < 7:
        this.renderer2.addClass(this.elementRef.nativeElement, 'sub-warn')
      default:
    }
  }

}
