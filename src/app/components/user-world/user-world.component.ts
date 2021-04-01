import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Result } from 'src/app/models/Result';
import { MapService } from 'src/app/services/map.service';

@Component({
  selector: 'app-user-world',
  templateUrl: './user-world.component.html',
  styleUrls: ['./user-world.component.css']
})
export class UserWorldComponent implements OnInit, OnDestroy {

  locations: Location[];

  result: Result = new Result();

  displayedColumns: string[] = ['Area', 'LocationName', 'PlayerName',];

  region: number;
  area: number;
  selectedRegion: number = 1;

  sub1: Subscription;

  constructor(
    public map: MapService
  ) { }

  ngOnInit() {
    this.GetLocationsByRegion(this.selectedRegion);
  }

  ngOnDestroy() {
    if (this.sub1) {
      this.sub1.unsubscribe();
    }
  }

  GetLocationsByRegion(region: number) {
    if (region >= 1 && region <= 3) {
      this.sub1 = this.map.GetLocationsByRegion(region).subscribe((a: Location[]) => {
        this.locations = a;
      });
      this.result.isDone = true;
    }
    else {
      this.result.isDone = false;
      this.result.info = "The region entered is invalid!";
    }
  }

  NextRegion() {
    this.selectedRegion++;
    this.GetLocationsByRegion(this.selectedRegion);
  }

  PreviousRegion() {
    this.selectedRegion--;
    this.GetLocationsByRegion(this.selectedRegion);
  }

  Reset() {
    this.result = new Result();
  }
}
