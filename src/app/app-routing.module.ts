import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/auth.guard';

import { PublicAboutComponent } from './components/public-about/public-about.component';
import { PublicContactComponent } from './components/public-contact/public-contact.component';
import { PublicHomeComponent } from './components/public-home/public-home.component';
import { PublicLoginComponent } from './components/public-login/public-login.component';
import { PublicNewsComponent } from './components/public-news/public-news.component';
import { PublicRegisterComponent } from './components/public-register/public-register.component';
import { PublicRulesComponent } from './components/public-rules/public-rules.component';
import { PublicScreenshotsComponent } from './components/public-screenshots/public-screenshots.component';
import { UserArmyComponent } from './components/user-army/user-army.component';
import { UserBuildingsComponent } from './components/user-buildings/user-buildings.component';
import { UserExpeditionsComponent } from './components/user-expeditions/user-expeditions.component';
import { UserOverviewComponent } from './components/user-overview/user-overview.component';
import { UserRankingsComponent } from './components/user-rankings/user-rankings.component';
import { UserResearchesComponent } from './components/user-researches/user-researches.component';
import { UserWorldComponent } from './components/user-world/user-world.component';

const routes: Routes = [
  { path: "about", component: PublicAboutComponent },
  { path: "contact", component: PublicContactComponent },
  { path: "", component: PublicHomeComponent },
  { path: "login", component: PublicLoginComponent },
  { path: "news", component: PublicNewsComponent },
  { path: "register", component: PublicRegisterComponent },
  { path: "rules", component: PublicRulesComponent },
  { path: "screenshots", component: PublicScreenshotsComponent },
  { path: "army", component: UserArmyComponent, canActivate: [AuthGuard] },
  { path: "buildings", component: UserBuildingsComponent, canActivate: [AuthGuard] },
  { path: "expeditions", component: UserExpeditionsComponent, canActivate: [AuthGuard] },
  { path: "overview", component: UserOverviewComponent, canActivate: [AuthGuard] },
  { path: "rankings", component: UserRankingsComponent, canActivate: [AuthGuard] },
  { path: "researches", component: UserResearchesComponent, canActivate: [AuthGuard] },
  { path: "world", component: UserWorldComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
