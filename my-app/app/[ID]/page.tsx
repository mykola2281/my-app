'use client';
import { GetData } from '@/lib/GetData/GetData';
import Image from 'next/image';
import { FC, useEffect, useState } from 'react';

interface ItemCartProps {
  params: { ID: number };
}

const ItemCart: FC<ItemCartProps> = ({ params }) => {
  const { ID } = params;
  const [cartObj, setCartObj] = useState<any>();
  const [loading, setLoading] = useState(true);

  const fetchItem = async () => {
    try {
      const item = await GetData.getById(ID);
      setCartObj(item);
    } catch (error) {
      console.error('Error fetching item:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItem();
  }, []);

  if (loading || !cartObj) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center">
      <div className="flex items-center bg-white max-w-[700px] rounded-[20px]">
        <div className="p-5">
          <Image
            src={cartObj.image}
            width={400}
            height={400}
            alt={'Picture of ' + cartObj.title}
          />
        </div>
        <div className="flex flex-col max-w-[300px] p-5 gap-10">
          <div>
            <h1 className="text-xl font-bold">{cartObj.title}</h1>
            <span className="text-sm text-gray-400">
              Category: {cartObj.category}
            </span>
            <h3 className="mb-3">
              {cartObj.rating.rate}/5 in {cartObj.rating.count} reviews
            </h3>
            <p className="text-sm">
              Description:
              <br /> {cartObj.description}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-bold ml-2">
              {new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                currencyDisplay: 'narrowSymbol',
              }).format(cartObj.price)}
            </span>
            <button className="mr-2 bg-sky-400 rounded-2xl p-2 hover:bg-sky-600 active:bg-sky-800">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
