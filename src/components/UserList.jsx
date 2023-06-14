import User from './User'

const UserList = ({users, deleteUser, changeShowModal, setIsUserToUpdate }) => {
    

    {/* ejecutaremos  un lista, que es un reenderizado dinamico */}
  return (

    <section className=''>

    <section className=' p-2  items-center max-w-5xl  m-auto
    grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8'>

    

        {
            users.map((user)=> <User
            key={user.id} 
            user={user} 
            deleteUser={deleteUser} 
            changeShowModal={changeShowModal}
            setIsUserToUpdate={setIsUserToUpdate} />  )
        }
    </section>
    
    </section>
  )
}

export default UserList