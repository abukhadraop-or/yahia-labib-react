import React from 'react';
import MenuMobile from 'components/MobileMenu/MenuMobile';
import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('MenuMobile', () => {
  test('should render 22 list items', () => {
    const view = render(<MenuMobile />);
    const itemElements = view.find('li');
    expect(itemElements.length).toBe(22);
  });
});