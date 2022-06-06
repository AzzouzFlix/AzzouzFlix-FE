import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrowsingComponent } from './browsing.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [BrowsingComponent]
})
export class BrowsingModule { }
