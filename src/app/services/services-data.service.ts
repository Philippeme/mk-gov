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
          providedBy: 'DGSN (Direction Générale de la Sûreté Nationale)',
          legalTexts: [
            {
              id: 'passport-law-1',
              title: 'Loi N° 2016/007 du 12 juillet 2016 portant Code de la nationalité camerounaise',
              content: 'Cette loi définit les conditions d\'acquisition, de perte et de recouvrement de la nationalité camerounaise, ainsi que les droits et devoirs qui en découlent...',
              pdfUrl: '/assets/legal/passport-law-2016.pdf'
            },
            {
              id: 'passport-decree',
              title: 'Décret N° 2019/286 du 29 mai 2019 fixant les modalités d\'établissement du passeport biométrique',
              content: 'Ce décret fixe les conditions et modalités d\'établissement, de délivrance et de gestion du passeport biométrique camerounais...',
              pdfUrl: '/assets/legal/passport-decree-2019.pdf'
            }
          ],
          isImplemented: true,
          canApplyFor: [ApplicantType.SELF, ApplicantType.CHILD]
        },
        {
          id: 'national-id',
          categoryId: 'police-justice',
          nameKey: 'services.national_id.name',
          descriptionKey: 'services.national_id.description',
          detailedDescriptionKey: 'services.national_id.detailed_description',
          requirements: [
            {
              id: 'birth-cert-ni',
              nameKey: 'requirements.birth_certificate',
              descriptionKey: 'requirements.birth_cert_desc',
              isMandatory: true,
              documentType: DocumentType.BIRTH_CERTIFICATE
            },
            {
              id: 'photos-ni',
              nameKey: 'requirements.passport_photos',
              descriptionKey: 'requirements.passport_photos_desc',
              isMandatory: true,
              documentType: DocumentType.PHOTO
            }
          ],
          processingTime: '2-4 weeks',
          cost: 5000,
          currency: 'XAF',
          providedBy: 'Ministry of Interior',
          isImplemented: false,
          canApplyFor: [ApplicantType.SELF]
        },
        {
          id: 'criminal-record',
          categoryId: 'police-justice',
          nameKey: 'services.criminal_record.name',
          descriptionKey: 'services.criminal_record.description',
          detailedDescriptionKey: 'services.criminal_record.detailed_description',
          requirements: [
            {
              id: 'id-card-cr',
              nameKey: 'requirements.national_id',
              descriptionKey: 'requirements.national_id_desc',
              isMandatory: true,
              documentType: DocumentType.IDENTITY
            }
          ],
          processingTime: '1-3 days',
          cost: 1000,
          currency: 'XAF',
          providedBy: 'Ministry of Justice',
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
              id: 'requester-id',
              nameKey: 'requirements.requester_id',
              descriptionKey: 'requirements.requester_id_desc',
              isMandatory: true,
              documentType: DocumentType.IDENTITY
            }
          ],
          processingTime: 'Immediate to 48 hours',
          cost: 300,
          currency: 'XAF',
          providedBy: 'Civil Registry Office',
          legalTexts: [
            {
              id: 'civil-status-law',
              title: 'Ordonnance N° 81-02 du 29 juin 1981 portant organisation de l\'état civil',
              content: 'Cette ordonnance organise la tenue des registres d\'état civil et définit les procédures de délivrance des actes...',
              pdfUrl: '/assets/legal/civil-status-law-1981.pdf'
            }
          ],
          isImplemented: true,
          canApplyFor: [ApplicantType.SELF, ApplicantType.OTHER]
        },
        {
          id: 'marriage-certificate',
          categoryId: 'family',
          nameKey: 'services.marriage_certificate.name',
          descriptionKey: 'services.marriage_certificate.description',
          detailedDescriptionKey: 'services.marriage_certificate.detailed_description',
          requirements: [
            {
              id: 'marriage-form',
              nameKey: 'requirements.request_form',
              descriptionKey: 'requirements.request_form_desc',
              isMandatory: true,
              documentType: DocumentType.FORM
            }
          ],
          processingTime: 'Immediate to 24 hours',
          cost: 300,
          currency: 'XAF',
          providedBy: 'Civil Registry Office',
          isImplemented: false,
          canApplyFor: [ApplicantType.SELF, ApplicantType.OTHER]
        },
        {
          id: 'death-certificate',
          categoryId: 'family',
          nameKey: 'services.death_certificate.name',
          descriptionKey: 'services.death_certificate.description',
          detailedDescriptionKey: 'services.death_certificate.detailed_description',
          requirements: [
            {
              id: 'death-form',
              nameKey: 'requirements.request_form',
              descriptionKey: 'requirements.request_form_desc',
              isMandatory: true,
              documentType: DocumentType.FORM
            }
          ],
          processingTime: 'Immediate to 24 hours',
          cost: 300,
          currency: 'XAF',
          providedBy: 'Civil Registry Office',
          isImplemented: false,
          canApplyFor: [ApplicantType.OTHER]
        }
      ]
    },
    {
      id: 'transport',
      nameKey: 'categories.transport.name',
      descriptionKey: 'categories.transport.description',
      icon: 'fas fa-car',
      color: '#ff6d01',
      services: [
        {
          id: 'driving-license',
          categoryId: 'transport',
          nameKey: 'services.driving_license.name',
          descriptionKey: 'services.driving_license.description',
          detailedDescriptionKey: 'services.driving_license.detailed_description',
          requirements: [
            {
              id: 'driving-form',
              nameKey: 'requirements.driving_form',
              descriptionKey: 'requirements.driving_form_desc',
              isMandatory: true,
              documentType: DocumentType.FORM
            },
            {
              id: 'medical-cert',
              nameKey: 'requirements.medical_certificate',
              descriptionKey: 'requirements.medical_cert_desc',
              isMandatory: true,
              documentType: DocumentType.AUTHORIZATION
            }
          ],
          processingTime: '2-4 weeks',
          cost: 25000,
          currency: 'XAF',
          providedBy: 'Ministry of Transport',
          isImplemented: false,
          canApplyFor: [ApplicantType.SELF]
        }
      ]
    },
    {
      id: 'education',
      nameKey: 'categories.education.name',
      descriptionKey: 'categories.education.description',
      icon: 'fas fa-graduation-cap',
      color: '#9c27b0',
      services: [
        {
          id: 'diploma-certification',
          categoryId: 'education',
          nameKey: 'services.diploma_certification.name',
          descriptionKey: 'services.diploma_certification.description',
          detailedDescriptionKey: 'services.diploma_certification.detailed_description',
          requirements: [
            {
              id: 'diploma-original',
              nameKey: 'requirements.diploma_original',
              descriptionKey: 'requirements.diploma_original_desc',
              isMandatory: true,
              documentType: DocumentType.AUTHORIZATION
            }
          ],
          processingTime: '1-2 weeks',
          cost: 5000,
          currency: 'XAF',
          providedBy: 'Ministry of Higher Education',
          isImplemented: false,
          canApplyFor: [ApplicantType.SELF]
        }
      ]
    },
    {
      id: 'business',
      nameKey: 'categories.business.name',
      descriptionKey: 'categories.business.description',
      icon: 'fas fa-briefcase',
      color: '#607d8b',
      services: [
        {
          id: 'business-registration',
          categoryId: 'business',
          nameKey: 'services.business_registration.name',
          descriptionKey: 'services.business_registration.description',
          detailedDescriptionKey: 'services.business_registration.detailed_description',
          requirements: [
            {
              id: 'business-form',
              nameKey: 'requirements.business_form',
              descriptionKey: 'requirements.business_form_desc',
              isMandatory: true,
              documentType: DocumentType.FORM
            }
          ],
          processingTime: '1-2 weeks',
          cost: 50000,
          currency: 'XAF',
          providedBy: 'CFCE (Centre de Formalités de Création d\'Entreprises)',
          isImplemented: false,
          canApplyFor: [ApplicantType.SELF]
        }
      ]
    },
    {
      id: 'public-service',
      nameKey: 'categories.public_service.name',
      descriptionKey: 'categories.public_service.description',
      icon: 'fas fa-user-tie',
      color: '#795548',
      services: [
        {
          id: 'civil-service-application',
          categoryId: 'public-service',
          nameKey: 'services.civil_service_application.name',
          descriptionKey: 'services.civil_service_application.description',
          detailedDescriptionKey: 'services.civil_service_application.detailed_description',
          requirements: [],
          processingTime: '1-3 months',
          cost: 0,
          currency: 'XAF',
          providedBy: 'Ministry of Public Service',
          isImplemented: false,
          canApplyFor: [ApplicantType.SELF]
        }
      ]
    },
    {
      id: 'land-construction',
      nameKey: 'categories.land_construction.name',
      descriptionKey: 'categories.land_construction.description',
      icon: 'fas fa-home',
      color: '#4caf50',
      services: [
        {
          id: 'land-title',
          categoryId: 'land-construction',
          nameKey: 'services.land_title.name',
          descriptionKey: 'services.land_title.description',
          detailedDescriptionKey: 'services.land_title.detailed_description',
          requirements: [],
          processingTime: '3-6 months',
          cost: 100000,
          currency: 'XAF',
          providedBy: 'Ministry of State Property',
          isImplemented: false,
          canApplyFor: [ApplicantType.SELF]
        }
      ]
    },
    {
      id: 'consular',
      nameKey: 'categories.consular.name',
      descriptionKey: 'categories.consular.description',
      icon: 'fas fa-passport',
      color: '#2196f3',
      services: [
        {
          id: 'visa-application',
          categoryId: 'consular',
          nameKey: 'services.visa_application.name',
          descriptionKey: 'services.visa_application.description',
          detailedDescriptionKey: 'services.visa_application.detailed_description',
          requirements: [],
          processingTime: '1-4 weeks',
          cost: 50000,
          currency: 'XAF',
          providedBy: 'Ministry of External Relations',
          isImplemented: false,
          canApplyFor: [ApplicantType.SELF]
        }
      ]
    },
    {
      id: 'health',
      nameKey: 'categories.health.name',
      descriptionKey: 'categories.health.description',
      icon: 'fas fa-heartbeat',
      color: '#f44336',
      services: [
        {
          id: 'health-facility-authorization',
          categoryId: 'health',
          nameKey: 'services.health_facility_authorization.name',
          descriptionKey: 'services.health_facility_authorization.description',
          detailedDescriptionKey: 'services.health_facility_authorization.detailed_description',
          requirements: [],
          processingTime: '1-3 months',
          cost: 200000,
          currency: 'XAF',
          providedBy: 'Ministry of Public Health',
          isImplemented: false,
          canApplyFor: [ApplicantType.SELF]
        }
      ]
    },
    {
      id: 'civic-life',
      nameKey: 'categories.civic_life.name',
      descriptionKey: 'categories.civic_life.description',
      icon: 'fas fa-flag',
      color: '#ff9800',
      services: [
        {
          id: 'event-authorization',
          categoryId: 'civic-life',
          nameKey: 'services.event_authorization.name',
          descriptionKey: 'services.event_authorization.description',
          detailedDescriptionKey: 'services.event_authorization.detailed_description',
          requirements: [],
          processingTime: '1-2 weeks',
          cost: 10000,
          currency: 'XAF',
          providedBy: 'Prefecture',
          isImplemented: false,
          canApplyFor: [ApplicantType.SELF]
        }
      ]
    }
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
    const searchTerm = query.toLowerCase();

    for (const category of this.serviceCategories) {
      for (const service of category.services) {
        if (service.nameKey.toLowerCase().includes(searchTerm) ||
          service.descriptionKey.toLowerCase().includes(searchTerm) ||
          service.detailedDescriptionKey.toLowerCase().includes(searchTerm)) {
          results.push(service);
        }
      }
    }
    return of(results);
  }
}