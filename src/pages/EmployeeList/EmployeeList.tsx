import { DataGrid } from '@mui/x-data-grid/DataGrid';
import { GridValueFormatterParams } from '@mui/x-data-grid';
import { GridColDef } from '@mui/x-data-grid/models';
import { Dayjs } from 'dayjs';
import { Layout } from '../../components';
import { useAppSelector } from '../../redux/store';

const formatDate = (params: GridValueFormatterParams<Dayjs>) => {
   if (params.value == null) {
      return '';
   }

   return params.value.format('DD/MM/YYYY');
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
   const employees = useAppSelector((state) => state?.employeeState.employees);
   const linkToObject = {
      label: 'Home',
      to: '/',
   };

   return (
      <Layout title='Current Employees' linkTo={linkToObject}>
         {/* TODO: Add Search feature. Rows props will be replaced by the search result */}
         <div style={{ height: 300, width: '100%' }}>
            <DataGrid rows={employees} columns={columns} />
         </div>
      </Layout>
   );
}

export default EmployeeList;
