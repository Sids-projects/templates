import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TemplateData } from './interfaces/template-data';
import { SharedService } from './services/shared.service';
import { ComponentsData } from './interfaces/components-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'templates';
  templateData: TemplateData[] = this.shared.templateData;
  componentsData: ComponentsData[] = this.shared.componentsData;
  storeDesc!: TemplateData;

  constructor(
    private sanitizer: DomSanitizer,
    private router: Router,
    private shared: SharedService
  ) {
    this.templateData[0] = this.shared.templateData[0];
    this.showDesc(this.templateData[0]);
  }

  ngOnInit() {}

  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  showDesc(param: any) {
    this.storeDesc = param;
  }

  routeTo(param: string) {
    this.router.navigate([param]);
  }
}
