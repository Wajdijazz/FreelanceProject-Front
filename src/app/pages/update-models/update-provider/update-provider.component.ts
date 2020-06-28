import { Component, OnInit, Input } from '@angular/core';
import { ProviderService } from '../../../services/provider.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Provider } from '../../../models/Provider';

@Component({
  selector: 'app-update-provider',
  templateUrl: './update-provider.component.html',
  styleUrls: ['./update-provider.component.scss']
})
export class UpdateProviderComponent implements OnInit {
  
  @Input() provider;

  constructor(private providerService: ProviderService,private modalServiceClose: NgbActiveModal,
    private router : Router) { }

  ngOnInit() {
  }

  updateProvider(provider : Provider) {
    provider.providerId = this.provider.providerId;
    this.providerService.updateProvider(provider);
    this.modalServiceClose.close();
    this.router.navigateByUrl('/provider');
  }
}
