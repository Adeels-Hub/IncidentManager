import { useEffect, useState } from 'react';
import { getLocations, getIncidentsByLocationId } from '../api/incidents';

interface Incident {
  id: string;
  name: string;
  description: string;
  dateTime: string;
  priority: number;
  locationId: string;
  locationName: string;
}

interface UseIncidentsResult {
  incidents: Incident[];
  loading: boolean;
  error: Error | null;
}

export const useIncidents = (): UseIncidentsResult => {
  const [incidents, setIncidents] = useState<Incident[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const locations = await getLocations();
        const allIncidents: Incident[] = [];

        for (const loc of locations) {
          const incidentsForLoc = await getIncidentsByLocationId(loc.id);
          const enriched = incidentsForLoc.map((incident: any) => ({
            id: incident.id,
            name: incident.name,
            description: incident.description ?? '',  // safe fallback
            dateTime: incident.datetime,              // <-- FIXED THIS LINE
            priority: incident.priority,
            locationId: loc.id,
            locationName: loc.name,
          }));
          
          allIncidents.push(...enriched);
        }

        const uniqueMap = new Map();
        allIncidents.forEach((i) => {
          if (!uniqueMap.has(i.id)) uniqueMap.set(i.id, i);
        });

        const sorted = Array.from(uniqueMap.values()).sort((a, b) => {
          if (a.priority !== b.priority) return a.priority - b.priority;
          return new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime();
        });

        setIncidents(sorted);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { incidents, loading, error };
};
