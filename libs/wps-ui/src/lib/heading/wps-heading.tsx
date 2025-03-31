import { Typography, TypographyProps } from '@mui/material';

export interface WpsHeadingProps extends TypographyProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export function WpsHeading({ level = 1, sx, ...props }: WpsHeadingProps) {
  const tag = `h${level}` as const;

  return (
    <Typography
      component={tag}
      sx={{
        fontFamily: `var(--wps-heading-font-family)`,
        fontSize: `var(--wps-h${level}-font-size)`,
        fontWeight: `var(--wps-h${level}-font-weight)`,
        lineHeight: `var(--wps-h${level}-line-height)`,
        color: `var(--wps-heading-text-color)`,
        marginBottom: `var(--wps-heading-margin-bottom)`,
        ...sx, // allow overrides
      }}
      {...props}
    />
  );
}

export default WpsHeading;
