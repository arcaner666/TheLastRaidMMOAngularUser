import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-user-buildings',
  templateUrl: './user-buildings.component.html',
  styleUrls: ['./user-buildings.component.css']
})
export class UserBuildingsComponent implements OnInit {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      "food",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/food.svg")
    );
  }

  ngOnInit() {
  }

}
