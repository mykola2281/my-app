'use client';
import React, { useEffect, useState } from 'react';
import { FechedTypes } from '@/lib/types/FetchDataTypes';
import { GetData } from '@/lib/GetData/GetData';
import { CardList } from '@/components/CardList/CardList';

const Page = () => {
  const [info, setInfo] = useState<FechedTypes[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await GetData.getAllData();
        setInfo(data);
      } catch (error: any) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <CardList info={info} />
        </div>
      )}
    </div>
  );
};

export default Page;
