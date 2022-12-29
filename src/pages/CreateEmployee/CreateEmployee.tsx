import {
   Container,
   Stack,
   Typography,
   Link,
   TextField,
   Button,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNodes } from '@fortawesome/free-solid-svg-icons';
import { Link as RouterLink } from 'react-router-dom';
import { useFormik } from 'formik';
import dayjs from 'dayjs';
import { CustomDatePicker } from '../../components';
import { State, companyDept } from '../../mock/formData';
import CustomSelect from '../../components/CustomSelect/CustomSelect';

function CreateEmployee() {
   const formik = useFormik({
      initialValues: {
         lastname: '',
         firstname: '',
         birthDate: dayjs(),
         startDate: dayjs(),
         street: '',
         city: '',
         state: '',
         zipcode: '',
         companyDept: '',
      },
      onSubmit: (values) => {
         console.log(values);
      },
   });

   const { values, handleChange, setFieldValue, handleSubmit } = formik;

   return (
      <Container maxWidth='sm'>
         <Stack direction='column' justifyContent='center' spacing={2}>
            <Stack>
               <FontAwesomeIcon icon={faCircleNodes} size='4x' />
               <Typography
                  variant='h1'
                  textAlign='center'
                  sx={{ fontSize: 60, fontWeight: 500 }}
               >
                  HRnet
               </Typography>
            </Stack>
            <Link
               variant='body1'
               textAlign='center'
               to='/employee-list'
               component={RouterLink}
            >
               View Current Employees
            </Link>
            <Typography variant='h2' textAlign='center' sx={{ fontSize: 40 }}>
               Create Employee
            </Typography>
            <form onSubmit={handleSubmit}>
               <Stack direction='column' spacing={2} alignItems='center'>
                  <TextField
                     variant='filled'
                     fullWidth
                     id='firstname'
                     name='firstname'
                     label='First Name'
                     value={values.firstname}
                     onChange={handleChange}
                  />
                  <TextField
                     variant='filled'
                     fullWidth
                     id='lastname'
                     name='lastname'
                     label='Last Name'
                     value={values.lastname}
                     onChange={handleChange}
                  />
                  <CustomDatePicker
                     setFieldValue={setFieldValue}
                     inputValue={values.birthDate}
                     inputLabel='Date of Birth'
                     inputName='birthDate'
                  />
                  <CustomDatePicker
                     setFieldValue={setFieldValue}
                     inputValue={values.startDate}
                     inputLabel='Start Date'
                     inputName='startDate'
                  />
                  <TextField
                     variant='filled'
                     fullWidth
                     id='street'
                     name='street'
                     label='Street'
                     value={values.street}
                     onChange={handleChange}
                  />
                  <TextField
                     variant='filled'
                     fullWidth
                     id='city'
                     name='city'
                     label='City'
                     value={values.city}
                     onChange={handleChange}
                  />
                  <CustomSelect
                     options={State}
                     value={values.state}
                     setFieldValue={setFieldValue}
                     name='state'
                     label='State'
                  />
                  <CustomSelect
                     options={companyDept}
                     value={values.companyDept}
                     setFieldValue={setFieldValue}
                     name='companyDept'
                     label='Departement'
                  />
                  <TextField
                     variant='filled'
                     fullWidth
                     id='zipcode'
                     name='zipcode'
                     label='Zip Code'
                     value={values.zipcode}
                     onChange={handleChange}
                  />
                  <Button variant='contained' type='submit' size='medium'>
                     Save
                  </Button>
               </Stack>
            </form>
         </Stack>
      </Container>
   );
}

export default CreateEmployee;
