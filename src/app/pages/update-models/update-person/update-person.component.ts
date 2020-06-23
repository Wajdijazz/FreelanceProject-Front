import { Component, OnInit, Input } from '@angular/core';
import { DepartmentService } from '../../../services/department.service';
import { TokenStorageService } from '../../auth/token-storage.service';
import { UserService } from '../../../services/user.service';
import { userDetail } from '../../../models/user-detail';
import { Department } from '../../../models/department';
import { Person } from '../../../models/Person';
import { PersonService } from '../../../services/person.service';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-update-person',
  templateUrl: './update-person.component.html',
  styleUrls: ['./update-person.component.scss']
})
export class UpdatePersonComponent implements OnInit {
  @Input() person;


 departments: Department[];
 department : Department;
 departmentId: Number;
 personDto : Person ={
   personId : null,
   firstName : '',
   lastName : '',
   phoneNumber : null,
   departmentId : null,
   companyId : null
 }

  constructor(private personService: PersonService,private departmentService : DepartmentService, 
    private tokenStorage: TokenStorageService, 
    private userService : UserService,   private modalServiceClose: NgbActiveModal,
    private router : Router) { }

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

  updatePerson(person : Person) {
    this.personDto.personId =  this.person.personId;
    this.personDto.firstName = person.firstName;
    this.personDto.lastName = person.lastName;
    this.personDto.phoneNumber = person.phoneNumber;
    this.personDto.departmentId = this.departmentId;
    this.personDto.companyId = this.person.companyId;
    this.personService.updatePerson(this.personDto);
    this.modalServiceClose.close();
    this.router.navigateByUrl('/employees/person');
  }

}
