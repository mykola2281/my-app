'use client';

import React from 'react';

import { FechedTypes } from '@/lib/types/FetchDataTypes';
import Link from 'next/link';

interface CartItemProps {
  item: FechedTypes;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  return (
    <div className="bg-white rounded-[20px] max-w-[240px] w-full flex items-center flex-col justify-between p-[10px]">
      <div className="flex justify-center content-center  pt-[10px]">
        <Link href={item.id.toString()} key={item.id + 'Card'}>
          <div
            className="h-full"
            style={{
              backgroundImage: `url(${item.image})`,
              width: '150px',
              height: '150px',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}></div>
        </Link>
      </div>

      <div className="flex flex-col justify-between">
        <div className="text-start m-[10px] ">
          <Link
            href={item.id.toString()}
            key={item.id + 'Card'}
            className="hover:text-red-400 hover:underline">
            <h1 className="text-l font-bold ">{item.title}</h1>
          </Link>
          <span className="font-medium">Category: {item.category}</span>
        </div>

        <div className="flex  justify-between items-center ">
          <div className="font-bold ml-[15px] ">
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
              currencyDisplay: 'narrowSymbol',
            }).format(item.price)}
          </div>
          <button className=" mr-[15px] bg-sky-400 rounded-[15px] p-2 hover:bg-sky-600 active:bg-sky-800 ">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
