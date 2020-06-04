import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { BasicRegComponent } from '../auth/registration/basic-reg/basic-reg.component';
import { AddPersonComponent } from '../add-person/add-person.component';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';  

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  constructor(public translate: TranslateService,public dialog: MatDialog, private router: Router) {

   }

  ngOnInit() {
    
  }

  addPerson() {
  this.router.navigateByUrl('/add-person');

  }

}
