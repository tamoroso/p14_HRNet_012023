import {
   FormControl,
   InputLabel,
   MenuItem,
   Select,
   SelectChangeEvent,
} from '@mui/material';
import { Dayjs } from 'dayjs';
import { FormikErrors, FormikProps } from 'formik';
import { companyDept, State } from '../../mock/formData';
import { Employee } from '../../types/Employee';

interface CustomSelectProps
   extends Pick<FormikProps<Employee>, 'setFieldValue'> {
   options: object;
   value: string;
   label: string;
   name: string;
}

export default function CustomSelect({
   options,
   value,
   label,
   name,
   setFieldValue,
}: CustomSelectProps) {
   const handleChangeSelect = (event: SelectChangeEvent) => {
      setFieldValue(event.target.name, event.target.value, true);
   };
   return (
      <FormControl fullWidth>
         <InputLabel id={name}>{label}</InputLabel>
         <Select
            labelId={name}
            id={name}
            name={name}
            value={value}
            label={label}
            onChange={handleChangeSelect}
            variant='filled'
            MenuProps={{ sx: { maxHeight: 200 } }}
         >
            {Object.keys(options).map((key) => (
               <MenuItem key={key} value={options[key as keyof typeof options]}>
                  {key
                     .replace(/([A-Z])/g, ' $1')
                     .replace(/^./, (str) => str.toUpperCase())}
               </MenuItem>
            ))}
         </Select>
      </FormControl>
   );
}
