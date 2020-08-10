import { Component, OnInit } from '@angular/core';
import { LocalisationService } from '../../../services/localisation.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, NavigationEnd } from '@angular/router';
import { TokenStorageService } from '../../auth/token-storage.service';
import { UserService } from '../../../services/user.service';
import { userDetail } from '../../../models/user-detail';
import { Localisation } from '../../../models/localisation';
import { AddLocalisationComponent } from '../../add-models/add-localisation/add-localisation.component';
import { UpdateLocalisationComponent } from '../../update-models/update-localisation/update-localisation.component';

@Component({
  selector: 'app-localisation',
  templateUrl: './localisation.component.html',
  styleUrls: ['./localisation.component.scss']
})
export class LocalisationComponent implements OnInit {
  mySubscription: any;
  localisations: Localisation[];

  constructor(private localisationService : LocalisationService, private modalService: NgbModal,
    private router: Router,   private tokenStorage: TokenStorageService, private userService : UserService) {
      this.router.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
      };
    this.mySubscription = this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
            this.router.navigated = false;
        }
      });
  }

  ngOnInit() {
    this.getLocalisations();
  }

  getLocalisations() {
    let email = this.tokenStorage.getUsername();
    this.userService.getUserInfor(email).subscribe((data : userDetail) => {
        this.localisationService.getAllLocalisations(data.companyId).subscribe((data : Localisation [] )=> {
        this.localisations = data;
      })
    });
  }

  
  addLocalisation() {
    this.modalService.open(AddLocalisationComponent);
  }
  updateLocalisation(localisation : Localisation){
    const modalRef = this.modalService.open(UpdateLocalisationComponent);
    modalRef.componentInstance.localisation = localisation;
  }

  deleteLocalisation(localisationId : Number) {
    this.localisationService.deleteLocalisation(localisationId);
    this.router.navigateByUrl('/item/localisation');

  }

}
