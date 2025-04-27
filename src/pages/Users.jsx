import React, { useEffect, useState } from 'react'
import TableComponent from '../components/TableComponent';
import { getUsers } from '../services/apiService';
import ModalComponent from '../components/ModalComponent';
import ErrorMessage from '../components/ErrorMessage';
const Users = () => {
    const tableHeadings = ["Name", "Email", "City", "companyName"];
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const handleRowClick=(user)=>{
        setSelectedUser(user);
        setIsModalOpen(true);
        console.log(user);
    }
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedUser(null);
    };
    useEffect(()=>{
        const fetchUsers = async()=>{
            try {
                const userdata = await getUsers();                
                setUsers(userdata);
            } catch (error) {
                setErrorMessage(`Error fetching users: ${error}`)
                console.error('Error fetching users:', error);
            }finally{
                setLoading(false)
            }
        }
        fetchUsers();
    },[])
    return (<>  {errorMessage!==null? (<ErrorMessage message={errorMessage}  />):(
        <>        
            <TableComponent tableHeadings={tableHeadings} isLoading={loading}>
                {users && users.map((user, index)=>{
                    return(<tr key={`user-row-${index}`} onClick={() => handleRowClick(user)}
                    className="cursor-pointer hover:bg-gray-100 transition">
                        <td className="px-4 py-3">{user.name}</td>
                        <td className="px-4 py-3">{user.email}</td>
                        <td className="px-4 py-3">{user.address.city}</td>
                        <td className="px-4 py-3">{user.company.name}</td>                        
                    </tr>)
                })}
            </TableComponent>
            <ModalComponent isOpen={isModalOpen} onClose={closeModal} user={selectedUser}   />
        </>)}
    </>)
}

export default Users