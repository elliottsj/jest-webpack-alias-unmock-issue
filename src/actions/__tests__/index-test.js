// This succeeds:
// jest.unmock('..');

// But this fails:
jest.unmock('actions');

import { foo } from 'actions';

describe('foo', () => {
  it('creates a FOO action', () => {
    expect(foo()).toEqual({ type: 'FOO' });
  });
});
