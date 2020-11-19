import { Component, OnInit, Input } from "@angular/core";
import { rotateCross, expandPanel } from "./panel.animation";

@Component({
  selector: "app-panel",
  templateUrl: "./panel.component.html",
  styleUrls: ["./panel.component.scss"],
  animations: [expandPanel, rotateCross]
})
export class PanelComponent implements OnInit {
  isOpened: boolean;
  @Input() id: number;
  @Input() question: string;
  @Input() answer: string;

  constructor() {}

  ngOnInit() {}

  togglePanel() {
    this.isOpened = !this.isOpened;
  }
}
