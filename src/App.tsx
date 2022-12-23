import { Button, Container, Typography, Stack } from '@mui/material';

function App() {
   return (
      <Container maxWidth='md'>
         <Stack
            direction='column'
            justifyContent='center'
            alignItems='center'
            spacing={2}
            height='100vh'
         >
            <Typography>MUI was successfully imported</Typography>
            <Button variant='outlined'>IT&apos;S DONE</Button>
         </Stack>
      </Container>
   );
}

export default App;
