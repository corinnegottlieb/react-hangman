import React from 'react';
import ReactDOM from 'react-dom';
import assert from 'assert';
import App from '../src/App';
import Letters from '../src/components/Letters';
import Letter from '../src/components/Letter';
import Score from '../src/components/Score';
import renderer from 'react-test-renderer';
import { mount, render, shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { wrap } from 'module';

configure({ adapter: new Adapter() });

// expect.extend({
//     toEqualWithMessage(received, validator, message) {
//         if (validator.received == )
//     }
// })

it('Application should render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('App should have one Letters component in root', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Letters)).toHaveLength(2); // there must be exactly one Letters component
});

it('App should have one Letter component under Letters', () => {
    const wrapper = shallow(<Letters />);
    expect(wrapper.find(Letter)).toHaveLength(1);
});