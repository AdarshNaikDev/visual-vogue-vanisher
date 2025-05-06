import React from 'react';
import { Header } from '@/components/layout/Header';
import { HeroSection } from '@/components/hero/HeroSection';

const Index = () => {
  return (
    <main className="overflow-hidden bg-[#0B2443]">
      <div className="flex flex-col relative min-h-[632px] w-full items-center pb-[171px] px-20 max-md:max-w-full max-md:pb-[100px] max-md:px-5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/d098b930f21d4ae38600670517b73664/10d7d40b74e1a7ee94e24cc795b2b651bf79f7e4?placeholderIfAbsent=true"
          alt="Background"
          className="absolute h-full w-full object-cover inset-0"
        />
        
        <div className="relative flex mb-[-34px] w-full max-w-[1040px] flex-col items-stretch max-md:max-w-full max-md:mb-2.5">
          <Header />
          <HeroSection />
        </div>
      </div>
    </main>
  );
};

export default Index;