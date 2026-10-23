import { dummy_profile } from '@/assets/admin_assets'
import { BellIcon, LogOutIcon, Menu, User } from 'lucide-react'
import admin_routes from '../sidebar/Routes';
import { useLocation } from 'react-router';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useAdminContext } from '@/app/context/AdminContext';

type NavbarProps = {
  openSidebar: boolean;
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavBar: React.FC<NavbarProps> = ({ openSidebar, setOpenSidebar }) => {
  const location = useLocation();
  const { logout } = useAdminContext()
  const currentRoute = admin_routes.find(
    (route) => route.route === location.pathname
  );
  const routeName = currentRoute?.nav_title;
  return (
    <div className='flex justify-between items-center gap-2 px-4 min-h-15 max-h-15 h-15 
      bg-[#ffffff] shadow-md rounded-md'>
      <div onClick={() => setOpenSidebar(!openSidebar)}
        className='lg:hidden cursor-pointer'
      >
        <Menu size={20} color='#002602' />
      </div>
      <div>
        <p className='text-[#000000] font-saira font-medium'>{routeName?.title}</p>
        <p className='text-[10px] text-[#aaaaaa] font-normal text-wrap'>
          {routeName?.sub_title}
        </p>
      </div>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label="Open profile menu"
              className="shrink-0 rounded-full"
            >
              <img
                src={dummy_profile}
                alt="Profile"
                className="h-8 w-8 rounded-full object-cover"
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <User/>
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <BellIcon />
                Notifications
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => logout()}>
              <LogOutIcon />
              Sign Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

export default NavBar