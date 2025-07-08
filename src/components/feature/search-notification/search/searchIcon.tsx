import { IoIosSearch } from "react-icons/io";

type SearchIconProps = {
  className?: string;
};

export function SearchIcon({ className = "" }: SearchIconProps) {
  return <IoIosSearch className={className} />;
}