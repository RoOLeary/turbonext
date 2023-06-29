import { Metadata } from "next";
import Head from "next/head";
import { Button } from "ui";
import tw from "tailwind-styled-components";

const TestTitle = tw.h1`
  text-4xl font-black text-yellow-600 text-center pt-12 tracking-widest
`

export const metadata: Metadata = {
  title: "Deeplinks - Turborepo Example",
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="mx-auto w-auto px-4 pt-16 pb-8 sm:pt-24 lg:px-8">
        <h1 className="mx-auto text-center text-6xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl xl:text-8xl">
            Deeplinks
          <span className="block bg-gradient-to-r from-brandred to-brandblue bg-clip-text text-transparent px-2">
            Turborepo Example
          </span>
        </h1>
        <div className="mx-auto mt-5 max-w-xl sm:flex sm:justify-center md:mt-8">
          <Button />
        </div>
        <TestTitle>Go díreach Anseo, go tapaidh Ansúid!</TestTitle>
      </main>
    </div>
  );
}
