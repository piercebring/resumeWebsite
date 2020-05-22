import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  constructor() { }

  public sendEmail(e: Event) {
    e.preventDefault();
    console.log(e)
    emailjs.sendForm('default_service', 'template_0Rw7KEeR', e.target as HTMLFormElement, 'user_Gm23miIpRs4AliuCsjrI5')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  ngOnInit(): void {
  }

}
