import { Container, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../redux/store';

function EmployeeList() {
   const dispatch = useAppDispatch();
   const employees = useAppSelector((state) => state?.employeeState.employees);

   console.log(employees);

   return (
      <Container maxWidth='md'>
         <Typography variant='h1'>EmployeeList</Typography>
      </Container>
   );
}

export default EmployeeList;
