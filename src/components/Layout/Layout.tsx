import { faCircleNodes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Link, Stack, Typography } from '@mui/material';
import { PropsWithChildren } from 'react';
import { Link as RouterLink } from 'react-router-dom';

interface linkToProps {
   label: string;
   to: string;
}

interface LayoutProps extends PropsWithChildren {
   title: string;
   linkTo: linkToProps;
}

export default function Layout({ title, linkTo, children }: LayoutProps) {
   const { label, to } = linkTo;
   return (
      <Container>
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
               to={to}
               component={RouterLink}
            >
               {label}
            </Link>
            <Typography variant='h2' textAlign='center' sx={{ fontSize: 40 }}>
               {title}
            </Typography>
            {children}
         </Stack>
      </Container>
   );
}
