import { SearchContent } from './searchContent';
import { SearchInput } from './searchInput';

export function Search() {
  return (
    <div className='relative'>
      <SearchInput />
      <SearchContent />
    </div>
  );
}
