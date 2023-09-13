import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { fetchFavourites } from './favouritesAPI';
import { APOD } from '../apod/apodSlice';

type URL = string;
export type Favourites = Record<URL, APOD>;
export interface FavouritesState {
  loading: boolean;
  favourites: Favourites;
  error: string;
}

const initialState: FavouritesState = {
  loading: false,
  favourites: {},
  error: '',
};

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setFavourites: (state, action: PayloadAction<Favourites>) => {
      state.loading = false;
      state.favourites = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = '';
    },
  },
});

export const { setLoading, setFavourites, setError, clearError } =
  favouritesSlice.actions;

export const selectFavourites = (state: RootState): FavouritesState =>
  state.favourites;

export const selectIsFavourite = createSelector(
  [selectFavourites, (state, url) => url],
  (favourites, url) => {
    return favourites.favourites[url] !== undefined;
  }
);

export const fetchFavouritesThunk = (): AppThunk => async (dispatch) => {
  try {
    dispatch(setLoading());
    const favourites = await fetchFavourites();
    dispatch(setFavourites(favourites));
  } catch (error) {
    dispatch(setError((error as Error).message));
  }
};

export const { reducer: favouritesReducer } = favouritesSlice;
