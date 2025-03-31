import { Box } from '@mui/material';
import { WpsButton, WpsHeading } from '@wps/wps-ui';

const sizes = ['sm', 'md', 'lg'] as const;
const variants = ['solid', 'outline', 'ghost'] as const;

const variantColorMap = {
  solid: ['blue', 'green', 'red'],
  outline: ['blue'],
  ghost: ['red', 'default'],
} as const;

export const ButtonShowcase = () => {
  return (
    <Box display="flex" flexDirection="column" gap={4}>
      {/* Showcase all combinations */}
      {variants.map((variantType) => (
        <Box key={variantType}>
          <WpsHeading level={2}>Variant: {variantType}</WpsHeading>

          {variantColorMap[variantType].map((colorType) => (
            <Box key={colorType} display="flex" alignItems="center" gap={2} mb={2}>
              {sizes.map((sizeType) => (
                <WpsButton
                  key={`${variantType}-${colorType}-${sizeType}`}
                  variantType={variantType}
                  colorType={colorType}
                  sizeType={sizeType}
                >
                  {`${colorType} ${sizeType}`}
                </WpsButton>
              ))}
            </Box>
          ))}
        </Box>
      ))}

      {/* One row of disabled buttons in 3 sizes */}
      <Box>
        <WpsHeading level={2}>Disabled Buttons</WpsHeading>
        <Box display="flex" alignItems="center" gap={2}>
          {sizes.map((sizeType) => (
            <WpsButton
              key={`disabled-${sizeType}`}
              variantType="solid"
              colorType="blue"
              sizeType={sizeType}
              disabled
            >
              {`${sizeType} (disabled)`}
            </WpsButton>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ButtonShowcase;
