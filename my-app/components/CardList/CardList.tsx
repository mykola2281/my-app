'use client';

import React from 'react';

import { FechedTypes } from '@/lib/types/FetchDataTypes';
import CardItem from './components/CardItem/CardItem';

interface CardListProps {
  info: FechedTypes[];
}

export function CardList({ info }: CardListProps) {
  return (
    <div>
      <div className="flex justify-center flex-wrap gap-5">
        {info.map((item) => (
          <CardItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
