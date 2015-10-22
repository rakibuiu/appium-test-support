// transpile:mocha

import {stubEnv} from '..';
import chai from 'chai';


chai.should();
const expect = chai.expect;

describe('env-utils', () => {
  describe('stubEnv', () => {
    stubEnv();

    it('setting env variable', () => {
      process.env.ABC = 'abc';
    });

    it('env varible should not be set', () => {
      expect(process.env.ABC).not.to.exist;
    });
  });
});

