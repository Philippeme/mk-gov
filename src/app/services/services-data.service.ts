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
      fname: 'Police & Justice',
      description: 'Identity documents, judicial records, and legal services',
      icon: 'fas fa-balance-scale',
      color: '#1a73e8',
      displayOrder: 1,
      isActive: true,
      procedures: [
        {
          id: 'passport',
          categoryId: 'police-justice',
          pname: 'Passport Application',
          shortdesc: 'Apply for a Cameroonian biometric passport online',
          longdesc: 'Electronic service for applying for a Cameroonian biometric passport. The application is processed by the General Delegation for National Security (DGSN) through their digital platform. The new biometric passport features advanced security technology with an integrated electronic chip and is internationally recognized.',
          documents: [
            {
              id: 'passport-form',
              name: 'Passport Application Form',
              description: 'Completed passport application form with accurate information',
              isRequired: true,
              documentType: DocumentType.FORM,
              type: 'input'
            },
            {
              id: 'birth-cert',
              name: 'Birth Certificate',
              description: 'Certified copy of birth certificate (less than 3 months old)',
              isRequired: true,
              documentType: DocumentType.BIRTH_CERTIFICATE,
              type: 'input'
            },
            {
              id: 'national-id',
              name: 'National Identity Card',
              description: 'Copy of valid national identity card or consular card',
              isRequired: true,
              documentType: DocumentType.IDENTITY,
              type: 'input'
            },
            {
              id: 'photos',
              name: 'Passport Photos',
              description: '12 standardized passport photos with white background',
              isRequired: true,
              documentType: DocumentType.PHOTO,
              type: 'input'
            },
            {
              id: 'residence-proof',
              name: 'Proof of Residence',
              description: 'Recent utility bill or residence certificate from local administration',
              isRequired: true,
              documentType: DocumentType.RESIDENCE_PROOF,
              type: 'input'
            }
          ],
          processtime: '48 hours to 3 months',
          servicecost: 110000,
          currency: 'XAF',
          providedBy: 'DGSN (Direction Générale de la Sûreté Nationale)',
          legaltext: 'Loi N° 2016/007 du 12 juillet 2016 portant Code de la nationalité camerounaise. Décret N° 2019/286 du 29 mai 2019 fixant les modalités d\'établissement du passeport biométrique.',
          published: true,
          displayOrder: 1,
          isActive: true,
          canApplyFor: [ApplicantType.SELF, ApplicantType.CHILD]
        },
        {
          id: 'national-id',
          categoryId: 'police-justice',
          pname: 'National Identity Card',
          shortdesc: 'Apply for national identity card',
          longdesc: 'Service for requesting a new national identity card or renewing an existing one. The CNI is a mandatory identity document for all Cameroonian citizens.',
          documents: [
            {
              id: 'birth-cert-ni',
              name: 'Birth Certificate',
              description: 'Certified copy of birth certificate (less than 3 months old)',
              isRequired: true,
              documentType: DocumentType.BIRTH_CERTIFICATE,
              type: 'input'
            },
            {
              id: 'photos-ni',
              name: 'Passport Photos',
              description: '12 standardized passport photos with white background',
              isRequired: true,
              documentType: DocumentType.PHOTO,
              type: 'input'
            }
          ],
          processtime: '2-4 weeks',
          servicecost: 5000,
          currency: 'XAF',
          providedBy: 'Ministry of Interior',
          published: false,
          displayOrder: 2,
          isActive: true,
          canApplyFor: [ApplicantType.SELF]
        },
        {
          id: 'criminal-record',
          categoryId: 'police-justice',
          pname: 'Criminal Record Extract',
          shortdesc: 'Request criminal record extract',
          longdesc: 'Official document certifying the criminal history or clean record of an individual. Required for various administrative procedures including business registration and employment.',
          documents: [
            {
              id: 'id-card-cr',
              name: 'National Identity Card',
              description: 'Copy of valid national identity card or consular card',
              isRequired: true,
              documentType: DocumentType.IDENTITY,
              type: 'input'
            }
          ],
          processtime: '1-3 days',
          servicecost: 1000,
          currency: 'XAF',
          providedBy: 'Ministry of Justice',
          published: false,
          displayOrder: 3,
          isActive: true,
          canApplyFor: [ApplicantType.SELF]
        }
      ]
    },
    {
      id: 'family',
      fname: 'Family',
      description: 'Civil status documents and family-related services',
      icon: 'fas fa-users',
      color: '#34a853',
      displayOrder: 2,
      isActive: true,
      procedures: [
        {
          id: 'birth-certificate-copy',
          categoryId: 'family',
          pname: 'Certified Copy of Birth Certificate',
          shortdesc: 'Request a certified copy of birth certificate',
          longdesc: 'Official service to obtain a certified copy of a birth certificate. The request is processed by the civil registry office where the birth was originally registered. This document is essential for various administrative procedures including passport applications, school enrollment, and legal proceedings.',
          documents: [
            {
              id: 'request-form',
              name: 'Request Form',
              description: 'Completed request form for certified copy',
              isRequired: true,
              documentType: DocumentType.FORM,
              type: 'input'
            },
            {
              id: 'requester-id',
              name: 'Requester\'s ID',
              description: 'Valid identification document of the requester',
              isRequired: true,
              documentType: DocumentType.IDENTITY,
              type: 'input'
            }
          ],
          processtime: 'Immediate to 48 hours',
          servicecost: 300,
          currency: 'XAF',
          providedBy: 'Civil Registry Office',
          legaltext: 'Ordonnance N° 81-02 du 29 juin 1981 portant organisation de l\'état civil',
          published: true,
          displayOrder: 1,
          isActive: true,
          canApplyFor: [ApplicantType.SELF, ApplicantType.OTHER]
        },
        {
          id: 'marriage-certificate',
          categoryId: 'family',
          pname: 'Marriage Certificate Copy',
          shortdesc: 'Request certified copy of marriage certificate',
          longdesc: 'Official copy of marriage certificate issued by the civil registry office.',
          documents: [
            {
              id: 'marriage-form',
              name: 'Request Form',
              description: 'Completed request form for certified copy',
              isRequired: true,
              documentType: DocumentType.FORM,
              type: 'input'
            }
          ],
          processtime: 'Immediate to 24 hours',
          servicecost: 300,
          currency: 'XAF',
          providedBy: 'Civil Registry Office',
          published: false,
          displayOrder: 2,
          isActive: true,
          canApplyFor: [ApplicantType.SELF, ApplicantType.OTHER]
        },
        {
          id: 'death-certificate',
          categoryId: 'family',
          pname: 'Death Certificate Copy',
          shortdesc: 'Request certified copy of death certificate',
          longdesc: 'Official copy of death certificate issued by the civil registry office.',
          documents: [
            {
              id: 'death-form',
              name: 'Request Form',
              description: 'Completed request form for certified copy',
              isRequired: true,
              documentType: DocumentType.FORM,
              type: 'input'
            }
          ],
          processtime: 'Immediate to 24 hours',
          servicecost: 300,
          currency: 'XAF',
          providedBy: 'Civil Registry Office',
          published: false,
          displayOrder: 3,
          isActive: true,
          canApplyFor: [ApplicantType.OTHER]
        }
      ]
    },
    {
      id: 'transport',
      fname: 'Transport',
      description: 'Driving licenses, vehicle registration, and transport permits',
      icon: 'fas fa-car',
      color: '#ff6d01',
      displayOrder: 3,
      isActive: true,
      procedures: [
        {
          id: 'driving-license',
          categoryId: 'transport',
          pname: 'Driving License',
          shortdesc: 'Apply for driving license',
          longdesc: 'Service for obtaining a driving license after passing the required theoretical and practical tests.',
          documents: [
            {
              id: 'driving-form',
              name: 'Driving License Application Form',
              description: 'Completed driving license application form',
              isRequired: true,
              documentType: DocumentType.FORM,
              type: 'input'
            },
            {
              id: 'medical-cert',
              name: 'Medical Certificate',
              description: 'Medical fitness certificate from authorized physician',
              isRequired: true,
              documentType: DocumentType.AUTHORIZATION,
              type: 'input'
            }
          ],
          processtime: '2-4 weeks',
          servicecost: 25000,
          currency: 'XAF',
          providedBy: 'Ministry of Transport',
          published: false,
          displayOrder: 1,
          isActive: true,
          canApplyFor: [ApplicantType.SELF]
        }
      ]
    },
    {
      id: 'education',
      fname: 'Education',
      description: 'Diploma certification, educational authorizations, and academic services',
      icon: 'fas fa-graduation-cap',
      color: '#9c27b0',
      displayOrder: 4,
      isActive: true,
      procedures: [
        {
          id: 'diploma-certification',
          categoryId: 'education',
          pname: 'Diploma Certification',
          shortdesc: 'Certify academic diplomas',
          longdesc: 'Official certification of academic diplomas for use abroad or for professional purposes.',
          documents: [
            {
              id: 'diploma-original',
              name: 'Original Diploma',
              description: 'Original diploma or certified copy for verification',
              isRequired: true,
              documentType: DocumentType.AUTHORIZATION,
              type: 'input'
            }
          ],
          processtime: '1-2 weeks',
          servicecost: 5000,
          currency: 'XAF',
          providedBy: 'Ministry of Higher Education',
          published: false,
          displayOrder: 1,
          isActive: true,
          canApplyFor: [ApplicantType.SELF]
        }
      ]
    },
    {
      id: 'business',
      fname: 'Business',
      description: 'Company registration, business permits, and commercial services',
      icon: 'fas fa-briefcase',
      color: '#607d8b',
      displayOrder: 5,
      isActive: true,
      procedures: [
        {
          id: 'business-registration',
          categoryId: 'business',
          pname: 'Business Registration',
          shortdesc: 'Register a new business',
          longdesc: 'Complete business registration process including commercial registry inscription and tax registration.',
          documents: [
            {
              id: 'business-form',
              name: 'Business Registration Form',
              description: 'Completed business registration application form',
              isRequired: true,
              documentType: DocumentType.FORM,
              type: 'input'
            }
          ],
          processtime: '1-2 weeks',
          servicecost: 50000,
          currency: 'XAF',
          providedBy: 'CFCE (Centre de Formalités de Création d\'Entreprises)',
          published: false,
          displayOrder: 1,
          isActive: true,
          canApplyFor: [ApplicantType.SELF]
        }
      ]
    },
    {
      id: 'public-service',
      fname: 'Public Service',
      description: 'Civil service applications and administrative procedures',
      icon: 'fas fa-user-tie',
      color: '#795548',
      displayOrder: 6,
      isActive: true,
      procedures: [
        {
          id: 'civil-service-application',
          categoryId: 'public-service',
          pname: 'Civil Service Application',
          shortdesc: 'Apply for civil service positions',
          longdesc: 'Application process for civil service competitions and government positions.',
          documents: [],
          processtime: '1-3 months',
          servicecost: 0,
          currency: 'XAF',
          providedBy: 'Ministry of Public Service',
          published: false,
          displayOrder: 1,
          isActive: true,
          canApplyFor: [ApplicantType.SELF]
        }
      ]
    },
    {
      id: 'land-construction',
      fname: 'Land & Construction',
      description: 'Land titles, building permits, and property certificates',
      icon: 'fas fa-home',
      color: '#4caf50',
      displayOrder: 7,
      isActive: true,
      procedures: [
        {
          id: 'land-title',
          categoryId: 'land-construction',
          pname: 'Land Title',
          shortdesc: 'Obtain land title',
          longdesc: 'Process for obtaining official land ownership titles and property certificates.',
          documents: [],
          processtime: '3-6 months',
          servicecost: 100000,
          currency: 'XAF',
          providedBy: 'Ministry of State Property',
          published: false,
          displayOrder: 1,
          isActive: true,
          canApplyFor: [ApplicantType.SELF]
        }
      ]
    },
    {
      id: 'consular',
      fname: 'Consular Services',
      description: 'Visa applications and document legalization',
      icon: 'fas fa-passport',
      color: '#2196f3',
      displayOrder: 8,
      isActive: true,
      procedures: [
        {
          id: 'visa-application',
          categoryId: 'consular',
          pname: 'Visa Application',
          shortdesc: 'Apply for travel visa',
          longdesc: 'Application process for travel visas to various countries through consular services.',
          documents: [],
          processtime: '1-4 weeks',
          servicecost: 50000,
          currency: 'XAF',
          providedBy: 'Ministry of External Relations',
          published: false,
          displayOrder: 1,
          isActive: true,
          canApplyFor: [ApplicantType.SELF]
        }
      ]
    },
    {
      id: 'health',
      fname: 'Health',
      description: 'Healthcare facility authorizations and medical services',
      icon: 'fas fa-heartbeat',
      color: '#f44336',
      displayOrder: 9,
      isActive: true,
      procedures: [
        {
          id: 'health-facility-authorization',
          categoryId: 'health',
          pname: 'Health Facility Authorization',
          shortdesc: 'Authorization to operate health facilities',
          longdesc: 'Licensing process for opening and operating healthcare facilities including clinics and pharmacies.',
          documents: [],
          processtime: '1-3 months',
          servicecost: 200000,
          currency: 'XAF',
          providedBy: 'Ministry of Public Health',
          published: false,
          displayOrder: 1,
          isActive: true,
          canApplyFor: [ApplicantType.SELF]
        }
      ]
    },
    {
      id: 'civic-life',
      fname: 'Civic Life',
      description: 'Event permits and civic activities authorization',
      icon: 'fas fa-flag',
      color: '#ff9800',
      displayOrder: 10,
      isActive: true,
      procedures: [
        {
          id: 'event-authorization',
          categoryId: 'civic-life',
          pname: 'Event Authorization',
          shortdesc: 'Authorization for public events',
          longdesc: 'Permit application for organizing public events, demonstrations, and cultural activities.',
          documents: [],
          processtime: '1-2 weeks',
          servicecost: 10000,
          currency: 'XAF',
          providedBy: 'Prefecture',
          published: false,
          displayOrder: 1,
          isActive: true,
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
    return of(category?.procedures || []);
  }

  getServiceById(serviceId: string): Observable<Service | undefined> {
    for (const category of this.serviceCategories) {
      const service = category.procedures.find(s => s.id === serviceId);
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
      for (const service of category.procedures) {
        if (service.pname.toLowerCase().includes(searchTerm) ||
          service.shortdesc.toLowerCase().includes(searchTerm) ||
          service.longdesc.toLowerCase().includes(searchTerm)) {
          results.push(service);
        }
      }
    }
    return of(results);
  }
}
