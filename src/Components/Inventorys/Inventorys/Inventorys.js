import React from 'react';
import { Button, Table } from 'react-bootstrap';
import useInventorys from '../../../Hooks/useInventorys';
import './Inventory.css'

const Inventorys = () => {
    const [inventorys, setInventorys] = useInventorys();
    const handleDelete = id => {
        const confirm = window.confirm('Are you sure?');
        if (confirm) {
            const url = `http://localhost:5000/product/${id}`
                fetch(url, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        const remaining = inventorys.filter(inventorys => inventorys._id !== id);
                        setInventorys(remaining);
                    })
        }
    }
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr className='text-center'>
                        <th>Name</th>
                        <th>Photo</th>
                        <th>Quantity</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                {
                    inventorys?.map(inventorys =>
                        <tbody key={inventorys._id}>
                            <tr>
                                <td className='text-center'>{inventorys.name}</td>
                                <td className='text-center'><img className='table-img' src={inventorys.picture} alt="" /></td>
                                <td className='text-center'>{inventorys.quantity}</td>
                                <td className='text-center'><Button onClick={() => handleDelete(inventorys._id)} variant="outline-dark rounded-pill fw-bold">DELETE</Button></td>
                            </tr>
                        </tbody>
                    )
                }
            </Table>
        </div>
    );
};

export default Inventorys;