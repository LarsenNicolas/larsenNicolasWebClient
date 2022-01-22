import { Component, OnInit } from '@angular/core';
import {DossierService} from "../../services/dossier.service";
import {Dossier} from "../../../model/Dossier";

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent implements OnInit {

  public dossier: Dossier | undefined;
  public name: string = "";

  constructor(private dossierServ: DossierService) {
  }

  ngOnInit(): void {
    this.dossierServ.get("http://localhost:9090/api/dossier/").subscribe(dossier => {
      this.dossier = dossier as Dossier;
      console.log(this.dossier);
      this.name = this.dossier.name;
      console.log(this.name);
    });
  }

}
