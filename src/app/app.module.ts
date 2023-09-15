import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu.component';
import { ButtonComponent } from './components/button.component'
import { EntryDataComponent } from './components/entry-data.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    MenuComponent,
    ButtonComponent,
    EntryDataComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}