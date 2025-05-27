export interface ServiceCategory {
  id: string;
  nameKey: string;
  descriptionKey: string;
  icon: string;
  color: string;
  services: Service[];
}

export interface Service {
  id: string;
  categoryId: string;
  nameKey: string;
  descriptionKey: string;
  detailedDescriptionKey: string;
  requirements: ServiceRequirement[];
  processingTime: string;
  cost: number;
  currency: string;
  providedBy: string;
  legalTexts?: LegalText[];
  isImplemented: boolean;
  canApplyFor: ApplicantType[];
}

export interface ServiceRequirement {
  id: string;
  nameKey: string;
  descriptionKey: string;
  isMandatory: boolean;
  documentType: DocumentType;
}

export interface LegalText {
  id: string;
  title: string;
  content: string;
  pdfUrl?: string;
}

export enum DocumentType {
  IDENTITY = 'identity',
  BIRTH_CERTIFICATE = 'birth_certificate',
  MARRIAGE_CERTIFICATE = 'marriage_certificate',
  PHOTO = 'photo',
  RESIDENCE_PROOF = 'residence_proof',
  FISCAL_STAMP = 'fiscal_stamp',
  FORM = 'form',
  AUTHORIZATION = 'authorization'
}

export enum ApplicantType {
  SELF = 'self',
  CHILD = 'child',
  OTHER = 'other'
}