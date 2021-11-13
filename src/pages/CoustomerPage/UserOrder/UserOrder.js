import React, { useEffect, useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const style = {
    color: 'tomato',
    fontWeight: 600,
    textShadow: "1px 1px 1px black",
    textAlign: "center"
}

const UserOrder = () => {
    const { user, token } = useAuth()
    const [userOrders, setUserOrder] = useState([])
    const [control, setControl] = useState(false)

    useEffect(() => {
        fetch(`https://desolate-ridge-72025.herokuapp.com/userOrder?email=${user.email}`, {
            headers: { 'authorization': `Bearer ${token}` },

        })
            .then(res => res.json())
            .then(data => setUserOrder(data))
    }, [user.email, control, token])

    /* Cancle btn handeleer */
    const handelOrder = (id) => {
        const proced = window.confirm('Are tou sure Cancle the Order?')
        if (proced) {
            fetch(`https://desolate-ridge-72025.herokuapp.com/manageOrder/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount > 0) {
                        alert(`Order No:${id}  delete successFully`)
                        setControl(!control)
                    }
                    else {
                        setControl(false)
                    }
                })
        }
    }

    return (
        <div>
            <Container>
                <br /><br />
                <div className='my-5'>
                    <h6 className="text-center">Total My Orderes :{userOrders?.length}</h6>
                    <h3 style={style}>My Orderes</h3>
                    <hr style={{ width: "30%", margin: "auto", padding: '1.5px', }} />
                </div>
                <Table responsive striped bordered hover className="">
                    <thead>
                        <tr className='bg-secondary text-white '>
                            <th>#</th>
                            <th>Name</th>
                            <th>Products</th>
                            <th className="text-center"> Status</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userOrders.map((order, index) =>
                                <tr key={order._id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <b>{order.name}</b>
                                        <p>✉{order.email}</p>
                                    </td>
                                    <td>
                                        <b>🏍️ {order.productName}
                                        </b>
                                        <br />
                                        <span>Order Date: {order.date}</span>

                                        <p>💰 {order.price}$</p>

                                    </td>
                                    <td className="text-center">
                                        <b>{order.status}</b>
                                    </td>
                                    <td className="text-center">
                                        <Button
                                            onClick={() => handelOrder(order._id)} variant="danger">Cancle Order</Button>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </Table>
            </Container >
        </div>
    );
};

export default UserOrder;