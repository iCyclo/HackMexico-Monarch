import { Component, OnInit } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { CountryService } from "../../services/country.service";
import { Country } from "../../types/country.type";

@Component({
  selector: "app-country-select",
  templateUrl: "./country-select.component.html",
  styleUrls: ["./country-select.component.css"],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
  ],
})
export class CountrySelectComponent implements OnInit {
  countries?: Country[];

  constructor(private readonly countryService: CountryService) {}

  ngOnInit() {
    this.countryService
      .getCountries()
      .subscribe((countries) => (this.countries = countries));
  }
}
