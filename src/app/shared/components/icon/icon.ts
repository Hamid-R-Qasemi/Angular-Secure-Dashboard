import { AfterViewInit, Component, input, OnChanges, SimpleChanges } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-icon',
  imports: [MatIconModule],
  templateUrl: './icon.html',
  styleUrl: './icon.scss',
})
export class Icon implements OnChanges {
  iconName = input('');
  iconRegistered = false;

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['iconName'] && this.iconName()) {
      this.iconRegistry.addSvgIcon(
        this.iconName(),
        this.sanitizer.bypassSecurityTrustResourceUrl(
          `../../../../assets/icons/${this.iconName()}.svg`,
        ),
      );
    }
  }
}
