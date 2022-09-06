import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'our-english';

  @ViewChild('videoEl', { static: true }) private videoElRef: any;
  @ViewChild('videoContainerEl', { static: true }) private videoContainerElRef: any;

  get video(): HTMLVideoElement {
    return this.videoElRef.nativeElement;
  }

  get videoContainer(): HTMLElement {
    return this.videoElRef.nativeElement;
  }


  onPlay() {
    console.log("onPlay");
    this.video.play();
  }

  onPause() {
    this.video.pause();
  }

}
