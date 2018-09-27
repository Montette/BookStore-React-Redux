import React from 'react';
import OrderedBook from './OrderedBook';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure ({adapter: new Adapter()})

describe('orderedBook tests', ()=> {


    it('orderedBook renders without crashing', ()=> {
        const book= {};
       shallow(<OrderedBook book={book}/>)
       
    })

    it('Snapshot matches', ()=> {
        const wrapper = shallow(<OrderedBook />);
        expect(wrapper).toMatchSnapshot();

     })

     it('title of book is displayed as in props', ()=> {
        const book= {
            name: 'Some Title'
        };
       const wrapper = shallow(<OrderedBook book={book}/>);
       expect(wrapper.find('.orderedBook').text()).toBe(book.name)
       
    })

})