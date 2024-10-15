'use client';

import { IconButton } from '@material-tailwind/react';
import Image from 'next/image';

export default function ImageItem() {
  return (
    <div className="relative w-fill flex flex-col gap-2 p-4 border border-gray-100 rounded-2xl shadow-md">
      {/* image */}
      <div>
        <Image
          src="/images/pepe.png"
          width={300}
          height={300}
          alt="image"
          className="w-full aspect-square rounded-2xl"
        />
      </div>

      {/* file name */}
      <div>.jpg</div>
      <div className="absolute top-4 right-4">
        <IconButton onClick={() => {}} color="red">
          <i className="fas fa-trash" />
        </IconButton>
      </div>
    </div>
  );
}
