/* global describe, it, before */

import chai from 'chai';
import { addOne, addTwo, functions } from '../src';


chai.expect();
const expect = chai.expect;

describe('named imports should have all functions available', () => {
  console.log('Add One: ', addOne(2));
  expect(addOne(2)).to.eql(3);
  expect(addTwo(2)).to.eql(4);
});

describe('default import should have all functions available', () => {
  console.log('functions: ', functions);
  expect(Object.keys(functions).length).to.eql(2);
});
