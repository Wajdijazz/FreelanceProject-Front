import { Component, OnInit } from '@angular/core';
import { ItemFamilyService } from '../../../services/item-family.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TokenStorageService } from '../../auth/token-storage.service';
import { Router, NavigationEnd } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { userDetail } from '../../../models/user-detail';
import { ItemFamily } from '../../../models/ItemFamily';
import { AddItemFamilyComponent } from '../../add-models/add-item-family/add-item-family.component';
import { UpdateItemFamilyComponent } from '../../update-models/update-item-family/update-item-family.component';

@Component({
  selector: 'app-item-family',
  templateUrl: './item-family.component.html',
  styleUrls: ['./item-family.component.scss']
})
export class ItemFamilyComponent implements OnInit {
  mySubscription: any;
  itemsFamily: ItemFamily[];

  constructor(private itemFamilyService : ItemFamilyService, private modalService: NgbModal,
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
    this.getItemsFamily();
  }

  getItemsFamily() {
    let email = this.tokenStorage.getUsername();
    this.userService.getUserInfor(email).subscribe((data : userDetail) => {
        this.itemFamilyService.getAllItemFamily(data.companyId).subscribe((data : ItemFamily [] )=> {
        this.itemsFamily = data;
      })
    });
  }

  addItemFamily() {
    this.modalService.open(AddItemFamilyComponent);
  }

  updateItemFamily(itemFamily : ItemFamily){
    const modalRef = this.modalService.open(UpdateItemFamilyComponent);
    modalRef.componentInstance.itemFamily = itemFamily;
  }

  deleteItemFamily(itemFamilyId : Number) {
    this.itemFamilyService.deleteItemFamily(itemFamilyId);
    this.router.navigateByUrl('/item/family');

  }

}
