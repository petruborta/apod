import { Favourites } from './favouritesSlice';

export const fetchFavourites = async (): Promise<Favourites> => {
  try {
    // TO DO: fetch favourites from MongoDB
    return await new Promise((resolve, reject) => {
      resolve({});
    });
  } catch (error: unknown) {
    throw new Error((error as Error).message);
  }
};
