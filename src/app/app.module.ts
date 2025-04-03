import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// Material
import { MatTabsModule } from '@angular/material/tabs';
import { NeonFlowComponent } from './templates/neon-flow/neon-flow.component';
import { MinimalEdgeComponent } from './templates/minimal-edge/minimal-edge.component';
import { SoftAuraComponent } from './templates/soft-aura/soft-aura.component';
import { DarkFusionComponent } from './templates/dark-fusion/dark-fusion.component';
import { ClassicPrimeComponent } from './templates/classic-prime/classic-prime.component';

@NgModule({
  declarations: [AppComponent, NeonFlowComponent, MinimalEdgeComponent, SoftAuraComponent, DarkFusionComponent, ClassicPrimeComponent],
  imports: [BrowserModule, AppRoutingModule, MatTabsModule],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
