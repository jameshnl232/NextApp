import React from "react";
import SearchForm from "./SearchForm";

async function HeroSection() {
  return (
    <div className="min-h-screen">
      <section className="w-full min-h-[530px] flex justify-center items-center flex-col  py-10 px-6 z-20 relative ">
        <h1 className="heading rounded-2xl backdrop-blur-none text-center  ">
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
        </h1>

        <p className="sub-heading !max-w-3xl text-center">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>
        <div className="w-full flex justify-center items-center mt-10">
          <SearchForm />
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
