'use client'

import Link from 'next/link';
import React, { useState, useRef } from "react";
import Section from "./Section";
import JobCard from "./JobCard";
import { usePathname } from 'next/navigation'
import tw from "tailwind-styled-components";

// Default state
const defaultState = {
  sliceStart: 0,
  sliceEnd: 10,
  pageNumber: 1, 
  citiesPathName: '/cities',
  jobCats: ['/tech','/commercial', '/operations', '/people', '/design', '/internships']
}

const JobFilterComponent = tw.div`
  container mx-auto mt-x-6 max-w-7xl
`
const Input = tw.input`
  h-4 w-4 border-gray-300 text-red-600 focus:ring-white transition-all duration-50 ease-in-out
`
const TextInput = tw.input`
  w-3/4 px-3 pl-10 border border-gray-300 rounded-md
`
const Label = tw.label`
  block text-gray-700 font-bold
`
const SecondLabel = tw.label`
  ml-2 block text-sm font-lg leading-6 text-gray-900
`
const Sidebar = tw.div``
const MainList = tw.div`
  w-full md:w-3/4 md:px-4
`


const JobSearchFilter = ({ jobs, jobCategory, jobLocation, jobCountry }) => {

  const pathname = usePathname();
  const jobFilterRef = useRef(null);
  const isCities = pathname.includes(defaultState.citiesPathName);
  const jobCats = defaultState.jobCats;
  const isCategory = jobCats.includes(pathname); 

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(jobCategory ? jobCategory : '');
  const [country, setCountry] = useState(jobCountry ? jobCountry : "");
  const [location, setLocation] = useState(jobLocation ? jobLocation : "");
  const [categories, setCategories] = useState([]);
  const [cities, setCities] = useState([]);

  // default paging settings - very rough/quicl
  const [currentSliceStart,]= useState(defaultState.sliceStart); 
  const [currentSliceEnd, setCurrentSliceEnd] = useState(defaultState.sliceEnd);
  const [pageNumber, setPageNumber] = useState(defaultState.pageNumber);

  // triggered when job cat changed
  const handleCategoryChange = (e) => {
    let categoryName = e.target.value
    // setCategory(categoryName);
    if (e.target.checked) {
      setCategories([...categories, categoryName]);
    } else {
      setCategories(categories.filter((category) => category !== categoryName));
    }
    console.log(categories);
  };

  // triggered when title changed
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  
  // triggered when country checkbox changed
  const onCountryChange = e => {
    setCountry(e.target.value)
    setLocation('');
    triggerReset(10, 1);
  }

  // triggered when city checkbox changed
  const onCityChange = e => {
    setLocation(e.target.value);

    let cityName = e.target.value
    if (event.target.checked) {
      setCities([...cities, cityName]);
    } else {
      setCategories(cities.filter((city) => city !== cityName));
    }
    triggerReset(10, 1);
  };

  // trigger the pagination reset
  const triggerReset = (end, start) =>{
    setCurrentSliceEnd(end);
    setPageNumber(start);
  };

  // handle the removal of the selected filter tags on click
  const handleRemoveFilter = (e) => {
    e.preventDefault();
    let filter = e.target.value;
    switch (filter) {
      case 'category':
          setCategory('');
        break;
        case 'country':
          setCountry('');
        break
      case 'location':
          setLocation('');
        break;
      default:
    }
    
  }

  // get unique city locations by country & output checkboxes
  const cityLocationsByCountry = (country) => {
    const ctyLoc = jobs.filter(job => job.location.name.toLowerCase().includes(country));
    const uniqueNames = ctyLoc.map(n => n.location.name);
    const removeDuplicates = (uniqueNames) => {
      let unique = uniqueNames.reduce(function (acc, curr) {
          if (!acc.includes(curr))
              acc.push(curr);
          return acc;
      }, []);
      return unique;
    }

    const uniqueCities = removeDuplicates(uniqueNames).sort().map((n, idx) => {
      let split = n.split(',');
      return(
        <div key={idx} className="flex items-center px-6 pb-2">
          <Input id={split[0].toLowerCase()} name={split[0].toLowerCase()} value={split[0].toLowerCase()} type="checkbox" className="h-4 w-4 border-gray-300 text-red-600 focus:ring-white transition-all duration-50 ease-in-out" onChange={onCityChange}/>
          <SecondLabel htmlFor={split[0].toLowerCase()} className="ml-2 block text-sm font-medium leading-6 text-gray-900">{split[0]} {cityJobCount(split[0].toLowerCase())}</SecondLabel>
        </div>
      )
    });
    
    return(
        <div className={`${country}_municipalities`}>
          {uniqueCities}
        </div>
    )
  };
  
  // get unique teams 
  const teamCategoryJobs = (category) => {
    const uniqueLocNames = jobs.map(n => n.departments[0].name);
    const removeDuplicates = (uniqueLocNames) => {
      let unique = uniqueLocNames.reduce(function (acc, curr) {
          if (!acc.includes(curr))
              acc.push(curr);
          return acc;
      }, []);
    return unique;
  }

  const uniqueTeams = removeDuplicates(uniqueLocNames).sort().map((n, idx) => {
    let split = n.split(' ');
    let cat = split[0].toLowerCase();
    let isit = teamJobCount(cat);
    if(isit > 0){
      return(
        <div key={idx} className="flex items-center pb-2">
          <Input id={cat} name={cat} value={cat} type="checkbox" className="h-4 w-4 border-gray-300 text-red-600 focus:ring-white transition-all duration-50 ease-in-out"  onChange={(cat) => handleCategoryChange(cat)}/>
          <Label htmlFor={cat} className="ml-2 block text-sm font-medium leading-6 text-gray-900">{n} ({teamJobCount(cat)})</Label>
        </div>
      )
    }
  });
  
  return(
    <div className={`${category}_municipalities`}>
      {uniqueTeams}
    </div>
    )
  };


  // Catch all clear filters when clicked
  const clearFilters = () => {
    
    if(!isCities || pathname === '/jobs'){
      setCategory('');
      setLocation('')
      resetAll();
    }else{
      setCategory('');
      resetAll();
    }
    if(isCategory){
      setCategory(category);
      setLocation('')
      resetAll();
    }   
  }
  // triggers allofthethingstoclear
  const resetAll = () => {
    setTitle('');
    setCountry('');
    setPageNumber(1);
    setCurrentSliceEnd(10);
  }

  // FILTER:
  // Loops over all jobs and carries out the initial filtering on the list based on supplied filters
  // Still more to be added here, including applying support for multi-category selection

  const filteredJobs = jobs.filter((job) => {    
    const categoryMatch = categories.includes(job.departments[0].name.toLowerCase());

    // console.log(categoryMatch);
    const locationMatch = job.location.name.toLowerCase().includes(location.toLowerCase());
    // TODO: set up locationMatch to test if setSear added is in array?
    // console.log(selectedOptions);
    // console.log(selectedOptions.indexOf(category.toLowerCase()) > 0);
    
    const textMatch = job.title.toLowerCase().includes(title.toLowerCase());
    const countryMatch = job.location.name.toLowerCase().includes(country.toLowerCase());
    // TODO: suss out way to cleanly get contract type
    // const typeMatch = job.type.toLowerCase().includes(type.toLowerCase());
    return locationMatch && textMatch && countryMatch;
  });
   

  // count and return the number of jobs per country
  const countryJobCount = (country) => {
    const jobCount_country = jobs.filter((job) => job.location.name.toLowerCase().includes(country.toLowerCase()));
    return `(${jobCount_country.length})`;
  }

  // count and return the number of jobs per city/location
  const cityJobCount = (location) => {
    const jobCount_city = jobs.filter((job) => job.location.name.toLowerCase().includes(location.toLowerCase()));
    return `(${jobCount_city.length})`;
  }

  // count and return the number of jobs per team
  const teamJobCount = (category) => {
    let jobCount_team;
    if(isCities && category){
      const getLength = jobs.filter((job) => job.departments[0].name.toLowerCase().includes(category.toLowerCase()) && job.location.name.toLowerCase().includes(location.toLowerCase()));
      jobCount_team = jobs.filter((job) => job.departments[0].name.toLowerCase().includes(category.toLowerCase()) && job.location.name.toLowerCase().includes(location.toLowerCase()) && (getLength.length > 0));
    } else {
      jobCount_team = jobs.filter((job) => job.departments[0].name.toLowerCase().includes(category.toLowerCase()));
    }
    return jobCount_team.length;
  }
   
  // implements very basic, simple pagination
  const paginateJobs = () => {
    let inc = pageNumber + 1;
    setCurrentSliceEnd(currentSliceEnd + 10)
    setPageNumber(inc)
  }

  // scroll back to the top when the paginated list gets long
  const scrollToTop = () => {
   jobFilterRef.current?.scrollIntoView({behavior: 'smooth'});
  }

  // aaaand showtime!

  return (
    <Section>
    <JobFilterComponent id="jobFilterComponent" ref={jobFilterRef}>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/4">
          <div className='md:sticky top-8'>
          <h2 className="text-2xl font-bold">Bekijk de banen</h2>
          {category || country || location ? <p className="my-4 font-bold text-normal">Your selected filters:</p>  : '' }
          <div className="flex pb-4">
              {/* {cateogries ? cateogries.map((category, i) => { 
                <>
                  <span className="p-2 mr-2 bg-red-500 hover:bg-red-600 text-white rounded shake">
                      <button onClick={(e) => handleRemoveFilter(e)} value={'category'}>
                      {category.charAt(0).toUpperCase() + category.slice(1)} 
                      </button>
                  </span>
                </>
             }) : null } */}
            
              {country ? 
              <span className="p-2 mr-2 bg-red-500 text-white rounded shake">
                  <button onClick={(e) => handleRemoveFilter(e)} value={'country'}>
                  {country.charAt(0).toUpperCase() + country.slice(1)}
                  </button>
              </span> : null}
              {location ? 
              <span className="p-2 mr-2 bg-red-500 text-white rounded shake">
                  <button onClick={(e) => handleRemoveFilter(e)} value={'location'}>
                  {location.charAt(0).toUpperCase() + location.slice(1)}
                  </button>
              </span> : null}
          </div>

          <div className="mb-4 relative">
            <label htmlFor="location" className="block text-gray-700 font-bold mb-2">
              Filters
            </label>
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 z-10 mt-8">
                <svg className="h-5 w-5 fill-black" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30"
                    height="30" viewBox="0 0 30 30">
                    <path
                        d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z">
                    </path>
                </svg>
            </span>
            <TextInput
              type="text"
              name="title"
              id="title"
              placeholder="Zoeken"
              className="w-3/4 px-3 pl-10 border border-gray-300 rounded-md"
              value={title}
              onChange={handleTitleChange}
            />
          </div>
           
          {!isCategory ? 
          <div className="mb-2">
            <label htmlFor="category" className="block text-gray-700 font-bold mb-2">
              Team
            </label>
            {(jobs.length > 0) ? teamCategoryJobs(category) : null}
          </div> : null }
              
          {!isCities ?
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Country</label>
            <fieldset className="mt-4">
                <div className="flex items-center pb-2">
                  <input id="netherlands" name="netherlands" value="netherlands" type="checkbox" checked={country == 'netherlands'} className="h-4 w-4 border-gray-300 text-red-600 focus:ring-white transition-all duration-50 ease-in-out" onChange={onCountryChange}/>
                  <label htmlFor="netherlands" className="ml-2 block text-sm font-medium leading-6 text-gray-900">The Netherlands {countryJobCount('netherlands')}</label>
                </div>
                {(country == 'netherlands') && (filteredJobs.length > 0) ? cityLocationsByCountry('netherlands') : null}
                <div className="flex items-center pb-2">
                  <input id="germany" name="germany" value="germany" type="checkbox" checked={country == 'germany'} className="h-4 w-4 border-gray-300  text-red-600 focus:ring-white transition-all duration-50 ease-in-out" onChange={onCountryChange}/>
                  <label htmlFor="germany" className="ml-2 block text-sm font-medium leading-6 text-gray-900">Germany {countryJobCount('germany')}</label>
                </div>
                {(country == 'germany') && (filteredJobs.length > 0) ? cityLocationsByCountry('germany') : null}
                <div className="flex items-center pb-2">
                  <input id="france" name="france" value="france" type="checkbox" checked={country == 'france'} className="h-4 w-4 border-gray-300  text-red-600 focus:ring-white transition-all duration-50 ease-in-out" onChange={onCountryChange} />
                  <label htmlFor="france" className="ml-2 block text-sm font-medium leading-6 text-gray-900">France {countryJobCount('france')}</label>
                </div>
                {(country == 'france') && (filteredJobs.length > 0) ? cityLocationsByCountry('france') : null}
            </fieldset>
          </div> 
          : null }

          <button className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-greenish text-white hover:bg-red-500 pointer-events-auto mb-8 mt-4 shake rounded" onClick={clearFilters}>Clear Filters</button>
          {pathname !== '/jobs' ?
          <Link href="/jobs" className="ml-2 inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-greenish text-white hover:bg-red-500 pointer-events-auto mb-8 mt-4 shake rounded">All Jobs</Link>
          : null }
          </div>
        </div>
        <MainList>
         
          {jobLocation ? <h1 className="text-3xl font-extrabold mb-2">Jobs in {jobLocation.charAt(0).toUpperCase() + jobLocation.slice(1)}</h1>: '' }
         
          <h2 className="text-lg font-normal mb-2">{`${filteredJobs.length} job${filteredJobs.length === 1 ? `` : `s`}`} {jobCategory ? 'in "' + jobCategory.charAt(0).toUpperCase() + jobCategory.slice(1) + '"': '' } {jobLocation ? 'in ' + jobLocation.charAt(0).toUpperCase() + jobLocation.slice(1) : '' }</h2>
          {filteredJobs.slice(currentSliceStart, currentSliceEnd).map((job, idx) => {
              return <JobCard key={idx} job={job} />
          })}
         
          <br />
         
          {(filteredJobs.length > currentSliceEnd) ? <><button onClick={(e) => paginateJobs(e)} value={pageNumber} name="paging" className="ml-2 loadMore shake inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-greenish text-white hover:bg-red-500 pointer-events-auto mb-8 mt-4 shake rounded">Load More</button>{pageNumber > 1 ? <button onClick={(e) => scrollToTop(e)} name="scrollToTop" className="ml-2 loadMore shake inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-greenish text-white hover:bg-red-500 pointer-events-auto mb-8 mt-4 shake rounded">Back to Top</button> : '' } </> : '' }
        </MainList>
      </div>
    </JobFilterComponent>
    </Section>
  );
};

export default JobSearchFilter;
