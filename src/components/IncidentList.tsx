import React from 'react';
import { formatDate } from '../utils/formatDate';
import { getPriorityLabel, getPriorityIcon } from '../utils/priorityUtils';

interface Incident {
  id: string;
  name: string;
  dateTime: string;
  priority: number;
  locationName: string;
}

interface Props {
  incidents: Incident[];
}

const IncidentList: React.FC<Props> = ({ incidents }) => {
  return (
    <div className="space-y-4 mt-4">
      {incidents.map((incident) => (
        <div
          key={incident.id}
          className="flex items-start gap-4 p-4 border rounded-lg hover:bg-blue-100"
        >
          <img
            src={getPriorityIcon(incident.priority)}
            alt="priority"
            className="w-6 h-6 mt-1"
          />
          <div className="flex flex-col text-sm">
            <span className="font-semibold">{incident.name}</span>
            <span>{formatDate(incident.dateTime)}</span>
            <span>{getPriorityLabel(incident.priority)}</span>
            <span className="text-gray-600">{incident.locationName}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IncidentList;
