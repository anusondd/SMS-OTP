import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServicOtpProvider } from '../../providers/servic-otp/servic-otp';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  number='+66940282690';
  code='';
  id=''

  constructor(
    public navCtrl: NavController,
    private servicOtp:ServicOtpProvider
  ) {
      
  }

  send(number){
    this.servicOtp.verify(number).subscribe(data=>{
      console.log('massage',data.request_id);
      localStorage.setItem('verify_id',data.request_id);
      this.id = localStorage.getItem('verify_id');
    })
  }

  check(code){
    this.id = localStorage.getItem('verify_id');
    this.servicOtp.check(this.id,code).subscribe(result=>{
      console.log('massage',result);
    })
  }

}
