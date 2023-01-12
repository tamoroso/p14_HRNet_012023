import { DataGrid } from '@mui/x-data-grid/DataGrid';
import { GridValueFormatterParams } from '@mui/x-data-grid';
import { GridColDef } from '@mui/x-data-grid/models';
import dayjs, { Dayjs } from 'dayjs';
import { ChangeEvent, useMemo, useState } from 'react';
import { CustomInputBase, Layout } from '../../components';
import { useAppSelector } from '../../redux/store';
import { Employee } from '../../types/Employee';

const formatDate = (params: GridValueFormatterParams<Dayjs>) => {
   if (params.value == null) {
      return '';
   }

   return dayjs(params.value).format('DD/MM/YYYY');
};

const columns: GridColDef[] = [
   {
      field: 'firstname',
      headerName: 'First Name',
      flex: 1,
   },
   {
      field: 'lastname',
      headerName: 'Last Name',
      flex: 1,
   },
   {
      field: 'startDate',
      headerName: 'Start Date',
      flex: 1,
      valueFormatter: formatDate,
   },
   {
      field: 'companyDept',
      headerName: 'Department',
      flex: 1,
   },
   {
      field: 'birthDate',
      headerName: 'Date of Birth',
      flex: 1,
      valueFormatter: formatDate,
   },
   {
      field: 'street',
      headerName: 'Street',
      flex: 1,
   },
   {
      field: 'city',
      headerName: 'City',
      flex: 1,
   },
   {
      field: 'state',
      headerName: 'State',
      flex: 1,
   },
   {
      field: 'zipcode',
      headerName: 'Zip Code',
      flex: 1,
   },
];

function EmployeeList() {
   const [searchParams, setSearchParams] = useState('');
   const employees = useAppSelector((state) => state?.employeeState.employees);
   // NOTE: We can only search by name, departement, city, state and zipcode
   const searchProps: string[] = [
      'firstname',
      'lastname',
      'city',
      'state',
      'companyDept',
      'zipcode',
   ];

   const filteredEmployees = useMemo(
      () =>
         employees.reduce((acc, employee) => {
            const tokens = searchParams.toLowerCase().trim().split(' ');
            if (!tokens.length) {
               acc.push(employee);
            }
            if (tokens.length) {
               const searchableProps: string[] = searchProps.map(
                  (key) =>
                     employee[
                        key as keyof Omit<
                           Employee,
                           'birthDate' | 'startDate' | 'id'
                        >
                     ]
               );

               const results =
                  searchableProps
                     .map((element) => (element ? element.toLowerCase() : ''))
                     .filter((element) =>
                        tokens.some((token) => element.includes(token))
                     ).length >= tokens.length;
               if (results) {
                  acc.push(employee);
               }
            }

            return acc;
         }, [] as Employee[]),

      [employees, searchParams]
   );

   const linkToObject = {
      label: 'Home',
      to: '/',
   };
   const handleChange = (
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   ) => {
      setSearchParams(e.target.value);
   };
   return (
      <Layout title='Current Employees' linkTo={linkToObject}>
         {/* TODO: Add Search feature. Rows props will be replaced by the search result */}
         <CustomInputBase
            handleChange={handleChange}
            searchParams={searchParams}
         />
         <div style={{ height: 300, width: '100%' }}>
            <DataGrid rows={filteredEmployees} columns={columns} />
         </div>
      </Layout>
   );
}

export default EmployeeList;
