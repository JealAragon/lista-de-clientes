import React from 'react'

const User = ({user, deleteUser, changeShowModal, setIsUserToUpdate }) => {

    const handleClickDelete =()=>{

        deleteUser(user.id)
    }
    const handleClickUpdate=()=>{
        changeShowModal()
        setIsUserToUpdate(user)
    }
  
    return (
    <article className='bg-[#ffffff] shadow-lg text-slate-900 rounded-md p-3 gap-3 ' >
        
        <h4 className='flex justify-center text-lg'>{user.first_name} {user.last_name}</h4>

         <div className='flex flex-row justify-between '>
        
         <div className='flex justify-between flex-col'> 
           
            <div className=' items-center flex '>
             <h4  className='text-clip'> Correo :   <span  className='text-clip'>{user.email}</span> </h4>
                
            </div>
            
            <div className='flex justify-start items-center truncate ...'>
                    <h4>Cumpleaños :</h4>
                    <span> <i className='bx bx-gift' ></i> {user.birthday || "No Fecha"  }</span>
            </div>
        </div >  

        <div className='flex  flex-row gap-3 items-center justify-center'>    
        
        <button className='btn-secundary' onClick={handleClickUpdate }><i className='bx bx-edit-alt'></i></button>
        <button  className='btn-secundary' onClick={handleClickDelete}><i className='bx bx-trash' ></i></button>  
       
        </div>

        </div>
       
    </article>
  )
}

export default User
