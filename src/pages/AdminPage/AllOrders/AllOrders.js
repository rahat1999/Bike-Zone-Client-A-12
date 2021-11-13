import React, { useEffect, useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const style = {
    color: 'tomato',
    fontWeight: 600,
    textShadow: "1px 1px 1px black",
    textAlign: "center"
}

const AllOrders = () => {
    const [allOrders, setAllOrders] = useState([])
    const [control, setControl] = useState(false)
    const [orderId, setOrderId] = useState("");
    useEffect(() => {
        fetch('https://desolate-ridge-72025.herokuapp.com/allOrders')
            .then(res => res.json())
            .then(getData => setAllOrders(getData))
    }, [control])

    /*----- delete btn handeler---- */
    const handelOrder = (id) => {
        const proced = window.confirm('Are tou sure selete the Order?')
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
    /*======== handle update Status========== */
    const handleStatus = (statusId) => {
        setOrderId(statusId);

    }

    const { register, handleSubmit, } = useForm();
    const onSubmit = data => {
        fetch(`https://desolate-ridge-72025.herokuapp.com/statusUpdate/${orderId}`, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(da => {
                if (da.modifiedCount) {
                    alert('Status Update Successfully')
                    setControl(!control)
                }
                else {
                    setControl(false)
                }
            })

    };

    return (
        <div>
            <br /><br />
            <Container>
                <div className='my-5'>
                    <h6 className="text-center">Total Orderes :{allOrders?.length}</h6>
                    <h3 style={style}>Manage All Orderes</h3>
                    <hr style={{ width: "30%", margin: "auto", padding: '1.5px', }} />
                </div>
                <Table responsive striped bordered hover className="">
                    <thead>
                        <tr className='bg-secondary text-white '>
                            <th>#</th>
                            <th>Coustomer</th>
                            <th>Orders</th>
                            <th className="text-center"> Status</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allOrders.map((order, index) =>
                                <tr key={order._id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <b>{order.name}</b>
                                        <li>✉{order.email}</li>
                                        <li>Phone: {order.phone}</li>
                                        <li>Address: {order.address}</li>

                                    </td>
                                    <td>
                                        <b>🏍️ {order.productName}</b>
                                        <li>💰 {order.price}</li>
                                        <li>Order Date: {order.date}</li>
                                    </td>
                                    <td>
                                        <li>Current: <b className='text-primary'>{order.status}</b></li>
                                        <br />
                                        <form onSubmit={handleSubmit(onSubmit)}>

                                            <select {...register("status")}>
                                                <option value="shipped">Shipped</option>
                                            </select>
                                            <button type="submit"
                                                onClick={() => handleStatus(order._id)} variant="outlined">Submit</button>
                                        </form>
                                    </td>
                                    <td className="text-center">
                                        <Button
                                            onClick={() => handelOrder(order._id)} variant="danger">Delete Order</Button>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </Table>
            </Container >
        </div >
    );
};

export default AllOrders;