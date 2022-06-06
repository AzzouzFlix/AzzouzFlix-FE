import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowsingModule } from './features/browsing/browsing/browsing.module';
import { SharedModule } from './shared/shared.module';
import { translocoPreload } from './transloco/transloco-root.preload';


@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    SharedModule,
    BrowsingModule
  ],
  providers: [translocoPreload],
  bootstrap: [AppComponent],
})
export class AppModule {}
