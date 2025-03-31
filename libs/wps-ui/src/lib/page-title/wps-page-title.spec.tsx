import { render } from '@testing-library/react';

import WpsPageTitle from './wps-page-title';

describe('WpsPageTitle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WpsPageTitle />);
    expect(baseElement).toBeTruthy();
  });
});
