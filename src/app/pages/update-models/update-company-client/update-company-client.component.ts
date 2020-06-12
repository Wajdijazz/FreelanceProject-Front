import { Component, OnInit, Input } from '@angular/core';
import { CompanyClient } from '../../../models/company-client';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CompanyClientService } from '../../../services/company-client.service';

@Component({
  selector: 'app-update-company-client',
  templateUrl: './update-company-client.component.html',
  styleUrls: ['./update-company-client.component.scss']
})
export class UpdateCompanyClientComponent implements OnInit {
  @Input() companyClient;
  constructor(private router: Router,public activeModal: NgbActiveModal,
    private companyClientService : CompanyClientService,
    private modalService: NgbActiveModal) { }

  ngOnInit() {
  }

  updateCompanyClient (companyClientFurm : CompanyClient) {
    this.companyClientService
    .updateCompanyClient(companyClientFurm, this.companyClient.companyId);
    this.modalService.close();
    this.router.navigateByUrl('/company-client');

  }

}
