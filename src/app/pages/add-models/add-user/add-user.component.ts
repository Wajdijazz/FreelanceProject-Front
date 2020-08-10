import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';
import { PersonService } from '../../../services/person.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { TokenStorageService } from '../../auth/token-storage.service';
import { UserService } from '../../../services/user.service';
import { userDetail } from '../../../models/user-detail';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  user : User = {
    userId: null,
    email: '',
    password: '',
    confirmedPassword: '',
    personId: null,
    companyClientId: null,
    role  : [],
    autorized: ''
  }
  persons: any;
  roles: { roleName: string; }[];
  personId: Number;
  role: any;
  autorized: { autorized: string; }[];
  autority: any;
  constructor(private personService : PersonService,  private modalService: NgbActiveModal,
    private router: Router,   private tokenStorage: TokenStorageService, 
    private userService : UserService) { }

  ngOnInit() {
    this.getAllPersons();
    this.roles = [{roleName : "GESTIONARY"}, {roleName : "USER"}, {roleName : "AUDIT"}]
    this.autorized = [{autorized : "Yes"}, {autorized : "No"}]

  }

  getAllPersons() {
    let email = this.tokenStorage.getUsername();
    this.userService.getUserInfor(email).subscribe((data : userDetail) => {
      this.user.companyClientId = data.companyId;
       this.personService.getPersonListToAffectToUsers(data.companyId).subscribe((data : any )=>{
         this.persons = data;
       });
    });
  }

  selectPerson(personId : Number) {
    this.personId = personId;
  }

  
  selectRole(roleName : any) {
    this.role= roleName;
  }

  selectAutority(autorized : any) {
    this.autority= autorized;
  }

  saveUser(user : User) {
    this.user.email = user.email;
    this.user.role.push(this.role);
    this.user.personId = this.personId;
    this.user.password = user.password;
    this.user.confirmedPassword = user.confirmedPassword;
    this.user.autorized = this.autority;
    this.userService.saveUser(this.user).subscribe(
      res => {
        this.modalService.close();
        this.router.navigateByUrl('/user');
      },
      (err) =>   {
        this.modalService.close();
         Swal.fire(
        'error !',
        'email already exist.',
        'error'); 
      }
    )

  }


}
