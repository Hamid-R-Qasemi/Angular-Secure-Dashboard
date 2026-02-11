import { Component } from '@angular/core';
import { Header } from '../header/header';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-shell',
  imports: [Header, RouterOutlet],
  templateUrl: './shell.page.html',
  styleUrl: './shell.page.scss',
})
export class ShellPage {}
