import {
  Directive,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';

type MyVoid = () => void;

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit, OnDestroy {
  // @HostListener('mouseover', ['$event']) mouseOverHandler(e: MouseEvent) {
  //   console.log('mouseOver', e);
  // }

  unsubFromEventArr: MyVoid[] = [];

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // console.log(this.elRef.nativeElement);

    //! Bad Practice
    // this.elRef.nativeElement.style.background = 'red';

    //* Good practice
    // this.renderer.setStyle(this.elRef.nativeElement, 'background', 'lightpink');

    const mouseEnterEvent = this.renderer.listen(
      this.elRef.nativeElement,
      'mouseenter',
      this.mouseEnterHandler.bind(this)
    );

    const mouseLeaveEvent = this.renderer.listen(
      this.elRef.nativeElement,
      'mouseleave',
      this.mouseLeaveHandler.bind(this)
    );

    this.unsubFromEventArr.push(mouseEnterEvent);
    this.unsubFromEventArr.push(mouseLeaveEvent);
  }

  mouseEnterHandler(e: MouseEvent): void {
    // console.log(e);

    //** Setting styles */

    // this.renderer.setStyle(this.elRef.nativeElement, 'background', 'purple');

    //** Setting classes */
    const mouseEnterEvent = this.renderer.addClass(
      this.elRef.nativeElement,
      'highlight'
    );
  }

  mouseLeaveHandler(e: MouseEvent): void {
    //** Setting styles */
    // this.renderer.setStyle(this.elRef.nativeElement, 'background', 'initial');
    //** Setting classes */
    this.renderer.removeClass(this.elRef.nativeElement, 'highlight');
  }

  ngOnDestroy(): void {
    console.log('On destroy invoked');

    console.log(this.unsubFromEventArr);

    this.unsubFromEventArr.forEach((eventFn) => eventFn());
  }
}
