import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { ServicesDataService } from '../../services/services-data.service';
import { AuthService } from '../../services/auth.service';
import { ServiceCategory, Service } from '../../models/service.model';
import { ServiceModalComponent } from '../../components/modals/service-modal/service-modal.component';
import { LoginModalComponent } from '../../components/modals/login-modal/login-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  serviceCategories: ServiceCategory[] = [];
  searchQuery = '';
  isLoading = true;

  constructor(
    private router: Router,
    private modalService: NgbModal,
    private servicesDataService: ServicesDataService,
    private authService: AuthService,
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.loadServiceCategories();
  }

  private loadServiceCategories(): void {
    this.servicesDataService.getServiceCategories().subscribe({
      next: (categories) => {
        this.serviceCategories = categories;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading service categories:', error);
        this.isLoading = false;
      }
    });
  }

  onServiceClick(service: Service): void {
    if (!this.authService.isAuthenticated()) {
      const loginModal = this.modalService.open(LoginModalComponent, {
        centered: true,
        backdrop: 'static'
      });

      loginModal.result.then((result) => {
        if (result === 'login_success') {
          this.openServiceModal(service);
        }
      });
    } else {
      this.openServiceModal(service);
    }
  }

  private openServiceModal(service: Service): void {
    const modalRef = this.modalService.open(ServiceModalComponent, {
      centered: true,
      size: 'lg'
    });

    modalRef.componentInstance.service = service;
  }

  onCategoryClick(categoryId: string): void {
    this.router.navigate(['/procedures', categoryId]);
  }

  onSearch(): void {
    if (this.searchQuery.trim()) {
      this.router.navigate(['/procedures'], {
        queryParams: { search: this.searchQuery.trim() }
      });
    }
  }

  getCategoryIcon(icon: string): string {
    return icon || 'fas fa-cog';
  }

  getPassportService(): Service | null {
    for (const category of this.serviceCategories) {
      const passportService = category.services.find(service => service.id === 'passport');
      if (passportService) {
        return passportService;
      }
    }
    return null;
  }
}