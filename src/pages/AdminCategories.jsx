import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";
import apiUrl from '../apiUrl';
import categories_actions from '../store/actions/categories';
const { read_categories, update_category, create_category, destroy_category } = categories_actions
import ModalNewCategory from '../components/ModalNewCategory';


export default function AdminCategories() {
  const allCategories = useSelector(store => store.categories.categories.response)
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [isLoading, setIsloading] = useState(true)
  console.log(allCategories)
  const [reload, setReload] = useState(false)
  const [show, setShow] = useState(false)
  const [categories, setCategories] = useState([]);
  const [newcategory, setNewCategory] = useState(false)
  const [editCategory, setEditCategory] = useState({});

  const deleteCategory = (each) => {
    setReload(!reload)
    dispatch(destroy_category({ category_id: each._id }))
  }

  const editOpen = (each) => {
    setEditCategory(each)
  }

  useEffect(() => {
    dispatch(read_categories())
      .then(() => setIsloading(false))
      .catch((error) => {
        console.log("Error fetching categories", error)
        setIsloading(false)
      })
  }, [dispatch])
  if (isLoading) {
    return <div>Loading...</div>
  }




  return (
    <>
      <div className='flex w-full h-screen'>
        <div className='lg:w-[600px]'></div>
        <div className='w-full flex flex-col items-center pt-[180px] lg:pt-[50px]'>
          <h1 className='text-[40px] font-bold'>Categories</h1>
          <div className='z-10 flex justify-center items-center max-[400px]:w-[360px] w-[400px] lg:w-[500px] bg-white pt-10'>
            <div className='bg-blue p-[10px] rounded-l-lg'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>
            <input defaultValue={allCategories.name}
              className='border-2 text-black font-normal text-[20px] leading-[22.84px] p-[10px] text-center lg:text-start w-full rounded-r-lg hover:border-blue lg:outline-0'
              type="text"
              placeholder='Search product' />
          </div>
          <div className='flex flex-col justify-center items-center w-full pt-5'>
            <div className='flex justify-end items-center w-[90%] lg:w-[95%] pr-2'>
              <h1 className='text-[20px] font-bold'>New</h1>
              <svg onClick={() => { setShow(!show), setNewCategory(true) }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ml-2 mt-1 cursor-pointer transition hover:scale-105">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <table className="w-[90%] lg:w-[95%]">
              <tbody className=" w-full rounded-lg">
                <tr className="w-full text-center bg-blue text-white">
                  <th className="border-b-2 border-blue w-[15%] lg:w-[25%]">
                    Name
                  </th>
                  <th className="border-b-2 border-blue w-[5%] lg:w-[10%]">
                    Total Products
                  </th>
                  <th className="border-b-2 border-blue w-[5%] lg:w-[7%]">
                    Actions
                  </th>
                </tr>

                {(allCategories.length !== 0) ? (
                  allCategories?.map((each, index) =>
                    <tr className="w-full text-center " key={index}>
                      <th className="border border-slate-400 lg:w-[25%] font-normal">
                        {each.name}
                      </th>

                      <th className="border border-slate-400 lg:w-[10%] font-normal">
                        {each.stock}
                      </th>
                      <th className="border border-slate-400 lg:w-[7%] font-normal">
                        <div className='flex justify-center'>
                          <svg onClick={() => { setShow(!show), editOpen(each) }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2 cursor-pointer transition hover:scale-105">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                          </svg>
                          <svg onClick={() => { deleteCategory(each) }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer transition hover:scale-105">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                          </svg>
                        </div>
                      </th>
                    </tr>
                  )
                ) : (
                  <tr>
                    <td colSpan={6} className="w-[200px] p-2 text-center text-[20px]">Products not found</td>
                  </tr>
                )}

              </tbody>
            </table>
          </div>
        </div>
        {show && <ModalNewCategory show={show} setShow={setShow} newcategory={newcategory} setNewCategory={setNewCategory} reload={reload} setReload={setReload} editCategory={editCategory} setEditCategory={setEditCategory} />}

      </div>

      

    </>
  )
}
