
import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import ModalForm from './components/ModalForm'
import  axios   from 'axios'
import UserList from './components/UserList'

const BASE_URL = "https://users-crud.academlo.tech"

const DEFAULT_VALUES = {
  first_name: "",
  last_name: "",
  email:"",
  password:""
}

function App() {

  {/* Esta estado es para cambio de datos en el modal  */}
  const [isUserToUpdate, setIsUserToUpdate] = useState(null)

  {/*mostrar elementos de una lista */}
  
  const [users, setUsers] = useState([])
  
  {/* isShowModal esta en falso por que incialmente  no se quiere mostrar el fomulario */}

  const [isShowModal, setIsShowModal] = useState(false)

  {/*//? esta funcion es para mostrar el formulario dentro de una logica que se puede reutilizar  */}

  const changeShowModal =() => setIsShowModal(!isShowModal)

  const getAllUsers = () => {
    const url= BASE_URL + "/users/"
    
    axios
    .get(url)
    .then(({data}) => setUsers(data))
    .catch((err) => console.log(err))
  }

  {/*//? aca tenemos que ejecutaren el primer render por eso se le crea en un efecto */}

  useEffect( () => {
    getAllUsers()
  }, [])

   {/*//? la funcion getAllUsers es la que esta llamando a los elementos del array que estan en la base de datos que le pedimos a la funcion get despues de incertarla en el metodo post */}

  const createUser =(data, reset) => {
    const url = BASE_URL + "/users/"
    axios
    .post(url, data)
    .then(() => {
        getAllUsers(data)
        resetModalForm(reset)
      })
    .catch((err) => console.log(err))
  }

  const resetModalForm = (reset) => {
    setIsShowModal(false)
    reset(DEFAULT_VALUES)
    setIsUserToUpdate(null)

  }

    {/*eliminar usuarios */}

  const deleteUser = (id) => {
    const url = BASE_URL + `/users/${id}/`

    axios.delete(url)
    .then(() => getAllUsers())
      .catch((err) => console.log(err))
  }

  {/*editar */}

  const updateUser =(data, reset) =>{
    const url = BASE_URL + `/users/${isUserToUpdate.id}/`
    axios.patch(url, data)
    .then(() => {
      getAllUsers()
      resetModalForm(reset)
    })
      .catch((err) => console.log(err))
  }

  return (
    <main className='font-["Montserrat-wght@0"] bg-[#f0f2f5] fixed top-0 left-0 right-0 h-screen '>
      <Header changeShowModal={changeShowModal}/>
      <h3 className='p-4 text-black flex justify-center font-bold text-2xl' >Usuarios </h3>
      <ModalForm  
      isShowModal={isShowModal}
      createUser={createUser}
      isUserToUpdate={isUserToUpdate}
      updateUser={updateUser}
      resetModalForm ={resetModalForm }
        />
      
      <UserList users={users}
       deleteUser={deleteUser} 
       changeShowModal={changeShowModal}
       setIsUserToUpdate={setIsUserToUpdate}/>
    </main>
    

  )
}

export default App
