import {
  NavigationMenu,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { MenuNavItems } from './menuNavItems';
import { menuNav } from '@/constant/menuNav';
export function MenuNav() {
  return (
    <NavigationMenu className="h-[75px] bg-black/70 rounded-xl border-4 border-gray-700 p-2">
      <NavigationMenuList className="gap-2">
        <MenuNavItems items={menuNav} />
      </NavigationMenuList>
    </NavigationMenu>
  );
}
