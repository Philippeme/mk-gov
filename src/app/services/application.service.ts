import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { 
  Application, 
  ApplicationStatus, 
  ApplicantType, 
  Payment, 
  PaymentMethod,
  PaymentStatus,
  ApplicationTimeline,
  TimelineStatus
} from '../models/application.model';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  private applicationsSubject = new BehaviorSubject<Application[]>([]);
  public applications$ = this.applicationsSubject.asObservable();

  constructor() {
    this.loadApplications();
  }

  private loadApplications(): void {
    const savedApplications = localStorage.getItem('mk-gov-applications');
    if (savedApplications) {
      const applications = JSON.parse(savedApplications);
      this.applicationsSubject.next(applications);
    }
  }

  private saveApplications(applications: Application[]): void {
    localStorage.setItem('mk-gov-applications', JSON.stringify(applications));
    this.applicationsSubject.next(applications);
  }

  createApplication(serviceId: string, serviceName: string, applicantType: ApplicantType, userId: string): Observable<Application> {
    const newApplication: Application = {
      id: 'app-' + Date.now(),
      userId,
      serviceId,
      serviceName,
      applicantType,
      status: ApplicationStatus.DRAFT,
      submissionDate: new Date(),
      documents: [],
      timeline: this.createInitialTimeline(serviceId),
      payments: [],
      trackingNumber: this.generateTrackingNumber()
    };

    const currentApplications = this.applicationsSubject.value;
    const updatedApplications = [...currentApplications, newApplication];
    this.saveApplications(updatedApplications);

    return of(newApplication).pipe(delay(500));
  }

  private createInitialTimeline(serviceId: string): ApplicationTimeline[] {
    if (serviceId === 'passport') {
      return [
        {
          id: 'step-1',
          step: 'Pre-enrollment',
          status: TimelineStatus.PENDING,
          date: new Date(),
          description: 'Complete online pre-enrollment form',
          isCompleted: false,
          estimatedDuration: '10 minutes'
        },
        {
          id: 'step-2',
          step: 'Payment',
          status: TimelineStatus.PENDING,
          date: new Date(),
          description: 'Pay passport fees',
          isCompleted: false,
          estimatedDuration: '5 minutes'
        },
        {
          id: 'step-3',
          step: 'Appointment',
          status: TimelineStatus.PENDING,
          date: new Date(),
          description: 'Schedule enrollment appointment',
          isCompleted: false,
          estimatedDuration: '5 minutes'
        },
        {
          id: 'step-4',
          step: 'Enrollment',
          status: TimelineStatus.PENDING,
          date: new Date(),
          description: 'Biometric data capture at DGSN center',
          isCompleted: false,
          estimatedDuration: '30 minutes'
        },
        {
          id: 'step-5',
          step: 'Processing',
          status: TimelineStatus.PENDING,
          date: new Date(),
          description: 'Passport production and verification',
          isCompleted: false,
          estimatedDuration: '48 hours'
        },
        {
          id: 'step-6',
          step: 'Ready for Pickup',
          status: TimelineStatus.PENDING,
          date: new Date(),
          description: 'Passport ready for collection',
          isCompleted: false
        }
      ];
    } else if (serviceId === 'birth-certificate-copy') {
      return [
        {
          id: 'step-1',
          step: 'Form Submission',
          status: TimelineStatus.PENDING,
          date: new Date(),
          description: 'Submit request form and documents',
          isCompleted: false,
          estimatedDuration: '10 minutes'
        },
        {
          id: 'step-2',
          step: 'Payment',
          status: TimelineStatus.PENDING,
          date: new Date(),
          description: 'Pay certification fees',
          isCompleted: false,
          estimatedDuration: '5 minutes'
        },
        {
          id: 'step-3',
          step: 'Verification',
          status: TimelineStatus.PENDING,
          date: new Date(),
          description: 'Document verification by civil registry',
          isCompleted: false,
          estimatedDuration: '1-2 hours'
        },
        {
          id: 'step-4',
          step: 'Certification',
          status: TimelineStatus.PENDING,
          date: new Date(),
          description: 'Certified copy preparation',
          isCompleted: false,
          estimatedDuration: '30 minutes'
        },
        {
          id: 'step-5',
          step: 'Ready for Pickup',
          status: TimelineStatus.PENDING,
          date: new Date(),
          description: 'Document ready for collection',
          isCompleted: false
        }
      ];
    }
    return [];
  }

  private generateTrackingNumber(): string {
    const prefix = 'MKG';
    const timestamp = Date.now().toString().slice(-8);
    const random = Math.random().toString(36).substr(2, 4).toUpperCase();
    return `${prefix}${timestamp}${random}`;
  }

  simulatePayment(applicationId: string, amount: number, method: PaymentMethod): Observable<Payment> {
    const payment: Payment = {
      id: 'pay-' + Date.now(),
      amount,
      currency: 'XAF',
      description: 'Service application fee',
      method,
      status: PaymentStatus.PROCESSING,
      date: new Date(),
      referenceNumber: this.generatePaymentReference(),
      isSimulated: true
    };

    return of(payment).pipe(
      delay(2000),
      map(() => {
        payment.status = PaymentStatus.COMPLETED;
        this.updateApplicationPayment(applicationId, payment);
        return payment;
      })
    );
  }

  private generatePaymentReference(): string {
    return 'PAY' + Date.now().toString() + Math.random().toString(36).substr(2, 6).toUpperCase();
  }

  private updateApplicationPayment(applicationId: string, payment: Payment): void {
    const applications = this.applicationsSubject.value;
    const application = applications.find(app => app.id === applicationId);
    if (application) {
      application.payments.push(payment);
      if (payment.status === PaymentStatus.COMPLETED) {
        application.status = ApplicationStatus.PROCESSING;
      }
      this.saveApplications(applications);
    }
  }

  getUserApplications(userId: string): Observable<Application[]> {
    return this.applications$.pipe(
      map(applications => applications.filter(app => app.userId === userId))
    );
  }

  getApplicationById(applicationId: string): Observable<Application | undefined> {
    return this.applications$.pipe(
      map(applications => applications.find(app => app.id === applicationId))
    );
  }

  searchApplicationByTrackingNumber(trackingNumber: string): Observable<Application | undefined> {
    return this.applications$.pipe(
      delay(1000),
      map(applications => applications.find(app => app.trackingNumber === trackingNumber))
    );
  }
}