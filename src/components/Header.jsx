import React from 'react'


const Header = ({changeShowModal}) => {

    const handleClickShowModal = () =>{ changeShowModal()}
  return (
  
    
      <section className='flex justify-center gap-4 bg-white shadow-sm p-2 '>
        {/* este es el menu */}
       
        <form id='noShow'>
        <div className="relative w-full">
        
        <input type="search" className=" outline-0 block p-2.5 w-full z-20 text-sm text-gray-900 bg-[#f0f2f5] rounded-r-lg  border-l-2 border  " placeholder="Busqueda (en creacion)"/>
        
        <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-[#2379BE] rounded-r-lg border  focus:ring-4 focus:outline-none ">
        
        <i className='bx bx-search-alt-2'></i>
        </button>
        </div>

  </form>



    
    <button onClick={handleClickShowModal} className='btn-primary' ><i className='bx bx-plus-medical'></i> </button>


        </section>
      

 
       

     

        

 


  )
}

export default Header