import { Component, OnInit} from '@angular/core';
import { ProviderService } from '../../../services/provider.service';
import { Router } from '@angular/router';
import { TokenStorageService } from '../../auth/token-storage.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../../services/user.service';
import { Provider } from '../../../models/Provider';
import { userDetail } from '../../../models/user-detail';

@Component({
  selector: 'app-add-provider',
  templateUrl: './add-provider.component.html',
  styleUrls: ['./add-provider.component.scss']
})
export class AddProviderComponent implements OnInit {
  
  provider : Provider = {
    providerId: null,
    name: '',
    creationDate: null,
    isActive: true,
    companyId: null
  }

  constructor(private providerService: ProviderService, private modalServiceClose: NgbActiveModal,
    private router: Router, private tokenStorage: TokenStorageService,
    private userService : UserService) { }

  ngOnInit() {
    this.getUserLoggedInfo();
  }

  saveProvider(data : Provider) {
    this.provider.name = data.name;
    this.providerService.addProvider(this.provider);
    this.modalServiceClose.close();
    this.router.navigateByUrl('/provider');
  }

  getUserLoggedInfo() {
    let email = this.tokenStorage.getUsername();
      this.userService.getUserInfor(email).subscribe((data : userDetail) => {
        this.provider.companyId = data.companyId;
    });
  }
}
