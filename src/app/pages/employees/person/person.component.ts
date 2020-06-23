import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../../services/person.service';
import { Router, NavigationEnd } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TokenStorageService } from '../../auth/token-storage.service';
import { UserService } from '../../../services/user.service';
import { userDetail } from '../../../models/user-detail';
import { AddPersonComponent } from '../../add-models/add-person/add-person.component';
import { UpdatePersonComponent } from '../../update-models/update-person/update-person.component';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  persons: any;
  mySubscription: any;

  constructor(private personService : PersonService,  private modalService: NgbModal,
    private router: Router,   private tokenStorage: TokenStorageService, 
    private userService : UserService, ) { 
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
          this.router.navigated = false;
      }
    });
  }

  ngOnInit() {
    this.getAllPersons();
  }

  getAllPersons() {
    let email = this.tokenStorage.getUsername();
    this.userService.getUserInfor(email).subscribe((data : userDetail) => {
       this.personService.getAllPersons(data.companyId).subscribe((data : any )=>{
         this.persons = data;
       });
    });
  }

  addPerson() {
    this.modalService.open(AddPersonComponent);
  }

  
  deletePerson(personId : Number) {
    this.personService.deletePerson(personId);
    this.router.navigateByUrl('/employees/person');
  }

  updatePerson(person) {
    const modalRef = this.modalService.open(UpdatePersonComponent);
    modalRef.componentInstance.person = person;
  }

}
