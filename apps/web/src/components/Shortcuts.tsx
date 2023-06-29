export const Shortcuts = () => {
  return (
    <div className="relative mx-auto w-full px-6 py-4 md:w-3/4 sm:px-8 lg:px-8 md:py-20">
      <div className="w-full py-10">
        <div className="sm:text-center">
          <h2 className="text-4xl font-black tracking-tight text-gray-900 text-left">Shortcut to HQ teams</h2>
        </div>
        <ul role="list" className="mx-auto mt-8 grid max-w-7xl grid-cols-2 gap-2 text-sm sm:mt-8 sm:grid-cols-2 md:gap-y-2 lg:max-w-none lg:grid-cols-4">
          <li className="shortCut text-center">
              <a href="/commercial">
              <h3 className="font-bold text-gray-900 ">Commercial</h3>
              <p className="text-gray-700">Building the perfect assortment</p>
            </a>
          </li>
          <li className="shortCut text-center">
            <a href="/tech">
            <h3 className="font-bold text-gray-900 ">Tech</h3>
          <p className="text-gray-700">Expanding into new areas.</p>
          </a>
          </li>
          <li className="shortCut text-center">
            <a href="/operations">
            <h3 className="font-bold text-gray-900 ">Design</h3>
          <p className="text-gray-700">User experience and brand</p>
          </a>
          </li>
          <li className="shortCut text-center">
            <a href="/operations">
            <h3 className="font-bold text-gray-900 ">Customer Service</h3>
          <p className="text-gray-700">Going the extra mile for service</p>
          </a>
          </li>
          <li className="shortCut text-center">
            <a href="/operations">
            <h3 className="font-bold text-gray-900 ">Facilities</h3>
          <p className="text-gray-700">Creating the best workplace.</p>
          </a>
          </li>
          <li className="shortCut text-center">
            <a href="/operations">
            <h3 className="font-bold text-gray-900 ">Internships</h3>
          <p className="text-gray-700">Learn from the best.</p>
          </a>
          </li>
          <li className="shortCut text-center">
            <a href="/operations">
              <h3 className="font-bold text-gray-900 ">People</h3>
              <p className="text-gray-700">Hiring the A Team.</p>
            </a>
          </li>
          <li className="shortCut text-center">
            <a href="/operations">
              <h3 className="font-bold text-gray-900 ">Analytics</h3>
              <p className="text-gray-700">Drive the data to perfection.</p>
            </a>
          </li>
      </ul>
        <div className="mx-auto flex mt-8 justify-center">
          <a className="justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors bg-greenish text-white hover:bg-greenish-500 active:bg-greenish-500 active:text-white/80 block w-32 mb-6 text-center shake" href="/jobs">
            <span>All Jobs</span>
          </a>
        </div>
      </div>
    </div>
  )
}

