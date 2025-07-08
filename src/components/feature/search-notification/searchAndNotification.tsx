import { NotificationIcon } from './notification/notificationIcon';
import { Search } from './search/search';

export function SearchAndNotification() {
  return (
    <div className="flex items-center gap-5">
      <Search />
      <NotificationIcon />
    </div>
  );
}
