import { Stack, TextField, Button } from '@mui/material';
import { useFormik } from 'formik';
import dayjs from 'dayjs';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { ConfirmationModal, CustomDatePicker, Layout } from '../../components';
import { State, CompanyDept } from '../../mock/formData';
import CustomSelect from '../../components/CustomSelect/CustomSelect';
import { addEmployee } from '../../redux/features/employeeSlice';
import { Employee } from '../../types/Employee';

function CreateEmployee() {
   const [show, setShow] = useState(false);
   const dispatch = useDispatch();
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
         const data = {
            id: new Date().getTime(),
            ...values,
            birthDate: values.birthDate.format(),
            startDate: values.startDate.format(),
         };
         dispatch(addEmployee(data as Employee));
         setShow(true);
      },
   });

   const { values, handleChange, setFieldValue, handleSubmit, resetForm } =
      formik;

   const linkToObject = {
      label: 'View Current Employees',
      to: '/employee-list',
   };

   return (
      <>
         <ConfirmationModal
            show={show}
            setShow={setShow}
            resetForm={resetForm}
         />

         <Layout title='Create Employee' linkTo={linkToObject}>
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
                     options={CompanyDept}
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
         </Layout>
      </>
   );
}

export default CreateEmployee;
