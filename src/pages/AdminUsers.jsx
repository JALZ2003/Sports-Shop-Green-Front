import AdminCreators from "../components/AdminCreators"

export default function AdminUsers() {
  return (
    <div className='flex w-full h-screen'>
      <div className='lg:w-[600px]'></div>
      <div className='w-full flex flex-col items-center pt-[180px] lg:pt-[50px]'>
        <h1 className='text-[40px] font-bold'>Users</h1>
        <AdminCreators/>
      </div>
    </div>
  )
}
