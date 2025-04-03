import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NeonFlowComponent } from './templates/neon-flow/neon-flow.component';
import { MinimalEdgeComponent } from './templates/minimal-edge/minimal-edge.component';
import { SoftAuraComponent } from './templates/soft-aura/soft-aura.component';
import { DarkFusionComponent } from './templates/dark-fusion/dark-fusion.component';
import { ClassicPrimeComponent } from './templates/classic-prime/classic-prime.component';

const routes: Routes = [
  { path: '', component: NeonFlowComponent },
  { path: '', component: MinimalEdgeComponent },
  { path: '', component: SoftAuraComponent },
  { path: '', component: DarkFusionComponent },
  { path: '', component: ClassicPrimeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
