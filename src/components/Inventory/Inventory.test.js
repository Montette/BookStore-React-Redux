import React from 'react';
import ReactDOM from 'react-dom';
import Inventory from './Inventory';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure ({adapter: new Adapter()})

describe('inventory tests', ()=> {


    it('inventory renders without crashing', ()=> {
        shallow(<Inventory />)
      
    })

})