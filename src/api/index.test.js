import mockAxios from 'jest-mock-axios';
import api from './index';
import * as dataTypes from './dataTypes';

afterEach(() => {
  mockAxios.reset();
});

describe('getData', () => {
  it('gets about data', () => {
    const thenFn = jest.fn();
    const catchFn = jest.fn();

    api.getData(dataTypes.ABOUTS)
      .then(thenFn)
      .catch(catchFn);

    mockAxios.mockResponse({ data: [ { id: 'blah' }, { id: 'rah' } ] });

    expect(mockAxios.get).toHaveBeenCalledWith('/api/aboutmes.json');
    expect(thenFn.mock.calls[0][0].data).toEqual([ { id: 'blah' }, { id: 'rah' } ]);
    expect(catchFn).not.toHaveBeenCalled();
  });
});