import React from 'react';

import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import About from '../pages/about';
import { MarkdownContent } from '@components';

describe('About', () => {
  it('it renders correctly', () => {
    const tree = renderer
      .create(<About content="this is some content" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('About component should be defined', () => {
    const wrap = shallow(<About content="this is some content" />);
    expect(wrap).toBeDefined();
  });

  it('MarkdownContent component should render', () => {
    const wrap = mount(<About content="this is some content" />);
    expect(wrap.find(MarkdownContent)).toBeDefined();
  });
});
