import { render } from '@testing-library/react';

import TypographyShowcase from './typography-showcase';

describe('TypographyShowcase', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TypographyShowcase />);
    expect(baseElement).toBeTruthy();
  });
});
