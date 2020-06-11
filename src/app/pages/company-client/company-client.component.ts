import { Component, OnInit } from '@angular/core';
import { AddCompanyClientComponent } from '../../pages/add-models/add-company-client/add-company-client.component';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { CompanyClientService } from '../../services/company-client.service';
import { CompanyClient } from '../../models/company-client';
import { Router, NavigationEnd } from '@angular/router';
import { UpdateCompanyClientComponent } from '../update-models/update-company-client/update-company-client.component';

@Component({
  selector: 'app-company-client',
  templateUrl: './company-client.component.html',
  styleUrls: ['./company-client.component.scss']
})
export class CompanyClientComponent implements OnInit {
  companiesClients: CompanyClient[];
  mySubscription: any;

  constructor(private modalService: NgbModal, 
    private companyClientService : CompanyClientService,
    private router: Router) { 
      this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
  };
  this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
          this.router.navigated = false;
      }
  });}

  ngOnInit() {
   this.getAllCompanies();
  }

  addCompany() {
    this.modalService.open(AddCompanyClientComponent);
  }

  getAllCompanies() {
    this.companyClientService
    .getAllCompaniesClients().subscribe((companies: CompanyClient[]) => {
      this.companiesClients = companies;
  })
  
  }

  updateCompany(companyClient : CompanyClient) {
    const modalRef = this.modalService.open(UpdateCompanyClientComponent);
    modalRef.componentInstance.companyClient = companyClient;
  }

  deleteCompanyClient(companyClientId : Number) {
    this.companyClientService.deleteCompanyClient(companyClientId);
    this.getAllCompanies();
    this.router.navigateByUrl('/company-client');
  }


}
