import axios from "axios"
import apiUrl from "../apiUrl"
import header from "../header"
import { useEffect, useState } from "react"

export default function AdminCreators() {
    const [creators, setCreators] = useState([])

    useEffect(() => {
        axios(apiUrl + "creators", header()).then(res => setCreators(res.data.response)).catch(err => console.log(err))
    }, [])

    return (
        
            <table className="w-[90%] lg:w-[95%]">
                <tbody className=" w-full rounded-lg">
                    <tr className="w-full text-center bg-blue text-white">
                        <th className="border-b-2 border-blue w-[15%] lg:w-[25%]">Name</th>
                        <th className="border-b-2 border-blue w-[15%] lg:w-[25%]">Lastname</th>
                        <th className="border-b-2 border-blue w-[15%] lg:w-[25%]">Company</th>
                        <th className="border-b-2 border-blue w-[15%] lg:w-[25%]">Active</th>
                        <th className="border-b-2 border-blue w-[15%] lg:w-[25%]"></th>
                    </tr>
                    {(creators.length !== 0) ? (
                creators?.map((each, index) =>
                  <tr className="w-full text-center " key={index}>
                    <th className="border border-slate-400 lg:w-[25%] font-normal">
                      {each.name}
                    </th>
                    <th className="border border-slate-400 lg:w-[20%] font-normal">
                      {each.lastname}
                    </th>
                    <th className="border border-slate-400 lg:w-[10%] font-normal">
                      {each.company}
                    </th>
                    <th className="border border-slate-400 lg:w-[10%] font-normal">
                    <input
                 
                  className="md:ms-10 lg:ms-14 mr-2 mt-[0] h-4 w-8 appearance-none rounded-full after:absolute after:mt-[1px] after:h-3 after:w-3 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_2px_0_rgb(0_0_0_/_7%),_0_1px_1px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s]   checked:after:absolute  checked:after:mt-[1px] checked:after:ml-[1.0625rem] hover:cursor-pointer dark:bg-neutral-400 dark:after:bg-white dark:checked:bg-blue dark:checked:after:bg-white"
                  type="checkbox"
                  role="switch"
                  defaultChecked={each.active} />
                    </th>
                    <th className="border border-slate-400 lg:w-[7%] font-normal">
                      <div className='flex justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer transition hover:scale-105">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                      </div>
                    </th>
                  </tr>
                )
              ) : (
                <tr>
                  <td colSpan={6} className="w-[200px] p-2 text-center text-[20px]">Company not found</td>
                </tr>
              )}
                </tbody>
            </table>
    )
}
