import { ButtonBase, ButtonBaseProps } from '@mui/material';
import { styled } from '@mui/system';

export type WpsButtonVariant = 'solid' | 'outline' | 'ghost';
export type WpsButtonColor = 'blue' | 'green' | 'red' | 'black';
export type WpsButtonSize = 'sm' | 'md' | 'lg';

export interface WpsButtonProps extends ButtonBaseProps {
  variantType?: WpsButtonVariant;
  colorType?: WpsButtonColor;
  sizeType?: WpsButtonSize;
}

// TODO: add sizing
const sizeMap = {
  sm: {
    padding: '.75rem 1rem',
    fontSize: '1rem'
  },
  md: {
    padding: '13px 24px',
    fontSize: '18px'
  },
  lg: {
    padding: '16px 24px',
    fontSize: '20px'
  }
};

const StyledButton = styled(ButtonBase, {
  shouldForwardProp: (prop) =>
    prop !== 'variantType' && prop !== 'colorType' && prop !== 'sizeType',
})<WpsButtonProps>(
  ({ variantType = 'solid', colorType = 'blue', sizeType = 'md', disabled }) => {
    const baseStyles = sizeMap[sizeType];

    const colorStyles = {
      blue: 'var(--wps-button-blue-normal)',
      green: 'var(--wps-button-green-normal)',
      red: 'var(--wps-button-red-normal)',
      black: 'var(--wps-button-ghost-normal)',
    };

    const hoveredColorStyles = {
      blue: 'var(--wps-button-blue-hovered)',
      green: 'var(--wps-button-green-hovered)',
      red: 'var(--wps-button-red-hovered)',
      black: 'var(--wps-button-ghost-hovered)',
    };

    const activeColorStyles = {
      blue: 'var(--wps-button-blue-active)',
      green: 'var(--wps-button-green-active)',
      red: 'var(--wps-button-red-active)',
      black: 'var(--wps-button-ghost-active)',
    };

    const focusedColorStyles = {
      blue: 'var(--wps-button-blue-focused)',
      green: 'var(--wps-button-green-focused)',
      red: 'var(--wps-button-red-focused)',
      black: 'var(--wps-button-ghost-focused)',
    };

    const textColor = {
      ghost:
        colorType === 'red'
          ? 'var(--wps-button-ghost-red-text)'
          : 'var(--wps-button-ghost-text)',
      outline: 'var(--wps-button-outlined-text)',
      solid: 'var(--wps-button-text-white)',
    };

    const backgroundColor = {
      solid: colorStyles[colorType],
      outline: 'var(--wps-button-outlined-normal)',
      ghost:
        colorType === 'red'
          ? 'var(--wps-button-ghost-red-normal)'
          : 'var(--wps-button-ghost-normal)',
    };

    const hoveredBackgroundColor = {
      solid: hoveredColorStyles[colorType],
      outline: 'var(--wps-button-outlined-hovered)',
      ghost:
        colorType === 'red'
          ? 'var(--wps-button-ghost-red-hovered)'
          : 'var(--wps-button-ghost-hovered)',
    };

    const activeBackgroundColor = {
      solid: activeColorStyles[colorType],
      outline: 'var(--wps-button-outlined-active)',
      ghost:
        colorType === 'red'
          ? 'var(--wps-button-ghost-red-active)'
          : 'var(--wps-button-ghost-active)',
    };

    const focusedBackgroundColor = {
      solid: focusedColorStyles[colorType],
      outline: 'var(--wps-button-outlined-focused)',
      ghost:
        colorType === 'red'
          ? 'var(--wps-button-ghost-red-focused)'
          : 'var(--wps-button-ghost-focused)',
    };

    const border = {
      solid: 'none',
      outline: `1px solid var(--wps-button-outlined-border)`,
      ghost: 'none',
    };

    return {
      ...baseStyles,
      backgroundColor: disabled
        ? 'var(--wps-button-background-disabled)'
        : backgroundColor[variantType],
      color: disabled
        ? 'var(--wps-button-text-white)'
        : textColor[variantType],
      border: disabled ? 'none' : border[variantType],
      borderRadius: 'var(--wps-button-border-radius)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'all 0.2s ease-in-out',
      '&:hover': {
        backgroundColor: disabled
          ? 'var(--wps-button-background-disabled)'
          : hoveredBackgroundColor[variantType],
      },
      '&:active': {
        backgroundColor: disabled
          ? 'var(--wps-button-background-disabled)'
          : activeBackgroundColor[variantType],
      },
      '&:focus-visible': {
        backgroundColor: disabled
          ? 'var(--wps-button-background-disabled)'
          : focusedBackgroundColor[variantType],
        outline: '2px solid rgba(0,0,0,0.5)',
      },
    };
  }
);

export function WpsButton(
  {
    variantType = 'solid',
    colorType = 'blue',
    sizeType = 'md',
    ...props
  }: WpsButtonProps) {
  return (
    <StyledButton
      disableRipple
      variantType={variantType}
      colorType={colorType}
      sizeType={sizeType}
      sx={{
        fontFamily: `var(--wps-button-font-family)`,
        fontWeight: `var(--wps-button-font-weight)`,
      }}
      {...props}
    />
  );
}

export default WpsButton;
