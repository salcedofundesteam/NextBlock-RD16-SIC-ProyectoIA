import React, { createContext, useContext, useState, useEffect, type ReactNode, useCallback } from 'react';
import { getAllData, type IAllData } from '../api';

interface AllDataContextType {
  data: IAllData[];
  loading: boolean;
  error: string | null;
  refreshData: () => Promise<void>;
}

const AllDataContext = createContext<AllDataContextType | undefined>(undefined);

export const useAllData = (): AllDataContextType => {
  const context = useContext(AllDataContext);
  if (!context) {
    throw new Error('useAllData must be used within an AllDataProvider');
  }
  return context;
};

interface AllDataProviderProps {
  children: ReactNode;
}

export const AllDataProvider: React.FC<AllDataProviderProps> = ({ children }) => {
  const [data, setData] = useState<IAllData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await getAllData();
      setData(result);
    } catch (err) {
      setError('Error al cargar datos del servidor. Asegúrese que el backend esté activo.');
      console.error(err);
      
      // Fallback to empty array or previously cached data could be logic here, 
      // but requirements say "remove static data", so we stick to API only.
      setData([]); 
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <AllDataContext.Provider value={{ data, loading, error, refreshData: fetchData }}>
      {children}
    </AllDataContext.Provider>
  );
};
