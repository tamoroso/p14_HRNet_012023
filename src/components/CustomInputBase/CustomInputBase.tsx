import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconButton, InputBase, Paper } from '@mui/material';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ChangeEvent } from 'react';

interface CustomInputBaseProps {
   handleChange: (
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   ) => void;
   searchParams: string;
}

export default function CustomInputBase({
   handleChange,
   searchParams,
}: CustomInputBaseProps) {
   return (
      <Paper
         component='form'
         sx={{
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: 400,
         }}
      >
         <InputBase
            sx={{ ml: 1, flex: 1 }}
            value={searchParams || ''}
            onChange={(e) => handleChange(e)}
         />
         <IconButton>
            <FontAwesomeIcon icon={faSearch} />
         </IconButton>
      </Paper>
   );
}
