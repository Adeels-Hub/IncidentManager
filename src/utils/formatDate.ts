import dayjs from 'dayjs';

export const formatDate = (dateStr: string): string => {
  const parsed = dayjs(dateStr);
  return parsed.isValid() ? parsed.format('M/D/YYYY, h:mm:ss A') : 'Invalid Date';
};
