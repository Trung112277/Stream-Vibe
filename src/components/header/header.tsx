import { LogoIcon } from '../logo/logoIcon';
import { MenuNav } from '../feature/menu/menuNav';

export function Header() {
  return (
    <header className="flex justify-between items-center h-[120px]">
      <LogoIcon/>
      <MenuNav />
    </header>
  );
}