import React from 'react';
import ReactDOM from 'react-dom';
import AdminPanel from './AdminPanel';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure ({adapter: new Adapter()})

describe('AdminPanel tests', ()=> {


    it('AdminPanel renders without crashing', ()=> {
       shallow(<AdminPanel />)
        
    })

})