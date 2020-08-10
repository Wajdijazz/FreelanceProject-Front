import { Component, OnInit } from '@angular/core';
import { ItemFamilyService } from '../../../services/item-family.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { TokenStorageService } from '../../auth/token-storage.service';
import { UserService } from '../../../services/user.service';
import { userDetail } from '../../../models/user-detail';
import { ItemFamily } from '../../../models/ItemFamily';

@Component({
  selector: 'app-add-item-family',
  templateUrl: './add-item-family.component.html',
  styleUrls: ['./add-item-family.component.scss']
})
export class AddItemFamilyComponent implements OnInit {
  itemFamily : ItemFamily = {
     itemFamilyId : null,
     description : '',
     creationDate : null,
     isActive : true,
     companyId : null
  }
  constructor(private itemFamilyService : ItemFamilyService,  private modalServiceClose: NgbActiveModal,
    private router : Router, private tokenStorage: TokenStorageService,
     private userService : UserService) { }

  ngOnInit() {
    this.getUserLoggedInfo();
  }

  getUserLoggedInfo() {
    let email = this.tokenStorage.getUsername();
      this.userService.getUserInfor(email).subscribe((data : userDetail) => {
        this.itemFamily.companyId = data.companyId;
    });
  }

  saveItemFamily(itemFamily : ItemFamily) {
    this.itemFamily.description = itemFamily.description;
    this.itemFamilyService.addItemFamily(this.itemFamily);
    this.modalServiceClose.close();
    this.router.navigateByUrl('/item/family');
  }

}
