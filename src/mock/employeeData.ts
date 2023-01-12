import dayjs from 'dayjs';
import { Employee } from '../types/Employee';
import { CompanyDept, State } from './formData';

const mockedEmployeeData: Employee[] = [
   {
      id: 1,
      firstname: 'Patrick',
      lastname: 'Bidu',
      birthDate: dayjs(new Date('1995-09-28')).format(),
      startDate: dayjs(new Date('2021-10-03')).format(),
      street: '12th North Avenue',
      city: 'San Francisco',
      state: State.Alabama,
      zipcode: '45689',
      companyDept: CompanyDept.Engineering,
   },
   {
      id: 2,
      firstname: 'Joseph',
      lastname: 'Morenne',
      birthDate: dayjs(new Date('1960-11-11')).format(),
      startDate: dayjs(new Date('2015-07-01')).format(),
      street: '1200th South Avenue',
      city: 'New York City',
      state: State.Colorado,
      zipcode: '10000',
      companyDept: CompanyDept.Marketing,
   },
   {
      id: 3,
      firstname: 'Thomas',
      lastname: 'Amoroso',
      birthDate: dayjs(new Date('1995-09-28')).format(),
      startDate: dayjs(new Date('2021-10-03')).format(),
      street: '5000th West Avenue',
      city: 'San Andreas',
      state: State.MarshallIslands,
      zipcode: '8000',
      companyDept: CompanyDept.Legal,
   },
];

export default mockedEmployeeData;
