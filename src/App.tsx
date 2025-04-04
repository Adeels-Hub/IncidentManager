import React from 'react';
import { useIncidents } from './hooks/useIncidents';
import IncidentTable from './components/IncidentTable';
import IncidentList from './components/IncidentList';
import './index.css';

const App: React.FC = () => {
  const { incidents, loading, error } = useIncidents();
  const isMobile = window.innerWidth < 600;

  if (loading) return <p className="text-center text-gray-700 mt-4">Loading incidents...</p>;
  if (error) return <p className="text-center text-red-500 mt-4">Error loading incidents: {error.message}</p>;

  return (
    <div className="w-full overflow-x-auto p-4">
      <h2 className="text-2xl font-semibold text-white mb-6 mt-2">Incidents</h2>

      {isMobile ? (
        <IncidentList incidents={incidents} />
      ) : (
        <IncidentTable incidents={incidents} />
      )}
    </div>
  );  
};

export default App;
