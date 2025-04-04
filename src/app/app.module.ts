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
import { AccordionComponent } from './components/accordion/accordion.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { InputComponent } from './components/input/input.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TableComponent } from './components/table/table.component';
import { TabComponent } from './components/tab/tab.component';

@NgModule({
  declarations: [AppComponent, NeonFlowComponent, MinimalEdgeComponent, SoftAuraComponent, DarkFusionComponent, ClassicPrimeComponent, AccordionComponent, ButtonComponent, CardComponent, DropdownComponent, InputComponent, MenubarComponent, NavigationComponent, TableComponent, TabComponent],
  imports: [BrowserModule, AppRoutingModule, MatTabsModule],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
