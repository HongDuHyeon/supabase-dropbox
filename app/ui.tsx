'use client';

import { useState } from 'react';
import Logo from './components/logo';
import Search from './components/search';
import DropSection from './components/dropSection';
import ImageList from './components/imageList';

export default function UI() {
  const [searchInput, setSearchInput] = useState('');

  return (
    <main className="w-full p-2 flex-col gap-4">
      {/* Logo */}
      <Logo />
      {/* Search Component */}
      <Search searchInput={searchInput} setSearchInput={setSearchInput} />
      {/* File Drop Drag */}
      <DropSection />
      {/* Image */}
      <ImageList />
    </main>
  );
}
