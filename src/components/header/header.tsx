import { LogoIcon } from '../logo/logoIcon';
import { MenuNav } from '../feature/menu/menuNav';
import { SearchAndNotification } from '../feature/search-notification/searchAndNotification';

export function Header() {
  return (
    <header className="flex justify-between items-center h-[120px] gap-4">
      <LogoIcon/>
      <MenuNav />
      <SearchAndNotification />
    </header>
  );
}