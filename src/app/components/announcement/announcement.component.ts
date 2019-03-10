import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from 'src/app/services/announcement.service';
import { Announcement } from 'src/app/models/announcement';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent implements OnInit {

  public announcement: Announcement;

  constructor(private announcementService: AnnouncementService) { }

  ngOnInit() {
    this.recursiveWait(0);
  }

  async recursiveWait(interval) {
    const announcement = await this.announcementService.waitForNext(interval);
    this.announcement = announcement;

    await this.recursiveWait(announcement.interval);
  }

}
