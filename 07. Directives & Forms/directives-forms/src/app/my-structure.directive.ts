import {
  Directive,
  Input,
  OnChanges,
  OnInit,
  Optional,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appMyStructure]',
  exportAs: 'appMyStructure',
})
export class MyStructureDirective implements OnInit, OnChanges {
  @Input() appMyStructure: boolean = false;
  @Input() myTmpRef: TemplateRef<any> | undefined;

  constructor(
    @Optional() private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {
    console.log({templateRef});
  }

  ngOnInit(): void {
    //

    console.log(this.appMyStructure);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges', this.appMyStructure);

    const template = this.templateRef || this.myTmpRef

    if (this.appMyStructure) {
      this.vcRef.createEmbeddedView(template, {
        myCustomValue: 'Custom message',
        myNum: 123,
        $implicit: 'Default value',
      });
    } else {
      this.vcRef.clear();
    }
  }
}
