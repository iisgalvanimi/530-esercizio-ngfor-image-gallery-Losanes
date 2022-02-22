import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '530-esercizio-ngfor-image-gallery-Losanes';
  images:string [] = [
    "../assets/1.jpg","../assets/2.jpg", "../assets/3.jpg",
    "../assets/4.jpg", "../assets/5.webp", "../assets/6.jpeg",
    "../assets/7.jpg", "../assets/8.webp", "../assets/9.jpg"
 ]
}
