import dayjs from 'dayjs';
import { Employee } from '../types/Employee';
import { State } from './formData';

const mockedEmployeeData: Employee[] = [
   {
      firstname: 'Patrick',
      lastname: 'Bidu',
      birthDate: dayjs(new Date('1995-09-28')),
      startDate: dayjs(new Date('2021-10-03')),
      street: '12th North Avenue',
      city: 'San Francisco',
      state: State.Alabama,
      zipcode: '45689',
   },
];

export default mockedEmployeeData;
