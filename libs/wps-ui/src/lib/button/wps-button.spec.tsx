import { render } from '@testing-library/react';

import WpsButton from './wps-button';

describe('WpsButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WpsButton />);
    expect(baseElement).toBeTruthy();
  });
});
