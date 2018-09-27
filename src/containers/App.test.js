import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from '../components/Header/Header';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()})

describe('App tests', ()=> {


  it('App renders without crashing', ()=> {
    shallow(<App />)
  })

  it('Hello world render without problem', ()=> {

    const wrapper = shallow(<App />);
    console.log(wrapper.debug())

  })

  it('includes child component', ()=> {
    const app = shallow(<App />);
    // expect(app.containsMatchingElement(<Header />)).toEqual(true);
    expect(app.find('Header').exists()).toEqual(true);
    expect(app.find('Order').exists()).toEqual(true);
    // expect(app.find('AdminPanel').exists()).toEqual(true);
    expect(app.find('Inventory').exists()).toEqual(true);

  })

})
