import React from "react";
import Calculator from "./Calculator";
import Key from "./Key";
import Enzyme, { shallow } from "enzyme";
import ReactSeventeenAdapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new ReactSeventeenAdapter() });

describe('Calculator', () => {
  it('should show text in input', () => {
    const key = shallow(<Key />);
    const button = key.find('span');
    button.simulate('click');
    const screen = shallow(<Calculator />);
    const text = screen.find('input');
    expect(text.length).toBe('1');
  });
});