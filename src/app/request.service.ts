import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class RequestService {
  constructor(private _http: HttpClient) {}

  getJSON(): Observable<any> {
    return this._http.get("assets/faqs.json");
  }
}
