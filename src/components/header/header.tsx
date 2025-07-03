import { LogoIcon } from '../logo/logoIcon';

export function Header() {
  return (
    <header className="flex justify-between items-center h-[120px]">
      <LogoIcon/>
    </header>
  );
}