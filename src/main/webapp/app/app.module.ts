import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { SenRhApplicationSharedModule } from 'app/shared/shared.module';
import { SenRhApplicationCoreModule } from 'app/core/core.module';
import { SenRhApplicationAppRoutingModule } from './app-routing.module';
import { SenRhApplicationHomeModule } from './home/home.module';
import { SenRhApplicationEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    SenRhApplicationSharedModule,
    SenRhApplicationCoreModule,
    SenRhApplicationHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    SenRhApplicationEntityModule,
    SenRhApplicationAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class SenRhApplicationAppModule {}
