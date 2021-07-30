/*
import { render, screen } from '@testing-library/react';
import Calculator from "./Calculator";

test('renders calculator', () => {
  render(<Calculator />);
  const linkElement = screen.getByText(/7/i);
  expect(linkElement).toBeInTheDocument();
});

*/
import React from "react";
import Calculator from "./Calculator";
import Enzyme, { shallow } from "@wojtekmaj/enzyme-adapter-react-17";

describe('Calculator', () => {
  it('should be true', () => {
    const foo = true;
    expect(foo).toBe(true);
  });
  it('should be false', () => {
    const foo = true;
    expect(foo).toBe(false);
  });
});