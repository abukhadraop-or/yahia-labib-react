import React from 'react';
import Footer from 'components/Footer/Footer';
import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Footer', () => {
  test('should render 20 list items', () => {
    const view = render(<Footer />);
    const itemElements = view.find('li');
    expect(itemElements.length).toBe(20);
  });
});
