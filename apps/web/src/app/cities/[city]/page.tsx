import { Metadata, ResolvingMetadata } from 'next';
import '../../../styles/globals.css'
import JobSearchFilter from '../../../components/JobSearchFilter'

type Props = {
  params: { city: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
 
export async function generateMetadata(
  { params, searchParams }: Props,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.city;
  // // fetch data
  // const post = await fetch(`https://picnic-dev.app/careers/wp-json/wp/v2/spc_page?slug=${slug}`).then((res) => res.json())
  // mucky, but deal with it. 
  const capitalized = slug.charAt(0).toUpperCase()+ slug.slice(1)
  
  return {
    title: `${capitalized} Vacancies - Werken bij Picnic`,
    description: `${capitalized} Vacancies bij Picnic Technologies`,
    keywords: `Picnic Jobs, Amsterdam, Headquarters, Hoofkantoor, Online Supermarket, App, Shopping, Groceries`,
    creator: '@picnic',
    viewport: {
      width: 'device-width',
      initialScale: 1,
      maximumScale: 1,
  },
  alternates: {
      canonical: 'https://picnic.app',
      languages: {
        'en': 'https://picnic.app/en-GB',
        'de-DE': 'https://picnic.app/de-DE',
      },
      media: {
        'only screen and (max-width: 600px)': 'https://picnic.app/mobile',
      },
      types: {
        'application/rss+xml': 'https://picnic.app/rss',
      },
  },
    openGraph: { 
      type: "website", 
      url: `https://localhost:3000/cities/${slug}`, 
      title: `${capitalized} Vacancies - Werken bij Picnic`,
      description: `${capitalized} Vacancies bij Picnic Technologies`,
      siteName: "Picnic Technologies"}
    }
}

async function getCityData(city){

  const cityPage= await fetch(`https://picnic-dev.app/careers/wp-json/wp/v2/spc_page?slug=${city}`);
  if (!cityPage.ok) {
    throw new Error('Failed to fetch data');
  }
  return cityPage.json();
}

async function getData() {
    const res = await fetch(`https://boards-api.greenhouse.io/v1/boards/teampicnic/jobs?content=true`, { cache: 'no-store' });
    const jobsList = res.json();
    return jobsList;
}


export default async function Page({ params }) {
    const data = await getData();
    const pageData = await getCityData(params.city);
    const listings = Object.entries(data.jobs).map((jobs, index) => {
      return jobs[1];
      }
    )

    return(
        <>
          <section className="relative h-1/2 flex flex-col items-center justify-center text-center text-white py-20 px-3 md:py-40">
            <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
                <video className="min-w-full min-h-full absolute object-cover" src="../assets/videos/amsterdam.mp4" autoPlay muted loop></video>
            </div>
            <div className="video-content space-y-2">
              <h1 className="text-5xl font-extrabold mb-2">Picnic Jobs in Amsterdam</h1>
              {/* {pageData[0].acf.page_intro_text ? 
              <p className="text-2xl font-bold mb-2"dangerouslySetInnerHTML={{__html: pageData[0].acf.page_intro_text}} /> : null } */}
            </div>
        </section>

        <section id="jobs" className="relative bg-white pt-10 pb-10 px-4">      
          <div className="container mx-auto mt-4">
            <div className="flex flex-row md:flex-col">
              <JobSearchFilter jobs={listings} jobLocation={params.city} />
            </div>
          </div>
        </section>
    
      </>

    )

}