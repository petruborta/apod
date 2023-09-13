const MIN_DATE = '1970-01-01';

export const getDate = (date: Date): string => date.toISOString().slice(0, 10);

export const getCurrentDate = (): string => getDate(new Date());

export const getRandomDate = (
  startDate = new Date(MIN_DATE),
  endDate = new Date(getCurrentDate())
): string => {
  const timeDiff = endDate.getTime() - startDate.getTime();
  const randomTime = Math.random() * timeDiff;
  const randomDate = new Date(startDate.getTime() + randomTime);
  return getDate(randomDate);
};

export const addDays = (date: Date, days: number): Date => {
  const nextDate = new Date(date.valueOf());
  nextDate.setDate(nextDate.getDate() + days);
  return nextDate;
};

export const getNextDay = (date: string): Date => addDays(new Date(date), 1);
