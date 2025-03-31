import { Typography, TypographyProps } from '@mui/material';

export interface WpsPageTitleProps extends TypographyProps {}

export function WpsPageTitle(props: WpsPageTitleProps) {
  return (
    <Typography
      component="div"
      sx={{
        fontFamily: 'var(--wps-page-title-font-family)',
        fontSize: 'var(--wps-page-title-font-size)',
        fontWeight: 'var(--wps-page-title-font-weight)',
        lineHeight: 'var(--wps-page-title-line-height)',
        color: 'var(--wps-page-title-text-color)',
        textTransform: 'uppercase',
        marginBottom: `var(--wps-heading-margin-bottom)`,      }}
      {...props}
    />
  );
}

export default WpsPageTitle;
