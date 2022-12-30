import { Dayjs } from 'dayjs';
import { CompanyDept, State } from '../mock/formData';

export interface Employee {
   firstname: string;
   lastname: string;
   birthDate: Dayjs;
   startDate: Dayjs;
   street: string;
   city: string;
   state: State;
   zipcode: string;
   companyDept: CompanyDept;
}
