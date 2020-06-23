import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../../models/user';
import { UserService } from '../../../../services/user.service';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { CompanyClientService } from '../../../../services/company-client.service';




@Component({
  selector: 'app-basic-reg',
  templateUrl: './basic-reg.component.html',
  styleUrls: ['./basic-reg.component.scss']
})
export class BasicRegComponent implements OnInit {

  @Input() company;

  user : User = {
    userId : null,
    email : '',
    password : '',
    confirmedPassword : '',
    personId : null,
    companyClientId : null,
    role  : [],
  }

  constructor(private userService : UserService,
     private router: Router, private modalService: NgbActiveModal,
     private companyClientService : CompanyClientService,
     ) { }

  ngOnInit() {
    document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
 
  }

  saveAdminCompany(admin : User) {
    this.user.email = this.company.emailContact;
    this.user.role.push("GESTIONARY");
    this.user.companyClientId = this.company.companyId;
    this.user.personId = this.company.personId;
    this.user.password = admin.password;
    this.user.confirmedPassword = admin.confirmedPassword;
    this.userService.saveUser(this.user).subscribe(
      res => {
        this.modalService.close();
        this.router.navigateByUrl('/company-client');
       },
       (err) =>   {
        this.modalService.close();
        Swal.fire('error !','Profil not created.','error') ;
        this.companyClientService.deleteCompanyClient( this.company.companyId);
       }
    );
    this.modalService.close();
    this.router.navigateByUrl('/company-client');
  }
   
}
