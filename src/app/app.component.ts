import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 

  successBtn(){
    console.log('success')
  }

  failureBtn() {
    console.log("failure")
  }

  regularBtn() {
    console.log('regular')
  }

  square(event: string){
    console.log( event )
  }

  submit(){
    console.log( 'submited' )
  }
}
