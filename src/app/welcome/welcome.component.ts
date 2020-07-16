import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { AbsoluteSourceSpan } from '@angular/compiler';



declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'app-welcome',
  animations: [
  trigger('openClose', [
    state('open', style({
      //height: '200px',
      opacity: 1,
      transform: 'rotate(0deg)',
      //transition: 'transform 2s ease-in-out'
    })),
    state('closed', style({
      opacity: 0.9,
      //backgroundColor: 'green',
      transform: 'rotate(1deg)',
    })),
    transition('open => closed', [
      animate('1s ease-in-out')
    ]),
    transition('closed => open', [
      animate('1s ease-in-out')
    ]),
  ]),
],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  
})
export class WelcomeComponent implements OnInit {
  public bioSlide : Boolean;
  slideIn = false;
  downloadResume = "Click the icon to download my resume!"
  downloaded = false;
  bioArray : string[] = [];
  public bioText : string;
  public bioText1 : string;
  public bioText2 : string;
  bioCounter = 0;
  constructor(private renderer: Renderer2, private el: ElementRef, ) { 
    
  }
  @ViewChild("icon") icon: ElementRef;


  downloadPdf() {
    this.downloaded = true;
    this.downloadResume = "Thanks!";
    const pdfUrl = './assets/Resume3.pdf';
    const pdfName = 'resume';
    //FileSaver.saveAs(pdfUrl, pdfName);
  }

  slideElementsOnPage() {
    this.slideIn = true;
  }

  slideOut() {
    this.bioSlide = !this.bioSlide;
    if(this.bioCounter == this.bioArray.length) {
      this.bioCounter = 0;
    }
    //this.bioText = this.bioArray[this.bioCounter++];
    
  }





  hoverResume() {
     
  }
  

  ngOnInit(): void {
    this.bioSlide = true;
    this.bioText1 = "My name is Pierce Bringhurst. I’m a junior double majoring in Computer Science and French at the University of Utah." +
    "I expect to graduate in December of 2021. I built this website using HTML, CSS, Bootstrap," +
    "and Angular, and hosted it using Amazon Web Services. Here are some other skills I have:";
    this.bioText2 = "Hello again. It is I, the Sith Lord.";
    this.bioText = this.bioText1;
    this.bioArray.push(this.bioText1);
    this.bioArray.push(this.bioText2);
    this.bioCounter = 0;


  }

}
