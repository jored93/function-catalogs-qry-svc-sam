export interface IInputVtl {
  dni: string;
}

export interface IUserParams {
  dni: string;
}

export interface ICustomer {
  documentNumber:string;
  name: string;
  lastName: string;
  profession: string;
  workplace: string;
  address: string;
  email: string;
  phoneNumber: string;
  type: string;
}

export interface ICustomerView {
  customer: string;
  address: string;
  district: string;
  documentIssueAt: string;
  documentNumber: string;
  email: string;
  email_verified: boolean;
  gender: string;
  lastName: string;
  name: string;
  phone_number: string;
  phone_number_verified: boolean;
  profession: string;
  province: string;
  state: string;
  status: string;
  user: string;
  workplace: string;
}

export interface IProductOffer {
  offerId: string;
  address: string;
  billingDay: number;
  bornDate: string;
  codClaveCIC: string;
  codUnicoCLI: string;
  currency: string;
  department: string;
  desgravamen: number;
  district: string;
  dni: string;
  email: string;
  maxCreditLine: number;
  maxValueDesgravamen: number;
  minCreditLine: number;
  monthlyCost: number;
  name: string;
  payDay: number;
  phoneNumber: string;
  plan: number;
  productDescription: string;
  province: string;
  status: string;
  surname1: string;
  surname2: string;
  tcea: number;
  tea: number;
}


export interface ILeadView {
    id: string;
    address: string;
    billingDay: number;
    bornDate: string;
    codClaveCIC: string;
    codUnicoCLI: string;
    currency: string;
    department: string;
    desgravamen: number;
    district: string;
    dni: string;
    email: string;
    maxCreditLine: number;
    maxValueDesgravamen: number;
    minCreditLine: number;
    monthlyCost: number;
    name: string;
    payDay: number;
    phoneNumber: string;
    plan: number;
    productDescription: string;
    province: string;
    status: string;
    surname1: string;
    surname2: string;
    tcea: number;
    tea: number;
    type: string;
  }
