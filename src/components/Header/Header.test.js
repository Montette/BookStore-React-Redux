import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure ({adapter: new Adapter()})

describe('header tests', ()=> {


    it('header renders without crashing', ()=> {
        const header = shallow(<Header />)
        expect(header.find('h1').text()).toBe('Book Store')
    })

    it('Snapshot matches', ()=> {
        const wrapper = shallow(<Header/>);
        expect(wrapper).toMatchSnapshot();

     })

})