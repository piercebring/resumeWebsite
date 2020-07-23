import { Component,
         Renderer2,
        ViewChild,
      ElementRef,
    AfterViewInit,
    HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements AfterViewInit {

  constructor(
    private renderer: Renderer2
  ) {}

  title = 'webResume';

  public scrollToPhoto(e: Event) {
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  public scrollToBio(e: Event) {
    window.scrollTo({
      top: document.body.clientHeight / 3,
      behavior: 'smooth'
    })
  }

   public scrollToResume(e: Event) {
    window.scrollTo({
      top: document.body.clientHeight,
      behavior: 'smooth'
    })
  }

   public scrollToContact(e: Event) {
    window.scrollTo({
      top: 2540,
      behavior: 'smooth'
    })
  }

  ngAfterViewInit(): void {

  }
}
