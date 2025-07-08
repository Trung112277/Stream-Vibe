import { Input } from '@/components/ui/input';
import { SearchIcon } from './searchIcon';

export function SearchInput() {
  return (
    <div className='relative'>
      <Input className='bg-black/70 h-[35px] w-[250px] pr-[30px] border-custom border-2'/>
      <SearchIcon className='absolute right-2 top-1/2 -translate-y-1/2 w-[20px] h-[20px] cursor-pointer' />
    </div>
  );
}
