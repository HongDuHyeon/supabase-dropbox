'use client';

import { IconButton } from '@material-tailwind/react';
import Image from 'next/image';
import { getImageUrl } from 'utils/supabase/storage';

export default function ImageItem({ image }) {
  console.log(getImageUrl(image.name));
  return (
    <div className="relative w-fill flex flex-col gap-2 p-4 border border-gray-100 rounded-2xl shadow-md">
      {/* image */}
      <div>
        <img
          src={getImageUrl(image.name)}
          className="w-full aspect-square rounded-2xl"
        />
      </div>

      {/* file name */}
      <div>{image.name}</div>
      <div className="absolute top-4 right-4">
        <IconButton onClick={() => {}} color="red">
          <i className="fas fa-trash" />
        </IconButton>
      </div>
    </div>
  );
}
