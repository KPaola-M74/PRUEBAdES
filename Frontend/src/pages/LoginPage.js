import { Helmet } from 'react-helmet-async';
// @mui
import { styled } from '@mui/material/styles';
import { Link, Container, Typography, Divider, Stack, Button, ImageList, Avatar, Box } from '@mui/material';
// hooks
import useResponsive from '../hooks/useResponsive';
// components
import Logo from '../components/logo';
import Iconify from '../components/iconify';
// sections
import { LoginForm } from '../sections/auth/login';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex', width: '100%',
  },
}));

const StyledRoot2 = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex', width: '100%', flexDirection: 'column',
  },
}));

const StyledSection = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',

  maxWidth: 480,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  boxShadow: theme.customShadows.card,
  backgroundColor: theme.palette.background.default,
}));



const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function LoginPage() {
  const mdUp = useResponsive('up', 'md');

  return (
    <>
      <Helmet>
        <title> Login | WATTPAY </title>
      </Helmet>

      <StyledRoot>




        {mdUp && (
          <Avatar variant='rounded' alt="login" src={"/static/bg-login3.jpg"} style={{
            width: 'auto',
            height: '100vh',
          }} />
        )}

        <StyledRoot2>
          <Container maxWidth="sm">
            <StyledContent>
              <Typography variant="h2" gutterBottom>
                Bienvenid@
              </Typography>

              <Typography variant="body2" sx={{ mb: 5 }}>
                ¿No tienes una cuenta? {''}
                <Link variant="subtitle2">Crea una</Link>
              </Typography>

              <LoginForm />
            </StyledContent>
          </Container>
          {mdUp && (
            <Box sx={{ px: 5, py: 4, position: 'absolute', alignSelf: 'end' }}>
              <Logo />
            </Box>
          )}
        </StyledRoot2>
      </StyledRoot>
    </>
  );
}
