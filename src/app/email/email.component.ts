import { Component, OnInit, ɵSWITCH_TEMPLATE_REF_FACTORY__POST_R3__ } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
//import swal from "sweetalert";
//import swal from "C:/Users/Pierce/vsProjects/webResume/node_modules/sweetalert/typings/sweetalert";
import Swal from 'sweetalert2';

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
        //swal: sweetAlert;
        Swal.fire("Sent!");
      }, (error) => {
        console.log(error.text);
      });
  }

  ngOnInit(): void {
  }

}
