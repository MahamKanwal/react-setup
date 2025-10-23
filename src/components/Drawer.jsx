import React from 'react'
import { MdCancel } from "react-icons/md";
const Drawer = ({children}) => {
  return (
    <div className='w-full inset-0 min-h-screen fixed bg-black/40'>
      <div className="top-0 right-0 w-full absolute bg-white h-full max-w-[500px] duration-500 delay-200 flex flex-col p-3">
        {/* header */}
<header className='flex justify-between items-center border-b-2 border-gray pb-2'>
<h1 className='text-lg font-semibold text-gray-700'>Add Products</h1>
<button>
    <MdCancel className='text-3xl'/>
</button>
</header>

{/* render form fields passed as children */}
<div className="flex-1 overflow-y-auto">{children}</div>

{/* footer */}
<div className='flex gap-2 justify-end border-t-2 border-gray-200 pt-3'>
  <button className='rounded-lg border px-5 py-1'>Cancel</button>
  <button className='rounded-lg border px-5 py-1'>Save</button>
</div>

      </div>
    </div>
  )
}

export default Drawer
