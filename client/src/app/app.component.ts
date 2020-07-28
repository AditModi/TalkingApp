import { Component } from '@angular/core';
import { APIService }  from './api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {  
  voices = ["Matthew", "Salli", "Kendra", "Kimberly", "Kevin", "Joey", "Aditi", "Joanna", "Ivy", "Justin"];
  selectedVoice = "Matthew";
   
  constructor(private api: APIService){}

  playAudio(url){
    let audio = new Audio();
    audio.src = url;
    audio.load();
    audio.play();
  }

  speakNow(input){
    let data = {
      text: input,
      voice: this.selectedVoice
    }
    this.api.speak(data).subscribe((result:any) => {
      this.playAudio(result.url);
    });
  }
}