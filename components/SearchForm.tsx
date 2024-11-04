"use client";

import React from "react";
import Form from "next/form";
import ResetFormButton from "./ResetFormButton";
import { Search } from "lucide-react";
import { useState } from "react";

function SearchForm() {
  const [query, setQuery] = useState("");

  return (
    <Form action="/" scroll={false} className="search-form relative z-30">
      <input
        name="query"
        value={query}
        placeholder="Search for startups"
        className="flex-1 font-bold placeholder:text-slate-500 text-slate-900 w-full h-auto outline-none"
        onChange={(e) => setQuery(e.target.value)}
      />

      {query && <ResetFormButton setQuery={setQuery} />}
      <button type="submit" className="search-btn text-gray-600 ">
        <Search className="size-5" />
      </button>
    </Form>
  );
}

export default SearchForm;
