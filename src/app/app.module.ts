import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputComponent } from './home/input/input.component';
import { OutputComponent } from './home/output/output.component';
import { SettingsComponent } from './home/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    OutputComponent,
    SettingsComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
