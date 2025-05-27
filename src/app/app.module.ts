import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// NgBootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Translation
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';

// Modals
import { LoginModalComponent } from './components/modals/login-modal/login-modal.component';
import { ServiceModalComponent } from './components/modals/service-modal/service-modal.component';
import { ForgotPasswordModalComponent } from './components/modals/forgot-password-modal/forgot-password-modal.component';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { ProceduresComponent } from './pages/procedures/procedures.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { SearchFilesComponent } from './pages/search-files/search-files.component';
import { PassportApplicationComponent } from './pages/passport-application/passport-application.component';
import { BirthCertificateComponent } from './pages/birth-certificate/birth-certificate.component';
import { ServiceDetailComponent } from './pages/service-detail/service-detail.component';

// Services
import { TranslationService } from './services/translation.service';
import { AuthService } from './services/auth.service';
import { ServicesDataService } from './services/services-data.service';
import { ApplicationService } from './services/application.service';

// Translation loader function
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LanguageSelectorComponent,
    LoginModalComponent,
    ServiceModalComponent,
    ForgotPasswordModalComponent,
    HomeComponent,
    ProceduresComponent,
    RegistrationComponent,
    SearchFilesComponent,
    PassportApplicationComponent,
    BirthCertificateComponent,
    ServiceDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage: 'en'
    })
  ],
  providers: [
    TranslationService,
    AuthService,
    ServicesDataService,
    ApplicationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }