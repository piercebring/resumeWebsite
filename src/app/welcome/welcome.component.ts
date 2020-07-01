import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';



declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {




  constructor(private renderer: Renderer2, private el: ElementRef) { }
  @ViewChild("icon") icon: ElementRef;


  downloadPdf() {
    const pdfUrl = './assets/Resume3.pdf';
    const pdfName = 'resume';
    FileSaver.saveAs(pdfUrl, pdfName);
  }
  hoverResume() {
     
  }
  

  ngOnInit(): void {
  }

}
