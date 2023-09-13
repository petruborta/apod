import {
  APOD,
  APODState,
  apodReducer,
  setLoading,
  setAPOD,
  setError,
  clearError,
} from './apodSlice';

describe('apod reducer', () => {
  const apod: APOD = {
    date: '2011-11-11',
    url: 'test url',
    title: 'test title',
    description: 'test description',
  };

  const initialState: APODState = {
    loading: false,
    apod: null,
    error: '',
  };

  it('should handle initial state', () => {
    expect(apodReducer(undefined, { type: 'unknown' })).toEqual({
      loading: false,
      apod,
      error: '',
    });
  });

  it('should handle setLoading', () => {
    const actual = apodReducer(initialState, setLoading());
    expect(actual.loading).toEqual(true);
  });

  it('should handle setAPOD', () => {
    const actual = apodReducer(initialState, setAPOD(apod));
    expect(actual.apod).toEqual(apod);
  });

  it('should handle setError', () => {
    const error = 'Something went wrong';
    const actual = apodReducer(initialState, setError(error));
    expect(actual.error).toEqual(error);
  });

  it('should handle clearError', () => {
    const actual = apodReducer(initialState, clearError());
    expect(actual.error).toEqual('');
  });
});
