import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Country } from "../types/country.type";

@Injectable({ providedIn: "root" })
export class CountryService {
  constructor() {}

  getCountries(): Observable<Country[]> {
    return of([
      {
        name: "Colombia",
        flag: "https://cdn-icons-png.flaticon.com/512/197/197575.png",
        country_code: "+57",
      },
      {
        name: "España",
        flag: "https://cdn-icons-png.flaticon.com/512/197/197593.png",
        country_code: "+3",
      },
      {
        name: "United States",
        flag: "https://cdn-icons-png.flaticon.com/512/323/323310.png",
        country_code: "+1",
      },
    ]);
  }
}
