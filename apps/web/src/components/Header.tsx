"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';

export const Header = ({ header, locales, currentLocale }: any) => {
    const slug = "about";
    const current = usePathname(); 
    console.log(current); 
  return (
    <header className={current === '/' ? "topLevel" : 'innerLevel'}>
      <div className="relative mx-auto flex w-full justify-between px-8 md:px-6">
        <div className="flex flex-row items-center">
          <Link href={`/`} className="shake">
            <Image
              className="my-5 rounded "
              src={"../../../assets/img/logo.svg"}
              alt={"logo"}
              width={48}
              height={48}
            />
          </Link>
        </div>
        <div className="flex flex-row items-center max-md:hidden">
          <nav className="flex items-center">
            <Link
              href={`/${slug}`}
              className={`prose prose-PicnicText mx-2 ${current === '/' ? 'text-white' : 'text-slate-900'} font-bold`}
            >
              <p>About Picnic</p>
            </Link>
            <Link
              href={`/working-at-picnic`}
              className={`prose prose-PicnicText mx-2 ${current === '/' ? 'text-white' : 'text-slate-900'} font-bold`}
            >
              <p>Picnic as Employer</p>
            </Link>
            <Link
              href={`/teams`}
              className={`prose prose-PicnicText mx-2 ${current === '/' ? 'text-white' : 'text-slate-900'} font-bold`}
            >
              <p>Teams</p>
            </Link>
            <Link
              href={`/tech`}
              className={`prose prose-PicnicText mx-2 ${current === '/' ? 'text-white' : 'text-slate-900'} font-bold`}
            >
              <p>Tech</p>
            </Link>
            <Link
              href={`/de`}
              className={`prose prose-PicnicText mx-2 ${current === '/' ? 'text-white' : 'text-slate-900'} font-bold`}
            >
              <p>LANG</p>
            </Link>
            <Link
              href={`/jobs`}
              className="mx-2 rounded rounded-full bg-greenish hover:bg-gray-50 px-4 py-2 text-white hover:text-greenish drop-shadow"
            >
              <p>All jobs</p>
            </Link>
          </nav>
        </div>
        {/* Mobile Navigation */}
        <div className="z-10 float-right sm:hidden md:visible lg:visible xl:visible 2xl:visible">
          <input
            type="checkbox"
            className="peer hidden"
            id="sidebar-collapse"
          />
          <label
            className="group absolute right-0 top-2 z-10 m-[14px] border-none bg-transparent text-4xl"
            htmlFor="sidebar-collapse"
          >
            <div className="relative my-1 flex h-[50px] w-[50px] transform items-center justify-center transition-all duration-200">
              <div className="flex h-[20px] w-[20px] origin-center transform flex-col space-y-1 transition-all duration-300">
                <div className="group-peer-checked:w-6 group-peer-checked:rotate-[42deg] group-peer-checked:-translate-y-[3.9px] h-[2px] w-5 origin-left transform rounded border border-solid bg-black transition-all duration-300"></div>
                <div className="group-peer-checked:w-6 group-peer-checked:opacity-0 h-[2px] w-5 transform rounded border border-solid bg-black transition-all duration-300"></div>
                <div className="group-peer-checked:w-6 group-peer-checked:-rotate-[42deg] h-[2px] w-5 origin-left transform rounded border border-solid bg-black transition-all duration-300"></div>
              </div>
            </div>
          </label>
          <aside className="fixed -right-full top-20 h-full w-full bg-white delay-150 duration-300 ease-out peer-checked:right-0">
            <div className="pl-6">
              {/* <img className="my-5 rounded transition-all duration-300 ease-in-out" src={'../assets/img/logo.svg'} alt="picnic-logo" width={48} height={48}/> */}
            </div>
            <div className="list-none space-y-10 pl-6 pt-4 text-xl">
              <Link
                href={`/jobs`}
                className="prose prose-PicnicText mx-1 text-slate-900"
              >
                <p>Jobs</p>
              </Link>
              <Link
                href={`/teams`}
                className="prose prose-PicnicText mx-1 text-slate-900"
              >
                <p>Teams</p>
              </Link>
              <Link
                href={`/cities/amsterdam`}
                className="prose prose-PicnicText mx-1 text-slate-900"
              >
                <p>Cities</p>
              </Link>
              <Link
                href={`/contact`}
                className="prose prose-PicnicText mx-1 text-slate-900"
              >
                <p>Contact</p>
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </header>
  );
};
