import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnnouncementComponent } from 'src/app/components/announcement/announcement.component';

const routes: Routes = [
  {
    path: 'announcements',
    component: AnnouncementComponent

  },
  {
    path: '',
    component: AnnouncementComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
