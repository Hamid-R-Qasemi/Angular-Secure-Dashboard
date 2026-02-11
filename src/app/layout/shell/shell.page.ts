import { Component } from '@angular/core';
import { Header } from '../header/header';
import { RouterOutlet } from '../../../../node_modules/@angular/router/types/_router_module-chunk';

@Component({
  selector: 'app-shell',
  imports: [Header, RouterOutlet],
  templateUrl: './shell.page.html',
  styleUrl: './shell.page.scss',
})
export class ShellPage {}
