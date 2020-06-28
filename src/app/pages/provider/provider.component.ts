import { Component, OnInit, Provider } from '@angular/core';
import { ProviderService } from './../../services/provider.service';
import { Router, NavigationEnd } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TokenStorageService } from '../auth/token-storage.service';
import { UserService } from '../../services/user.service';
import { userDetail } from '../../models/user-detail';
import { AddProviderComponent } from '../add-models/add-provider/add-provider.component';
import { UpdateProviderComponent } from '../update-models/update-provider/update-provider.component';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.scss']
})
export class ProviderComponent implements OnInit {
  providers: Provider[];
  mySubscription: any;

  constructor(private providerService: ProviderService, private modalService: NgbModal,
    private router: Router, private tokenStorage: TokenStorageService,
    private userService : UserService) {     
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
    this.getProviders();
  }

  
  getProviders(){
    let email = this.tokenStorage.getUsername();
    this.userService.getUserInfor(email).subscribe((data : userDetail) => {
        this.providerService.getAllProviders(data.companyId).subscribe((data : Provider [] )=> {
        this.providers = data;
      })
    });
  }

  addProvider() {
    this.modalService.open(AddProviderComponent);
  }

  deleteProvider(providerId : Number) {
    this.providerService.deleteProvider(providerId);
    this.router.navigateByUrl('/provider');
  }

  updateProvider(provider : Provider) {
    const modalRef = this.modalService.open(UpdateProviderComponent);
    modalRef.componentInstance.provider = provider;
  }


}
