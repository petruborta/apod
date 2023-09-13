import { APOD } from '../apod/apodSlice';
import {
  Favourites,
  FavouritesState,
  favouritesReducer,
  setLoading,
  setFavourites,
  setError,
  clearError,
} from './favouritesSlice';

describe('favourites reducer', () => {
  const apod: APOD = {
    date: '2011-11-11',
    url: 'test url',
    title: 'test title',
    description: 'test description',
  };
  const favourites: Favourites = {};
  favourites[apod.url] = apod;

  const initialState: FavouritesState = {
    loading: false,
    favourites,
    error: '',
  };

  it('should handle initial state', () => {
    expect(favouritesReducer(undefined, { type: 'unknown' })).toEqual({
      loading: false,
      favourites: {},
      error: '',
    });
  });

  it('should handle setLoading', () => {
    const actual = favouritesReducer(initialState, setLoading());
    expect(actual.loading).toEqual(true);
  });

  it('should handle setFavourites', () => {
    const actual = favouritesReducer(initialState, setFavourites(favourites));
    expect(Object.values(actual.favourites).length).toEqual(1);
    expect(actual.favourites[apod.url]).toEqual(apod);
  });

  it('should handle setError', () => {
    const error = 'Something went wrong';
    const actual = favouritesReducer(initialState, setError(error));
    expect(actual.error).toEqual(error);
  });

  it('should handle clearError', () => {
    const actual = favouritesReducer(initialState, clearError());
    expect(actual.error).toEqual('');
  });
});
