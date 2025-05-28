import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { ServicesDataService } from '../../services/services-data.service';
import { AuthService } from '../../services/auth.service';
import { ServiceCategory, Service } from '../../models/service.model';
import { ServiceModalComponent } from '../../components/modals/service-modal/service-modal.component';

@Component({
  selector: 'app-procedures',
  templateUrl: './procedures.component.html',
  styleUrls: ['./procedures.component.scss']
})
export class ProceduresComponent implements OnInit {
  serviceCategories: ServiceCategory[] = [];
  filteredServices: Service[] = [];
  selectedCategory: string | null = null;
  searchQuery = '';
  isLoading = true;
  viewMode: 'categories' | 'services' = 'categories';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private servicesDataService: ServicesDataService,
    private authService: AuthService,
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.loadServiceCategories();

    // Handle route parameters
    this.route.params.subscribe(params => {
      if (params['category']) {
        this.selectedCategory = params['category'];
        this.viewMode = 'services';
        this.loadCategoryServices(params['category']);
      }
    });

    // Handle query parameters for search
    this.route.queryParams.subscribe(queryParams => {
      if (queryParams['search']) {
        this.searchQuery = queryParams['search'];
        this.performSearch();
      }
    });
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

  private loadCategoryServices(categoryId: string): void {
    this.servicesDataService.getServicesByCategory(categoryId).subscribe({
      next: (services) => {
        this.filteredServices = services;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading category services:', error);
        this.isLoading = false;
      }
    });
  }

  onCategoryClick(categoryId: string): void {
    this.router.navigate(['/procedures', categoryId]);
  }

  onServiceClick(service: Service): void {
    if (service.isImplemented) {
      // Navigate to service detail page first
      this.router.navigate(['/service-detail', service.id]);
    } else {
      // Show modal for non-implemented services
      const modalRef = this.modalService.open(ServiceModalComponent, {
        centered: true,
        size: 'lg'
      });
      modalRef.componentInstance.service = service;
    }
  }

  onSearch(): void {
    if (this.searchQuery.trim()) {
      this.performSearch();
    } else {
      this.backToCategories();
    }
  }

  private performSearch(): void {
    this.isLoading = true;
    this.viewMode = 'services';

    this.servicesDataService.searchServices(this.searchQuery).subscribe({
      next: (services) => {
        this.filteredServices = services;
        this.selectedCategory = null;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error searching services:', error);
        this.isLoading = false;
      }
    });
  }

  backToCategories(): void {
    this.viewMode = 'categories';
    this.selectedCategory = null;
    this.filteredServices = [];
    this.searchQuery = '';
    this.router.navigate(['/procedures']);
  }

  getCategoryById(categoryId: string | null): ServiceCategory | undefined {
    if (!categoryId) {
      return undefined;
    }
    return this.serviceCategories.find(cat => cat.id === categoryId);
  }

  getCategoryIcon(icon: string): string {
    return icon || 'fas fa-cog';
  }

  // Helper method for template to safely get category name
  getCategoryName(categoryId: string | null): string {
    const category = this.getCategoryById(categoryId);
    return category ? category.nameKey : '';
  }
}