export default function TTable(){
    return(
        <section className="min-h-screen bg-slate-900 text-lime-300 angledBgSlate">
            <div className="flex flex-col p-[5%]">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full sm:px-6 lg:px-8 border border-lime-900 rounded-lg px-[3%] py-[3%] lg:py-[2%]">
      <div className="mb-4">
        <h1 className="text-3xl font-extrabold">Prayer Times</h1>
        <h4 className="text-md font-thin text-slate-200">Saturday, March 11, 2023</h4>
      </div>


      <div className="p-[5%] sm:p-[4%] lg-p-[0%] sm:m-1 sm:mb-6  bg-lime-500 text-slate-900 rounded-lg mb-10">
        <h1>Next Prayer</h1>
      </div>

      <div className="overflow-hidden">
        <table className="min-w-full text-left text-sm font-light mb-4">
          <thead className=" border-b-4 border-lime-900 text-cyan-300 font-medium ">
            <tr>
              <th scope="col" className="px-6 py-4">First</th>
              <th scope="col" className="px-6 py-4">Last</th>
              <th scope="col" className="px-6 py-4">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-slate-600">
              <td className="whitespace-nowrap px-6 py-4 font-medium">Mark</td>
              <td className="whitespace-nowrap px-6 py-4">Otto</td>
              <td className="whitespace-nowrap px-6 py-4">@mdo</td>
            </tr>
            <tr className="border-b border-slate-600">
              <td className="whitespace-nowrap px-6 py-4 font-medium">Jacob</td>
              <td className="whitespace-nowrap px-6 py-4">Thornton</td>
              <td className="whitespace-nowrap px-6 py-4">@fat</td>
            </tr>
            <tr className="border-b border-slate-600">
              <td className="whitespace-nowrap px-6 py-4 font-medium">Larry</td>
              <td className="whitespace-nowrap px-6 py-4">Wild</td>
              <td className="whitespace-nowrap px-6 py-4">@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
        </section>
    )
}