import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { AbstractLabelStore } from './core/AbstractLabelStore';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,MaterialModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent extends AbstractLabelStore {
  protected override labels: { [key: string]: string; } = {
    title:"portfolio",
    logoText:"Aashutosh",
    greetingMessage:"Hey there!",
    name:"Aashutosh Shrivastav",
    jobTitle:"Software Engineer (Fullstack Web Developer)"
  };

}
