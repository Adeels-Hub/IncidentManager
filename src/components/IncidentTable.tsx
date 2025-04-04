import React from 'react';
import { formatDate } from '../utils/formatDate';
import { getPriorityIcon } from '../utils/priorityUtils';

interface Incident {
  id: string;
  name: string;
  description: string;
  dateTime: string;
  priority: number;
  locationName: string;
}

interface Props {
  incidents: Incident[]; 
}

const IncidentTable: React.FC<Props> = ({ incidents }) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full table-auto border-collapse text-sm">
        <thead>
          <tr className="bg-gray-100 text-left border-b border-gray-500 h-12">
            <th className="p-3 w-12"></th>
            <th className="p-3 w-48">Date and Time</th>
            <th className="p-3">ID</th>
            <th className="p-3">Location Name</th>
            <th className="p-3">Incident Name</th>
            <th className="p-3">Description</th>
          </tr>
        </thead>
        <tbody>
          {incidents.map((incident) => (
            <tr key={incident.id} className="hover:bg-blue-100 border-b border-gray-500 h-12">
              <td className="p-3">
                <img
                  src={getPriorityIcon(incident.priority)}
                  alt="icon"
                  className="w-6 h-6"
                />
              </td>
              <td className="p-3 whitespace-nowrap pr-6 w-48">
                {formatDate(incident.dateTime)}
              </td>
              <td className="p-3">{incident.id}</td>
              <td className="p-3">{incident.locationName}</td>
              <td className="p-3">{incident.name}</td>
              <td className="p-3 max-w-xs break-words">{incident.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IncidentTable;
