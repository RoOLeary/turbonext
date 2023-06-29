import Image from 'next/image'; 

export const TextMedia = () => {

    return(
        
        <div className="relative isolate overflow-hidden bg-white pt-14">
            <div className="mx-auto w-full px-6 py-10 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-7xl lg:mx-0 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-4">
                <h2 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">Join the team!</h2>
                <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                <p className="text-lg leading-8 text-gray-600">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua. Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.</p>
                <div className="mt-10 flex items-center gap-x-6">
                    <a href="/tech" className="rounded-full bg-greenish px-5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
                </div>
            </div>
            <Image src="https://images.unsplash.com/photo-1567532900872-f4e906cbf06a?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=420&amp;q=80" width={420} height={650} alt="" className="aspect-[6/5] mt-8 lg:mt-0 w-full rounded object-cover lg:max-w-none xl:row-span-2 xl:row-end-2" /></div></div>
            <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32"></div>
        </div>
 
    )
}