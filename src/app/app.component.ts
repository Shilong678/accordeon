import { Component, OnInit } from "@angular/core";
import { RequestService } from "./request.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  faqs: any;
  constructor(private _request: RequestService) {}

  ngOnInit() {
    this._request.getJSON().subscribe(data => {
      this.faqs = data;
    });
  }
}
