import {
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import { Link, useLocation } from 'react-router-dom';

type MenuItem = {
  title: string;
  to: string;
};

type MenuNavItemsProps = {
  items: MenuItem[];
};

export function MenuNavItems({ items }: MenuNavItemsProps) {
  const location = useLocation();
  return (
    <>
      {items.map((item) => {
        const isActive = location.pathname === item.to;
        return (
          <NavigationMenuItem
            className={[
              'hover:bg-custom-dark h-full py-3 px-5 rounded-xl ml-0 text-lg text-gray-400 ',
              isActive ? 'bg-custom-dark text-white' : 'font-normal',
            ].join(' ')}
            key={item.to}
          >
            <NavigationMenuLink asChild>
              <Link to={item.to}>{item.title}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        );
      })}
    </>
  );
}
