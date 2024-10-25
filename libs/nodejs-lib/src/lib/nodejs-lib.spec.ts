import { nodejsLib } from './nodejs-lib';

describe('nodejsLib', () => {
  it('should work', () => {
    expect(nodejsLib()).toEqual('nodejs-lib');
  });
});
