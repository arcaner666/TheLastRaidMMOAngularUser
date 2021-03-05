import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

const material = [
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatSliderModule,
  MatTabsModule,
  MatToolbarModule
];
@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
