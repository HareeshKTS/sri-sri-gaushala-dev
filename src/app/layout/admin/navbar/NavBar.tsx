import { dummy_profile } from '@/assets/admin_assets'
import { Menu } from 'lucide-react'
import admin_routes from '../sidebar/Routes';
import { useLocation } from 'react-router';

type NavbarProps = {
  openSidebar: boolean;
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavBar: React.FC<NavbarProps> = ({ openSidebar, setOpenSidebar }) => {
  const location = useLocation();
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
        <img src={dummy_profile} alt="dummy_profile" className='object-contain h-8 w-8' />
      </div>
    </div>
  )
}

export default NavBar