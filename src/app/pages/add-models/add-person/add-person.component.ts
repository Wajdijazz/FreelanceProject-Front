import { Component, OnInit } from '@angular/core';
import { Person } from '../../../models/Person';
import { TokenStorageService } from '../../auth/token-storage.service';
import { UserService } from '../../../services/user.service';
import { DepartmentService } from '../../../services/department.service';
import { userDetail } from '../../../models/user-detail';
import { Department } from '../../../models/department';
import { PersonService } from '../../../services/person.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.scss']
})
export class AddPersonComponent implements OnInit {

  person : Person = {
     personId : null,
     firstName : '',
     lastName : '',
     phoneNumber : null,
     departmentId : null,
     companyId : null
   }

  departments: Department[];
  department : Department;
  departmentId: Number;

  constructor(private tokenStorage: TokenStorageService, private userService : UserService,
    private departmentService : DepartmentService, private personService : PersonService,
    private modalServiceClose: NgbActiveModal, private router : Router) { }

  ngOnInit() {
    this.getDepartments();
  }

  getDepartments(){
    let email = this.tokenStorage.getUsername();
    this.userService.getUserInfor(email).subscribe((data : userDetail) => {
      this.person.companyId = data.companyId;
        this.departmentService.getAllDepartments(data.companyId).subscribe((data : Department [] )=> {
        this.departments = data;
      })
    });
  }

  selectDepartment(departmentId : Number) {
    this.departmentId = departmentId;
  }

  savePerson() {
    this.person.departmentId =  this.departmentId;
    this.personService.savePerson(this.person);
    this.modalServiceClose.close();
    this.router.navigateByUrl('/employees/person');
  }


}
