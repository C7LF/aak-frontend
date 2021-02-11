import React from 'react';

import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import { ProjectsMockData } from '@mock-data/projects.mock-data';

import Home from '../pages/index';

describe('Pages', () => {
  describe('Home', () => {
    it('it renders correctly', () => {
      const tree = renderer
        .create(<Home projects={ProjectsMockData} />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('Home component should be defined', () => {
      const wrap = shallow(<Home projects={ProjectsMockData} />);
      expect(wrap).toBeDefined();
    });
  });
});
