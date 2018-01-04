import {
  Injector,
  ComponentFactoryResolver,
  EmbeddedViewRef,
  ApplicationRef, ComponentRef
} from '@angular/core';
import { Type } from '@angular/core/src/type';

export class ComponentLoader<T> {

  private componentRef: ComponentRef<T>;
  private isVisible: boolean;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {
    this.isVisible = false;
  }

  public show(component: Type<T>, parentElement: HTMLElement, options: any, pushWidth: number = 0) {
    // 1. Create a component reference from the component
    this.componentRef = this.componentFactoryResolver
      .resolveComponentFactory(component)
      .create(this.injector);

    // 2. Attach component to the appRef so that it's inside the ng component tree
    this.appRef.attachView(this.componentRef.hostView);

    Object.assign(this.componentRef.instance, options);

    // 3. Get DOM element from component
    const domElem = (this.componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    // 4. Append DOM element to the body
    document.body.appendChild(domElem);

    this.componentRef.changeDetectorRef.markForCheck();
    this.componentRef.changeDetectorRef.detectChanges();

    const componentElement = this.componentRef.location.nativeElement as HTMLElement;

    componentElement.style.top = `${parentElement.offsetTop + parentElement.offsetHeight}px`;
    componentElement.style.left = `${parentElement.offsetLeft + parentElement.offsetWidth - pushWidth}px`;
    componentElement.style.position = 'absolute';

    this.isVisible = true;


  }

  public hide() {
    if (this.componentRef) {
      this.appRef.detachView(this.componentRef.hostView);
      this.componentRef.destroy();
    }

    this.isVisible = false;
  }

  public toggle(component: Type<T>, parentElement: HTMLElement, options: any, pushWidth: number = 0) {
    if (this.isVisible) {
      this.hide();
    } else {
      this.show(component, parentElement, options, pushWidth);
    }
  }
}
