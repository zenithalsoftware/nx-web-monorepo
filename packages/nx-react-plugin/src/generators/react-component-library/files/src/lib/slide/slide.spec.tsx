import { render } from '@testing-library/react';

import Slide from './slide';

describe('Slide', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Slide>
        <div></div>
      </Slide>
    );
    expect(baseElement).toBeTruthy();
  });
});
