'use client'
import tw from "tailwind-styled-components";

const Container = tw.section`
    flex
    px-4
    py-8
    bg-white
`

const InnerContent = tw.div`
    w-full 
    mx-auto 
    max-w-7xl
`
const Paragraph = tw.p`
    ${(p) => (p.$textType ? "text-white" : "text-black")}
    text-5xl
    transition-all
    ease-in-out
    hover:text-yellow-300 
    hover:text-7xl
    duration-300
    cursor-pointer
`

const ParaSpan = tw.span`
    text-yellow-400
    md:text-red-400
`

export const Section = ({ children }) => {
    return(
       
        <Container>
            {children}
        </Container>
        
    ); 
}

export default Section;