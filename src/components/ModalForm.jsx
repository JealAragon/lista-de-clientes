import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const ModalForm = (
    {isShowModal,
    createUser, 
    isUserToUpdate,
    updateUser,
    resetModalForm     
 }) => {

    const {register, handleSubmit, reset} = useForm()

    {/*en esta se esta funcion se llamando a travez del register lo que se va incertar en el formulario */}
    const submit = (data) => {
       if(!data.birthday) data.birthday = null
       if (isUserToUpdate) {
        updateUser(data,reset)
       } else{
        createUser(data, reset)
       }
    }

    const handleCloseModal = () =>{ 
       resetModalForm (reset)
    }

    useEffect(()=>{
        if (isUserToUpdate ) {
            reset(isUserToUpdate)            
        }

    },[isUserToUpdate])



    {/* se agregar en la section  que cubra toda la pantalla estava permitir tener un fondo oscuro */}


  return (
      
  
    <section className={`fixed top-0 left-0 right-0 h-screen bg-black/40 grid place-content-center ${isShowModal ? "visible opacity-100": "invisible opacity-0"} transition-opacity `}>

        {/* el isShowModal es la condisional de para que se muestre no no el formulario esta es una clase  de tailwind  que para motrar o no mostrar, y tiene que estar en logica  */}
        
        <form onSubmit={handleSubmit(submit)} className='bg-white w-[280px] p-4 grid gap-6 relative'>
            <h3 className='font-bold text-2xl'>{isUserToUpdate? "Editar Usuario ":"Nuevo Usuario "}</h3>
           {/* //? Nombre */}
            <div className='grid gap-2'>
                <label className='font-bold text-sm' htmlFor="">Nombre: </label>
                <input className='bg-gray-200 p-2' placeholder='Ingresa tu nombre...' type="text" 
                {...register("first_name") }
                />
            </div>
           {/* //? Apellidos */}
            <div className='grid gap-2'>
                <label className='font-bold text-sm' htmlFor="">Apellidos: </label>
                <input className='bg-gray-200 p-2' placeholder='Ingresa tus apellidos...' type="text" 
                {...register("last_name") }
                
                />
            </div>
           {/* //? Correo */}
            <div className='grid gap-2'>
                <label className='font-bold text-sm' htmlFor="">Correo: </label>
                <input className='bg-gray-200 p-2' placeholder='Ingresa tu correp...' type="email" 
                {...register("email") }
                />
            </div>
           {/* //? Contraseña*/}
            <div className='grid gap-2'>
                <label className='font-bold text-sm' htmlFor="">Contraseña: </label>
                <input className='bg-gray-200 p-2' placeholder='Ingresa tu contraseña...' type="password" 
                {...register("password") }
                />
            </div>
           {/* //? Cumpleaños*/}
            <div className='grid gap-2'>
                <label className='font-bold text-sm' htmlFor="">Cumpleaños: </label>
                <input className='bg-gray-200 p-2' placeholder='Ingresa tu Cumpleaños...' type="date" 
                {...register("birthday") }
                />
            </div>

            <button onClick={handleCloseModal} type='button' className='absolute  top-2 right-2 text-xl hover:text-secundary' > <i className='bx bx-x'></i>   </button>

            <button className=' btn-primary'>{isUserToUpdate ? "Guardar Cambios ":"Agregar nuevo usuario "} </button>
        </form>

    </section>
  )
}

export default ModalForm