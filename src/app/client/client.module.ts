import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './components/main-page/main-page.component';
import { TopPanelComponent } from './components/top-panel/top-panel.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { SearchPipe } from '../client/search.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MainPageComponent, TopPanelComponent, SearchPipe],
  imports: [CommonModule, NgxExtendedPdfViewerModule, FormsModule],
  exports: [MainPageComponent, TopPanelComponent],
})
export class ClientModule {}
