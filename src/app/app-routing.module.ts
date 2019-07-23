import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewsComponent } from './news.component';
import { MusicComponent } from './music.component';
import { AboutComponent } from './about.component';
import { LiveComponent } from './live.component';
import { ContactComponent } from './contact.component';
import { StoreComponent } from './store.component';
import { EpkComponent } from './epk.component';

const routes: Routes = [
	{path: 'epk', component: EpkComponent },
	{path: '', redirectTo: '/news', pathMatch: 'full' },
	{path: 'news', component: NewsComponent },
	{path: 'music', component: MusicComponent },
	{path: 'about', component: AboutComponent },
	{path: 'live', component: LiveComponent },
	{path: 'contact', component: ContactComponent },
	{path: 'store', component: StoreComponent },
	{path: '**', redirectTo: '/epk'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}