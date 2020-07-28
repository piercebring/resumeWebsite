:import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';



declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  
})
export class WelcomeComponent implements OnInit {
  public bioSlide : Boolean;
  public slideIn : Boolean;
  downloadResume = "Click the icon to download my resume!"
  downloaded = false;
  constructor(private renderer: Renderer2, private el: ElementRef, ) { 
    
  }
  @ViewChild("icon") icon: ElementRef;


  downloadPdf() {
    this.downloaded = true;
    this.downloadResume = "Thanks!";
    const pdfUrl = './assets/PierceBringhurstResume.pdf';
    const pdfName = 'PierceBringhurstResume';
    FileSaver.saveAs(pdfUrl, pdfName);
  }

  slideElementsOnPage() {
    this.slideIn = true;
  }

  ngOnInit(): void {

    setTimeout(()=>{    //<<<---    using ()=> syntax
      this.slideIn = true;
      }, 50);
  }

}
