import { Container, Paper } from '@mui/material';
import { WpsHeading, WpsPageTitle } from '@wps/wps-ui';
import ButtonShowcase from '../showcase/button-showcase/button-showcase';
import TypographyShowcase from '../showcase/typography-showcase/typography-showcase'; // check your tsconfig path alias


export function App() {
  return (
    <Container maxWidth="lg">
      <WpsPageTitle>WPS Design System</WpsPageTitle>

      <WpsHeading level={4}>Typography</WpsHeading>
      <Paper elevation={4} sx={{ p: 4, mb: 4 }}><TypographyShowcase></TypographyShowcase></Paper>


      <WpsHeading level={4}>Buttons</WpsHeading>
      <Paper elevation={4} sx={{ p: 4, mb: 4 }}><ButtonShowcase></ButtonShowcase></Paper>
    </Container>
  );
}

export default App;
