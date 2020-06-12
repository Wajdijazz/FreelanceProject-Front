import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../../models/user';
import { UserService } from '../../../../services/user.service';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';




@Component({
  selector: 'app-basic-reg',
  templateUrl: './basic-reg.component.html',
  styleUrls: ['./basic-reg.component.scss']
})
export class BasicRegComponent implements OnInit {

  @Input() companyClientId;
  @Input() emailContact;

  user : User = {
    userId : null,
    email : '',
    password : '',
    confirmedPassword : '',
    personId : 2,
    companyClientId : null,
    role  : [],
  }

  constructor(private userService : UserService,
     private router: Router, private modalService: NgbActiveModal
     ) { }

  ngOnInit() {
    document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
    this.user.email = this.emailContact;
    this.user.role.push("ADMIN");
    
  }

  saveAdminCompany(admin : User) {
    this.user.email = admin.email;
    this.user.companyClientId = this.companyClientId;
    this.user.password = admin.password;
    this.user.confirmedPassword = admin.confirmedPassword;
    this.userService.saveUser(this.user);
   
    this.modalService.close();
    this.router.navigateByUrl('/company-client');
  }
   
}
