import React from 'react';

interface SearchInputProps {
  placeholder?: string;
  onChange?: (value: string) => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({ 
  placeholder = "Search by doctors",
  onChange 
}) => {
  return (
    <div className="rounded bg-white flex w-full max-w-[691px] flex-col text-base text-[#231F20] font-medium justify-center px-1.5 py-[3px]">
      <div className="flex items-center gap-0.5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/d098b930f21d4ae38600670517b73664/1cc60659484f43b39fd4cd9d55aa99c79787bc31?placeholderIfAbsent=true"
          alt="Search"
          className="aspect-[1] object-contain w-9 self-stretch shrink-0 my-auto"
        />
        <input
          type="text"
          placeholder={placeholder}
          onChange={(e) => onChange?.(e.target.value)}
          className="w-full bg-transparent outline-none"
        />
      </div>
    </div>
  );
};