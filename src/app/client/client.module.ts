import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './components/main-page/main-page.component';
import { TopPanelComponent } from './components/top-panel/top-panel.component';

@NgModule({
  declarations: [MainPageComponent, TopPanelComponent],
  imports: [CommonModule],
  exports: [MainPageComponent, TopPanelComponent],
})
export class ClientModule {}
