import highIcon from '../assets/alarm-high.svg';
import mediumIcon from '../assets/alarm-medium.svg';
import lowIcon from '../assets/alarm-low.svg';

export const getPriorityLabel = (priority: number): string => {
  switch (priority) {
    case 1:
      return 'High';
    case 2:
      return 'Medium';
    case 3:
      return 'Low';
    default:
      return 'Unknown';
  }
};

export const getPriorityIcon = (priority: number): string => {
  switch (priority) {
    case 1:
      return highIcon;
    case 2:
      return mediumIcon;
    case 3:
      return lowIcon;
    default:
      return '';
  }
};
