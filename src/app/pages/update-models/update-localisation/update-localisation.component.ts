import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Localisation } from '../../../models/localisation';
import { LocalisationService } from '../../../services/localisation.service';

@Component({
  selector: 'app-update-localisation',
  templateUrl: './update-localisation.component.html',
  styleUrls: ['./update-localisation.component.scss']
})
export class UpdateLocalisationComponent implements OnInit {
  @Input() localisation;
  stocks: { stock: string; }[];
  stock: any;
    constructor(private localisationService : LocalisationService, private modalServiceClose: NgbActiveModal,
       private router : Router) { }

  ngOnInit() {
    this.stocks = [{stock : "Yes"}, {stock : "No"}];
  }

  selectStock(stock : any) {
    this.stock= stock;
  }

  updateLocalisation(localisation : Localisation) {
    localisation.localisationId = this.localisation.localisationId;
    localisation.isInStock = this.stock;
    this.localisationService.updateLocalisation(localisation);
    this.modalServiceClose.close();
    this.router.navigateByUrl('/item/localisation');
  }

}
