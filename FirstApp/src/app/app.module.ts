import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MenuBarComponent } from './common/menu-bar/menu-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ContactBoxComponent } from './pages/contact/contact-box/contact-box.component';
import { ServicesComponent } from './pages/home/services/services.component';
import { DetailsComponent } from './pages/home/services/details/details.component';
import { EnquiryFormComponent } from './pages/home/enquiry-form/enquiry-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeedbackComponent } from './pages/about/feedback/feedback.component';
import { FeedbackBoxComponent } from './pages/about/feedback-box/feedback-box.component';
import { FeedfilterPipe } from './pipes/feedfilter.pipe';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { AwardsComponent } from './pages/awards/awards.component';
import { AwardFilterPipe } from './pipes/award-filter.pipe';
import { CategoryPipe } from './pipes/category.pipe';
import { ProductComponent } from './product/product.component';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient,'./assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ContactBoxComponent,
    ServicesComponent,
    DetailsComponent,
    EnquiryFormComponent,
    FeedbackComponent,
    FeedbackBoxComponent,
    FeedfilterPipe,
    AwardsComponent,
    AwardFilterPipe,
    CategoryPipe,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
