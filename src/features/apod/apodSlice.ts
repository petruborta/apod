import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { fetchNextAPOD, fetchRandomAPOD } from './apodAPI';

export interface APOD {
  date: string;
  url: string;
  title: string;
  description: string;
}

export interface APODState {
  loading: boolean;
  apod: APOD | null;
  error: string;
}

const initialState: APODState = {
  loading: false,
  apod: null,
  error: '',
};

export const apodSlice = createSlice({
  name: 'apod',
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setAPOD: (state, action: PayloadAction<APOD | null>) => {
      state.loading = false;
      state.apod = action.payload;
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

export const { setLoading, setAPOD, setError, clearError } = apodSlice.actions;

export const selectAPOD = (state: RootState): APODState => state.apod;

export const fetchRandomAPODThunk = (): AppThunk => async (dispatch) => {
  try {
    dispatch(setLoading());
    const apod = await fetchRandomAPOD();
    dispatch(setAPOD(apod));
  } catch (error) {
    dispatch(setError((error as Error).message));
  }
};

export const fetchNextAPODThunk =
  (): AppThunk => async (dispatch, getState) => {
    try {
      const state = getState();
      dispatch(setLoading());
      const apod = await fetchNextAPOD(state.apod.apod?.date);
      dispatch(setAPOD(apod));
    } catch (error) {
      dispatch(setError((error as Error).message));
    }
  };

export const { reducer: apodReducer } = apodSlice;
