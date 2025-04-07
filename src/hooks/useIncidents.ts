import { useEffect, useState } from 'react';
import { getLocations, getIncidentsByLocationId } from '../api/incidents';

// Raw incident structure
interface RawIncident {
  id: string;
  name: string;
  description?: string;
  datetime: string;
  priority: number;
  locationId: string;
}

// Location from API
interface Location {
  id: string;
  name: string;
  children?: Location[];
}

// Normalized structure used by the app
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

// 🔄 Utility: Recursively flatten all locations
const flattenLocations = (locations: Location[]): Location[] => {
  const result: Location[] = [];

  const recurse = (loc: Location) => {
    result.push({ id: loc.id, name: loc.name });
    if (loc.children) {
      loc.children.forEach(recurse);
    }
  };

  locations.forEach(recurse);
  return result;
};

export const useIncidents = (): UseIncidentsResult => {
  const [incidents, setIncidents] = useState<Incident[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchAllIncidents = async () => {
      try {
        const rawLocations = await getLocations();
        const flatLocations = flattenLocations(rawLocations);

        // 🗺️ Build a locationId → locationName map
        const locationMap = new Map(flatLocations.map(loc => [loc.id, loc.name]));

        // 📥 Fetch incidents from all locations
        const allIncidentsNested: Incident[][] = await Promise.all(
          flatLocations.map(async (loc): Promise<Incident[]> => {
            const incidentsForLoc: RawIncident[] = await getIncidentsByLocationId(loc.id);

            return incidentsForLoc.map((incident: RawIncident): Incident => ({
              id: incident.id,
              name: incident.name,
              description: incident.description ?? '',
              dateTime: incident.datetime,
              priority: incident.priority,
              locationId: incident.locationId,
              locationName: locationMap.get(incident.locationId) ?? 'Unknown',
            }));
          })
        );

        const allIncidents: Incident[] = allIncidentsNested.flat();

        // 🧼 Deduplicate by ID
        const uniqueIncidents: Incident[] = allIncidents.reduce((acc: Incident[], current) => {
          if (!acc.some(item => item.id === current.id)) {
            acc.push(current);
          }
          return acc;
        }, []);

        // 🔃 Sort by priority ASC, date DESC
        uniqueIncidents.sort((a, b) => {
          if (a.priority !== b.priority) return a.priority - b.priority;
          return new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime();
        });

        setIncidents(uniqueIncidents);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllIncidents();
  }, []);

  return { incidents, loading, error };
};
