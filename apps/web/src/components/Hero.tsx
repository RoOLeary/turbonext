"use client";
import Link from "next/link";
import { useState } from "react";

export const Hero = ({}) => {
  // console.log(data.columns[0].components);

  // console.log(output[2].data);
  const [searchterm, setSearchTerm] = useState("");
  const [placeholder, setPlaceHolder] = useState("Zoeken...");

  const enableSearch = true;
  const suggestionsEnabled = true;
  // const suggestions = output[2] ? output[2].data.suggestions : []

  const handleSearch = (event) => {
    console.log(event);
    if (event.key === "Enter") {
      console.log(event.target.value);
    } else {
      setSearchTerm(event.target.value);
    }
  };

  // console.log(searchterm)
  // // console.log(output);
  // const terms = suggestions.map((s, i) => {
  //     return(
  //         <a key={i} className="bg-white text-black rounded-full drop-shadow items-center justify-center flex px-4 py-2" href={s.url}>
  //             <p>{s.text}</p>
  //         </a>
  //     );
  // });

  return (
    <div
      className="relative w-full overflow-hidden py-20 sm:py-32 md:px-6 lg:px-8 lg:pb-32 xl:pb-36"
      style={{
        backgroundImage: `url(${"https://d1gr3r269tafbs.cloudfront.net/extras/spc-builder/hero-background_1683534928.png"})`,
        backgroundSize: "cover",
        height: "600px",
        backgroundPosition: "center center",
        backgroundAttachment: "scroll",
      }}
    >
      <div className="relative flex w-full flex-col gap-4 self-stretch p-6 md:px-20 md:py-5">
        <section id="" className="text relative block">
          <div className="relative flex flex-col text-white">
            <div className="">
              <h5 className="text-lg font-bold">420 jobs in 69 locations</h5>
              <br />
              <h1 className="pb-10 text-7xl font-black tracking-tighter text-white">
                Join the grocery revolution
              </h1>
            </div>
          </div>

          <input
            type="text"
            placeholder="Zoeken..."
            className="w-full rounded-full p-3 drop-shadow md:w-[600px]"
            value=""
            onChange={handleSearch}
          />
          <div className="flex w-full flex-wrap gap-2 pt-4 md:w-[600px]">
            <a
              className="flex items-center justify-center rounded-full px-4 py-2 text-white hover:text-greenish bg-greenish hover:bg-gray-50 drop-shadow"
              href="/tech"
            >
              <p>Test</p>
            </a>
            <a
              className="flex items-center justify-center rounded-full  px-4 py-2 text-white hover:text-greenish bg-greenish hover:bg-gray-50 drop-shadow"
              href="/design"
            >
              <p>Design</p>
            </a>
            <a
              className="flex items-center justify-center rounded-full bg-greenish hover:bg-gray-50 px-4 py-2 text-white hover:text-greenish drop-shadow"
              href="/runner"
            >
              <p>Runner</p>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};
