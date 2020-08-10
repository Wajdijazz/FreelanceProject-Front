import { Component, OnInit } from '@angular/core';
import { Localisation } from '../../../models/localisation';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { TokenStorageService } from '../../auth/token-storage.service';
import { UserService } from '../../../services/user.service';
import { userDetail } from '../../../models/user-detail';
import { LocalisationService } from '../../../services/localisation.service';

@Component({
  selector: 'app-add-localisation',
  templateUrl: './add-localisation.component.html',
  styleUrls: ['./add-localisation.component.scss']
})
export class AddLocalisationComponent implements OnInit {
  stocks: { stock: string; }[];
  localisation : Localisation = {
    localisationId : null,
    description : '',
    creationDate : null,
    isInStock : '',
    companyId : null,
  }
  stock: any;

  constructor( private localisationService : LocalisationService,  private modalServiceClose: NgbActiveModal,
    private router : Router, private tokenStorage: TokenStorageService,
     private userService : UserService) { }

  ngOnInit() {
    this.getUserLoggedInfo();
    this.stocks = [{stock : "Yes"}, {stock : "No"}]
  }

  selectStock(stock : any) {
    this.stock= stock;
  }

  getUserLoggedInfo() {
    let email = this.tokenStorage.getUsername();
      this.userService.getUserInfor(email).subscribe((data : userDetail) => {
        this.localisation.companyId = data.companyId;
    });
  }
  saveLocalisation(localisation : Localisation) {
    this.localisation.isInStock = this.stock;
    this.localisation.description = localisation.description;
    this.localisationService.addLocalisation(this.localisation);
    this.modalServiceClose.close();
    this.router.navigateByUrl('/item/localisation');

  }



}
