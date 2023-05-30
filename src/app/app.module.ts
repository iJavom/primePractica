import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { configTranslate } from './core/configs/translate-module.config';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { PanelModule } from 'primeng/panel';


@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    PanelModule,
    HttpClientModule,
    TranslateModule.forRoot(configTranslate),

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
