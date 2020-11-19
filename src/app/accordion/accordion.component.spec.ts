import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AccordionComponent } from "./accordion.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RequestService } from "../request.service";
import { from } from "rxjs";

describe("AccordionComponent", () => {
  let component: AccordionComponent;
  let fixture: ComponentFixture<AccordionComponent>;
  let service: RequestService;
  let unitComponent: AccordionComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccordionComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [HttpClientModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = new RequestService(null);
    unitComponent = new AccordionComponent(service);
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should set faqs property with the items return from the server", () => {
    let sample = [
      { id: 1, question: "what", answer: "hello" },
      { id: 2, question: "where", answer: "world" },
      { id: 3, question: "who", answer: "sam" }
    ];
    spyOn(service, "getJSON").and.callFake(()=> from([sample]));
    unitComponent.ngOnInit();
    expect(unitComponent.faqs).toBe(sample);
  });
});
