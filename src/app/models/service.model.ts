export interface ServiceCategory {
  id: string;
  fname: string;
  description: string;
  icon: string;
  color: string;
  displayOrder: number;
  isActive: boolean;
  procedures: Service[];
}

export interface Service {
  id: string;
  categoryId: string;
  pname: string;
  shortdesc: string;
  longdesc: string;
  documents: ServiceRequirement[];
  processtime: string;
  servicecost: number;
  currency: string;
  providedBy: string;
  legaltext?: string;
  published: boolean;
  displayOrder: number;
  isActive: boolean;
  canApplyFor: ApplicantType[];
}

export interface ServiceRequirement {
  id: string;
  name: string;
  description: string;
  isRequired: boolean;
  documentType: DocumentType;
  type: string;
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
