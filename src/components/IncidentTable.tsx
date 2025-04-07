import React from 'react';
import { formatDate } from '../utils/formatDate';
import { getPriorityIcon, getPriorityLabel } from '../utils/priorityUtils';

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

const IncidentTable: React.FC<Props> = ({ incidents }) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full table-auto border-collapse text-sm">
        <thead>
          <tr className="bg-gray-100 text-left border-b border-gray-500 h-12">
            {/* Icon column */}
            <th className="p-3 w-12"></th>
            <th className="p-3 w-40">Incident Name</th>
            <th className="p-3 w-48">Date and Time</th>
            <th className="p-3 w-24">Priority</th>
            <th className="p-3 w-48">Location Name</th>
          </tr>
        </thead>
        <tbody>
          {incidents.map((incident) => (
            <tr key={incident.id} className="hover:bg-blue-100 border-b border-gray-500 h-12">
              <td className="p-3">
                <img
                  src={getPriorityIcon(incident.priority)}
                  alt="priority"
                  className="w-6 h-6"
                />
              </td>
              <td className="p-3">{incident.name}</td>
              <td className="p-3 whitespace-nowrap">{formatDate(incident.dateTime)}</td>
              <td className="p-3">{getPriorityLabel(incident.priority)}</td>
              <td className="p-3">{incident.locationName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IncidentTable;
