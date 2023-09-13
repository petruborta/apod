import axios from 'axios';
import {
  getDate,
  getCurrentDate,
  getRandomDate,
  getNextDay,
} from '../../utils/date';
import { APOD } from './apodSlice';

const NASA_APOD_API = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';
const NASA_APOD_API_MIN_DATE = new Date('1995-06-16');

interface APODResponse {
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
}

const getRandomAPODDate = (): string => getRandomDate(NASA_APOD_API_MIN_DATE);

export const fetchRandomAPOD = async (): Promise<APOD> => {
  try {
    const res = await axios.get<APODResponse>(
      `${NASA_APOD_API}&date=${getRandomAPODDate()}`
    );
    const { date, url, title, explanation } = res.data;

    return { date, url, title, description: explanation };
  } catch (error: unknown) {
    throw new Error((error as Error).message);
  }
};

export const fetchNextAPOD = async (
  apodDate: string | undefined
): Promise<APOD | null> => {
  try {
    if (typeof apodDate !== 'string') {
      return null;
    }

    const nextDate = getNextDay(apodDate);
    const currentDate = new Date(getCurrentDate());
    const isAfterToday = nextDate.getTime() > currentDate.getTime();

    const res = await axios.get<APODResponse>(
      `${NASA_APOD_API}&date=${getDate(isAfterToday ? currentDate : nextDate)}`
    );
    const { date, url, title, explanation } = res.data;

    return { date, url, title, description: explanation };
  } catch (error: unknown) {
    throw new Error((error as Error).message);
  }
};
