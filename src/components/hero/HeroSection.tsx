import React from 'react';
import { SearchInput } from '../ui/SearchInput';

export const HeroSection = () => {
  return (
    <section className="self-center flex w-[691px] max-w-full flex-col items-center mt-[166px] max-md:mt-10">
      <div className="flex flex-col items-center text-white max-md:max-w-full">
        <h1 className="text-[42px] font-extrabold max-md:max-w-full">
          Where Trust Meets Complete Care.
        </h1>
        <h2 className="text-[32px] font-normal mt-6 max-md:max-w-full">
          Manage your health records in one place
        </h2>
      </div>
      
      <div className="w-full mt-[82px] max-md:mt-10">
        <SearchInput 
          onChange={(value) => console.log('Search:', value)}
        />
      </div>
    </section>
  );
};