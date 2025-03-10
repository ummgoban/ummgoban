import { Link } from 'react-router';

import logo from '@/lib/assets/icons/logo.svg';

const Header = () => {
  return (
    <header className="w-full h-8 py-2 box-content border-b border-gray-300">
      <div className="w-full h-full">
        <Link to="/" className="cursor-pointer">
          <div className="flex items-center justify-center gap-2">
            <img src={logo} width={24} height={24} alt="logo" />
            <span className="text-lg font-semibold">맘찬픽</span>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
