import { CompanyDept, State } from '../mock/formData';

export interface Employee {
   id: number;
   firstname: string;
   lastname: string;
   birthDate: string;
   startDate: string;
   street: string;
   city: string;
   state: State;
   zipcode: string;
   companyDept: CompanyDept;
}
