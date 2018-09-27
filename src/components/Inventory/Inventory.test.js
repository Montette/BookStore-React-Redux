import React from 'react';
import ReactDOM from 'react-dom';
import Inventory from './Inventory';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure ({adapter: new Adapter()})

describe('inventory tests', ()=> {


    it('inventory renders without crashing', ()=> {
        const inventory = []
        shallow(<Inventory inventory={inventory}/>)
      
    })

    it('Snapshot matches', ()=> {
        const wrapper = shallow(<Inventory />);
        expect(wrapper).toMatchSnapshot();

     })

})