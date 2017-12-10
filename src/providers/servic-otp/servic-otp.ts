import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ServicOtpProvider {

  apiKey    = 'af6269c4';
  apiSecret = '071c66570685a8ca';
  
  
  constructor(public http: HttpClient) {}

  verify(phoneNumber){
    const massage     = "Your OTP";
    return this.http.post('/verify/json',
      {
        api_key:this.apiKey,
        api_secret:this.apiSecret,
        number:phoneNumber,
        brand:massage
      }
    );
  }

  check(id:string,otp:string){

    
    return this.http.post('/verify/check/json',
      {
        api_key:this.apiKey,
        api_secret:this.apiSecret,
        request_id:id,
        code:otp
      }
    );

  }


}
