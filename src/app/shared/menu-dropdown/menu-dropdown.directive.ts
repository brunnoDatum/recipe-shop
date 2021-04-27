import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMenuDropdown]'
})
export class MenuDropdownDirective implements OnInit {

  private showDropdown = false;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
  }

  @HostListener('document:click', ['$event'])
  private toggleOpen(event: any): void {
    const nativeElement: HTMLElement = this.elementRef.nativeElement;

    if (nativeElement.contains(event.target)) {
      if (!this.showDropdown) {
        this.showDropdown = true;
        this.renderer.addClass(nativeElement.nextSibling, 'show');
      } else {
        this.showDropdown = false;
        this.renderer.removeClass(nativeElement.nextSibling, 'show');
      }
    } else {
      this.showDropdown = false;
      this.renderer.removeClass(nativeElement.nextSibling, 'show');
    }
  }

}
