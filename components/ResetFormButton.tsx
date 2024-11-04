"use client";

import { X } from "lucide-react";
type Props = {
  setQuery: (query: string) => void;
};

function ResetFormButton({ setQuery }: Props) {
  const searchParams = new URLSearchParams(window.location.search);

  const reset = () => {
    searchParams.delete("query");
    window.history.replaceState({}, "", `${window.location.pathname}`);
    setQuery("");
  };

  return ( 
    <button type="reset" className="search-btn text-gray-600" onClick={reset}>
      <X className="size-5 " />
    </button>
  );
}

export default ResetFormButton;
