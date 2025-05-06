
import React from 'react';
import { Bell, Languages } from 'lucide-react';

export const Header = () => {
  return (
    <nav className="flex w-full items-center gap-[40px_100px] justify-between flex-wrap pt-8 pb-2 rounded-lg max-md:max-w-full">
      <div className="self-stretch flex min-w-60 items-center gap-4 flex-wrap my-auto max-md:max-w-full">
        <div className="self-stretch flex items-center gap-4 w-[60px] my-auto">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/d098b930f21d4ae38600670517b73664/cb198ad87babc2d6294d9ade6608ff1363836b8f?placeholderIfAbsent=true"
            alt="Logo"
            className="aspect-[1] object-contain w-[60px] self-stretch my-auto"
          />
        </div>
        <nav className="self-stretch flex min-w-60 items-stretch gap-3 overflow-hidden text-base text-[#F0F0F6] font-bold text-center my-auto max-md:max-w-full">
          <button className="self-stretch rounded h-full p-3 hover:bg-white/10 transition-colors">
            Book Appointment
          </button>
          <button className="self-stretch rounded h-full p-3 hover:bg-white/10 transition-colors">
            Health Records
          </button>
          <button className="self-stretch rounded h-full p-3 hover:bg-white/10 transition-colors">
            View Consultations
          </button>
        </nav>
      </div>
      
      <div className="self-stretch flex min-w-60 items-center gap-6 my-auto">
        <button className="self-stretch flex items-center justify-center p-2 hover:bg-white/10 rounded-full transition-colors">
          <Languages size={24} color="white" />
        </button>
        
        <button className="self-stretch flex items-center justify-center p-2 hover:bg-white/10 rounded-full transition-colors">
          <Bell size={24} color="white" />
        </button>
        
        <div className="self-stretch flex items-center gap-3 text-sm text-white font-medium text-center my-auto">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/d098b930f21d4ae38600670517b73664/6fb78d9b93a4839524747f30c302dcfe59cc0638?placeholderIfAbsent=true"
            alt="Profile"
            className="aspect-[1] object-contain w-8 rounded self-stretch shrink-0 my-auto"
          />
          <div className="self-stretch flex items-center gap-0.5 my-auto">
            <span className="self-stretch my-auto">Ajmal Al- Rashid</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/d098b930f21d4ae38600670517b73664/eab606db4b7229ae01f7a87e331b4fd9ba17c854?placeholderIfAbsent=true"
              alt="Dropdown"
              className="aspect-[1] object-contain w-[18px] self-stretch shrink-0 my-auto"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};
