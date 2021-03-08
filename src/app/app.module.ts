import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';

import { PublicAboutComponent } from './components/public-about/public-about.component';
import { PublicContactComponent } from './components/public-contact/public-contact.component';
import { PublicFooterComponent } from './components/public-footer/public-footer.component';
import { PublicHeaderComponent } from './components/public-header/public-header.component';
import { PublicHomeComponent } from './components/public-home/public-home.component';
import { PublicLoginComponent } from './components/public-login/public-login.component';
import { PublicNavigationComponent } from './components/public-navigation/public-navigation.component';
import { PublicNewsComponent } from './components/public-news/public-news.component';
import { PublicRegisterComponent } from './components/public-register/public-register.component';
import { PublicRulesComponent } from './components/public-rules/public-rules.component';
import { PublicScreenshotsComponent } from './components/public-screenshots/public-screenshots.component';
import { UserArmyComponent } from './components/user-army/user-army.component';
import { UserBuildingsComponent } from './components/user-buildings/user-buildings.component';
import { UserExpeditionsComponent } from './components/user-expeditions/user-expeditions.component';
import { UserNavigationComponent } from './components/user-navigation/user-navigation.component';
import { UserOverviewComponent } from './components/user-overview/user-overview.component';
import { UserRankingsComponent } from './components/user-rankings/user-rankings.component';
import { UserResearchesComponent } from './components/user-researches/user-researches.component';
import { UserWorldComponent } from './components/user-world/user-world.component';

import { MaterialModule } from './modules/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    PublicAboutComponent,
    PublicContactComponent,
    PublicFooterComponent,
    PublicHeaderComponent,
    PublicHomeComponent,
    PublicLoginComponent,
    PublicNavigationComponent,
    PublicNewsComponent,
    PublicRegisterComponent,
    PublicRulesComponent,
    PublicScreenshotsComponent,
    UserArmyComponent,
    UserBuildingsComponent,
    UserExpeditionsComponent,
    UserNavigationComponent,
    UserOverviewComponent,
    UserRankingsComponent,
    UserResearchesComponent,
    UserWorldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule
  ],
  providers: [
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
