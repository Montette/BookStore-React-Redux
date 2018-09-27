import React from 'react';
import ReactDOM from 'react-dom';
import Order from './Order';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure ({adapter: new Adapter()})

describe('order tests', ()=> {


    it('order renders without crashing', ()=> {
        const order = [];
       shallow(<Order order={order}/>)
       
    })

    it('Snapshot matches', ()=> {
        const wrapper = shallow(<Order />);
        expect(wrapper).toMatchSnapshot();

     })

})