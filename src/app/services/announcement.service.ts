import { Injectable } from '@angular/core';
import { Announcement } from 'src/app/models/announcement';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  announcements: Announcement[] = [
    {
      interval: 5000,
      title: 'Announcement1'
    },
    {
      interval: 10000,
      title: 'Announcement2'
    },
    {
      interval: 15000,
      title: 'Announcement3'
    },
    {
      interval: 20000,
      title: 'Announcement4'
    },
    {
      interval: 25000,
      title: 'Announcement5'
    },
    {
      interval: 30000,
      title: 'Announcement6'
    },
    {
      interval: 35000,
      title: 'Announcement7'
    },
    {
      interval: 40000,
      title: 'Announcement8'
    }
  ];

  selectedIndex = 0;

  constructor() { }

  waitForNext(interval): Promise<Announcement> {
    console.log(this.selectedIndex)
    return new Promise((resolve => {
      const announcement = this.announcements[this.selectedIndex];
      setTimeout(() => {
        if (this.selectedIndex < this.announcements.length - 1) {
          this.selectedIndex++;
        } else {
          this.selectedIndex = 0;
        }

        interval = announcement.interval;

        resolve(announcement);
      }, interval);
    }));
  }


}
