import { Input } from '@material-tailwind/react';

export default function Search({ searchInput, setSearchInput }) {
  return (
    <Input
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}
      label="Search TODO"
      placeholder="Search TODO"
      icon={<i className="fas fa-search" />}
    />
  );
}
