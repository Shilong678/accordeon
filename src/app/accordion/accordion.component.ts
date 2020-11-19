import { Component, OnInit } from "@angular/core";
import { RequestService } from '../request.service';
@Component({
  selector: "app-accordion",
  templateUrl: "./accordion.component.html",
  styleUrls: ["./accordion.component.scss"]
})
export class AccordionComponent implements OnInit {
  faqs: any;


  constructor(private _request: RequestService) {}

  ngOnInit() {
    this.getData();
  }

  private getData () {
    this._request.getJSON().subscribe(data => {      
      this.faqs = data;
    });
  }


}
