import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { CompanyClient } from '../../../models/company-client';
import { CompanyClientService } from '../../../services/company-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-company-client',
  templateUrl: './add-company-client.component.html',
  styleUrls: ['./add-company-client.component.scss']
})
export class AddCompanyClientComponent implements OnInit {

  constructor(private router: Router,public activeModal: NgbActiveModal,
     private companyClientService : CompanyClientService,
     private modalService: NgbActiveModal
     ) { 
        
}

  companyClient : CompanyClient ={
    companyId : null,
    companyName : '',
    companyPhone : null,
    companyWebSite : '',
    emailContact : '',
    firstNameContact : '',
    lastNameContact : '',
    phoneContact : null
  }

  ngOnInit() {
   
  }

  addCompanyClient(data : any){
   this.companyClientService.saveCompanyClient(data);
   this.modalService.close();
   this.router.navigateByUrl('/company-client');
  }



}
