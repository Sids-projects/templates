import { Component, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TemplateData } from './interfaces/template-data';
import { SharedService } from './services/shared.service';
import { ComponentsData } from './interfaces/components-data';
import { NavigationEnd, Router } from '@angular/router';

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
  @ViewChild('myDialog') dialog!: ElementRef<HTMLDialogElement>;
  showMain: string = '';
  showLoadEffect: boolean = false;

  constructor(
    private sanitizer: DomSanitizer,
    private shared: SharedService,
    private router: Router
  ) {
    this.templateData[0] = this.shared.templateData[0];
    this.showDesc(this.templateData[0]);

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showMain = event.urlAfterRedirects.toLowerCase();
        console.log('event', this.showMain);
      }
    });
  }

  ngOnInit() {}

  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  showDesc(param: any) {
    this.storeDesc = param;
  }

  openDialog() {
    this.dialog.nativeElement.showModal();
  }

  closeDialog() {
    this.dialog.nativeElement.close();
  }

  showLoadEffectFn(param: string) {
    this.showLoadEffect = true;

    setTimeout(() => {
      this.router.navigate([param]);
    }, 2000);

    setTimeout(() => {
      this.showLoadEffect = false;
    }, 4000);
  }
}
