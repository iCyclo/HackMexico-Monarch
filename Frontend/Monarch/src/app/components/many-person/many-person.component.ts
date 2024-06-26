import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";

@Component({
  selector: "app-many-person",
  templateUrl: "./many-person.component.html",
  styleUrls: ["./many-person.component.css"],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    CommonModule,
  ],
})
export class ManyPersonComponent implements OnInit {
  personsField: FormControl<number> = new FormControl();
  desabilityPersons: FormControl<number> = new FormControl();

  constructor() {}

  ngOnInit() {}

  getPersons(): number[] {
    return Array(this.desabilityPersons.value).map((_, index) => index + 1);
  }
}
