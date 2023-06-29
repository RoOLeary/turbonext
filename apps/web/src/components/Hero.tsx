'use client';
import Link from 'next/link'
import { useState } from 'react'

export const Hero = ({  }) => {

    
    // console.log(data.columns[0].components);
   
    // console.log(output[2].data);
    const [searchterm, setSearchTerm] = useState('')
    const [placeholder, setPlaceHolder] = useState('Zoeken...')

   
    const enableSearch = true
    const suggestionsEnabled = true
    // const suggestions = output[2] ? output[2].data.suggestions : []

    const handleSearch = (event) => {
        console.log(event);
        if (event.key === 'Enter'){
            console.log(event.target.value)
        } else {
            setSearchTerm(event.target.value)
        }
    }


    // console.log(searchterm)
    // // console.log(output);
    // const terms = suggestions.map((s, i) => {
    //     return(
    //         <a key={i} className="bg-white text-black rounded-full drop-shadow items-center justify-center flex px-4 py-2" href={s.url}>
    //             <p>{s.text}</p>
    //         </a>
    //     ); 
    // });

    return(

        <div className="w-full overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36 relative md:px-6 lg:px-8" style={{ "backgroundImage": `url(${'https://d1gr3r269tafbs.cloudfront.net/extras/spc-builder/hero-background_1683534928.png'})`, "backgroundSize": "cover", "height": "600px", "backgroundPosition": "center center",  "backgroundAttachment": "scroll" }}>
            <div className="flex flex-col self-stretch gap-4 relative w-full md:px-20 md:py-5 p-6">
                <section id="" className="block relative text">
                    <div className="flex flex-col text-white relative">
                        <div className="">
                            <h5 className="font-bold text-lg">420 jobs in 69 locations</h5>
                        <br />
                        <h1 className="text-white text-7xl tracking-tighter font-black py-10">Join the grocery revolution</h1>
                        </div>
                    </div>
                
                    <input type="text" placeholder="Zoeken..." className="md:w-[600px] w-full rounded-full drop-shadow p-3" value="" onChange={handleSearch} />
                    <div className="flex md:w-[600px] w-full gap-2 flex-wrap pt-4">
                        <a className="bg-white text-black rounded-full drop-shadow items-center justify-center flex px-4 py-2" href="/tech">
                        <p>Test</p>
                        </a>
                        <a className="bg-white text-black rounded-full drop-shadow items-center justify-center flex px-4 py-2" href="/design">
                            <p>Design</p>
                        </a>
                        <a className="bg-white text-black rounded-full drop-shadow items-center justify-center flex px-4 py-2" href="/runner">
                            <p>Runner</p>
                        </a>
                    </div>
                </section>
            </div>
        </div>


        
    )
}
