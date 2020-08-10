import { Component, OnInit, Input } from '@angular/core';
import { ItemFamilyService } from '../../../services/item-family.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ItemFamily } from '../../../models/ItemFamily';

@Component({
  selector: 'app-update-item-family',
  templateUrl: './update-item-family.component.html',
  styleUrls: ['./update-item-family.component.scss']
})
export class UpdateItemFamilyComponent implements OnInit {
  @Input() itemFamily;
  constructor(private itemFamilyService : ItemFamilyService, 
    private modalServiceClose: NgbActiveModal, private router : Router) { }

  ngOnInit() {
  }

  updateItemFamily(itemFamily : ItemFamily) {
    itemFamily.itemFamilyId = this.itemFamily.itemFamilyId;
    this.itemFamilyService.updateItemFamily(itemFamily);
    this.modalServiceClose.close();
    this.router.navigateByUrl('/item/family');
  }

}
