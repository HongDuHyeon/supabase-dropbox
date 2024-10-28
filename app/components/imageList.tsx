'use client';

import { useQuery } from '@tanstack/react-query';
import ImageItem from './imageItem';
import { searchFile } from 'actions/storageActions';
import { Spinner } from '@material-tailwind/react';

export default function ImageList({ searchInput }) {
  const searchImagesQuery = useQuery({
    queryKey: ['images', searchInput],
    queryFn: () => searchFile(searchInput),
  });

  return (
    <section className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2">
      {searchImagesQuery.isLoading && <Spinner />}
      {searchImagesQuery.data &&
        searchImagesQuery.data.map((image) => (
          <ImageItem key={image.id} image={image} />
        ))}
    </section>
  );
}
