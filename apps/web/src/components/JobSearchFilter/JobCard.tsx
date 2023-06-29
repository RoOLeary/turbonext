import Link from 'next/link'
import tw from 'tailwind-styled-components'


const JobCardItem = tw.div`
    bg-offwhite
    rounded-md
    drop-shadow-md hover:drop-shadow-lg
    px-6 py-8
    mb-4
`

const JobCard = ({ job }) => {
    // console.log(job.departments[0].name)
   return(
        <JobCardItem>
            {/* <p className="jobCard location"><small>{job.departments[0].name}</small></p> */}
            <h1 className="jobCard title font-bold pb-1 text-md">
                    <Link
                        href={{
                        pathname: `/jobs/${job.title.toLowerCase().split(' ').join('-')}`,
                        query: { id: `${job.id}` },
                        
                    }}
                    id={`${job.id}`}
                    >{job.title}</Link>
            </h1>
 
            <div className="flex">
                <div className="jobCard location flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#737373" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>{` `}
                    <p className="text-sm text-gray-500">{job.location.name}</p>
                </div>
                <div className="flex ml-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#737373" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>{` `}
                    <p className="text-sm text-gray-500">Full time<small>{job.type}</small></p>
                </div>
            </div>
        </JobCardItem>
    )

}



export default JobCard;