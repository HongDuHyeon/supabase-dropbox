'use client';

import ImageItem from './imageItem';

export default function ImageList() {
  return (
    <section className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2">
      <ImageItem />
      <ImageItem />
      <ImageItem />
      <ImageItem />
    </section>
  );
}
