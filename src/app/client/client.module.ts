import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './components/main-page/main-page.component';
import { TopPanelComponent } from './components/top-panel/top-panel.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@NgModule({
  declarations: [MainPageComponent, TopPanelComponent],
  imports: [CommonModule, NgxExtendedPdfViewerModule],
  exports: [MainPageComponent, TopPanelComponent],
})
export class ClientModule {}
