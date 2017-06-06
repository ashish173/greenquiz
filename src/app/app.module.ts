import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { QuestionComponent } from './components/question/question.component';
import { ChoiceListComponent } from './components/choice-list/choice-list.component';
import { ChoiceComponent } from './components/choice/choice.component';
import { SummaryComponent } from './summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    ChoiceListComponent,
    ChoiceComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
