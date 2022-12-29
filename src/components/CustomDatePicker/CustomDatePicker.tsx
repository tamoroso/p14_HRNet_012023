import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField } from '@mui/material';
import { FormikErrors, FormikProps } from 'formik';
import { Dayjs } from 'dayjs';
import { Employee } from '../../types/Employee';

interface CustomDatePickerProps
   extends Pick<FormikProps<Employee>, 'setFieldValue'> {
   inputValue: Dayjs;
   inputLabel: string;
   inputName: string;
}

export default function CustomDatePicker({
   setFieldValue,
   inputValue,
   inputLabel,
   inputName,
}: CustomDatePickerProps) {
   return (
      <DatePicker
         label={inputLabel}
         value={inputValue}
         onChange={(value: Dayjs | null) =>
            setFieldValue(inputName, value, true)
         }
         inputFormat='DD/MM/YYYY'
         renderInput={(params) => (
            <TextField
               fullWidth
               variant='filled'
               name={inputName}
               {...params}
            />
         )}
      />
   );
}
