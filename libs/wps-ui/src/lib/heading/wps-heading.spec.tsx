import { render } from '@testing-library/react';

import WpsHeading from './wps-heading';

describe('WpsHeading', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WpsHeading />);
    expect(baseElement).toBeTruthy();
  });
});
