import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ServiceCategory, Service, DocumentType, ApplicantType } from '../models/service.model';

@Injectable({
  providedIn: 'root'
})
export class ServicesDataService {
  private serviceCategories: ServiceCategory[] = [
    {
      id: 'police-justice',
      nameKey: 'categories.police_justice.name',
      descriptionKey: 'categories.police_justice.description',
      icon: 'fas fa-balance-scale',
      color: '#1a73e8',
      services: [
        {
          id: 'passport',
          categoryId: 'police-justice',
          nameKey: 'services.passport.name',
          descriptionKey: 'services.passport.description',
          detailedDescriptionKey: 'services.passport.detailed_description',
          requirements: [
            {
              id: 'passport-form',
              nameKey: 'requirements.passport_form',
              descriptionKey: 'requirements.passport_form_desc',
              isMandatory: true,
              documentType: DocumentType.FORM
            },
            {
              id: 'birth-cert',
              nameKey: 'requirements.birth_certificate',
              descriptionKey: 'requirements.birth_cert_desc',
              isMandatory: true,
              documentType: DocumentType.BIRTH_CERTIFICATE
            },
            {
              id: 'national-id',
              nameKey: 'requirements.national_id',
              descriptionKey: 'requirements.national_id_desc',
              isMandatory: true,
              documentType: DocumentType.IDENTITY
            },
            {
              id: 'photos',
              nameKey: 'requirements.passport_photos',
              descriptionKey: 'requirements.passport_photos_desc',
              isMandatory: true,
              documentType: DocumentType.PHOTO
            },
            {
              id: 'residence-proof',
              nameKey: 'requirements.residence_proof',
              descriptionKey: 'requirements.residence_proof_desc',
              isMandatory: true,
              documentType: DocumentType.RESIDENCE_PROOF
            }
          ],
          processingTime: '48 hours to 3 months',
          cost: 110000,
          currency: 'XAF',
          providedBy: 'DGSN',
          isImplemented: true,
          canApplyFor: [ApplicantType.SELF, ApplicantType.CHILD]
        },
        {
          id: 'national-id',
          categoryId: 'police-justice',
          nameKey: 'services.national_id.name',
          descriptionKey: 'services.national_id.description',
          detailedDescriptionKey: 'services.national_id.detailed_description',
          requirements: [],
          processingTime: '2-4 weeks',
          cost: 5000,
          currency: 'XAF',
          providedBy: 'Ministry of Interior',
          isImplemented: false,
          canApplyFor: [ApplicantType.SELF]
        }
      ]
    },
    {
      id: 'family',
      nameKey: 'categories.family.name',
      descriptionKey: 'categories.family.description',
      icon: 'fas fa-users',
      color: '#34a853',
      services: [
        {
          id: 'birth-certificate-copy',
          categoryId: 'family',
          nameKey: 'services.birth_certificate_copy.name',
          descriptionKey: 'services.birth_certificate_copy.description',
          detailedDescriptionKey: 'services.birth_certificate_copy.detailed_description',
          requirements: [
            {
              id: 'request-form',
              nameKey: 'requirements.request_form',
              descriptionKey: 'requirements.request_form_desc',
              isMandatory: true,
              documentType: DocumentType.FORM
            },
            {
              id: 'fiscal-stamp',
              nameKey: 'requirements.fiscal_stamp',
              descriptionKey: 'requirements.fiscal_stamp_desc',
              isMandatory: true,
              documentType: DocumentType.FISCAL_STAMP
            },
            {
              id: 'requester-id',
              nameKey: 'requirements.requester_id',
              descriptionKey: 'requirements.requester_id_desc',
              isMandatory: true,
              documentType: DocumentType.IDENTITY
            }
          ],
          processingTime: 'Immediate to 48 hours',
          cost: 200,
          currency: 'XAF',
          providedBy: 'Civil Registry',
          isImplemented: true,
          canApplyFor: [ApplicantType.SELF, ApplicantType.OTHER]
        }
      ]
    }
    // Additional categories would be added here...
  ];

  getServiceCategories(): Observable<ServiceCategory[]> {
    return of(this.serviceCategories);
  }

  getServicesByCategory(categoryId: string): Observable<Service[]> {
    const category = this.serviceCategories.find(cat => cat.id === categoryId);
    return of(category?.services || []);
  }

  getServiceById(serviceId: string): Observable<Service | undefined> {
    for (const category of this.serviceCategories) {
      const service = category.services.find(s => s.id === serviceId);
      if (service) {
        return of(service);
      }
    }
    return of(undefined);
  }

  searchServices(query: string): Observable<Service[]> {
    const results: Service[] = [];
    for (const category of this.serviceCategories) {
      for (const service of category.services) {
        if (service.nameKey.toLowerCase().includes(query.toLowerCase()) ||
            service.descriptionKey.toLowerCase().includes(query.toLowerCase())) {
          results.push(service);
        }
      }
    }
    return of(results);
  }
}