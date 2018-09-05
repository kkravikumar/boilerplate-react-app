import React from 'react';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import * as enzyme from 'enzyme';
enzyme.configure({ adapter: new Adapter() });

import App from './App';


describe('Validating App launches', () => {

  it('Check App launching', () => {
    const app = shallow ( <App/> );	
    const innerHTML = app.html();
    //console.log(app.html());
    expect(innerHTML.indexOf('React Application') > 0).toEqual(true);
  });

});
