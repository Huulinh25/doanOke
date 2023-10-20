import React, { useState, useEffect } from 'react'; // Thêm import useState và useEffect từ react
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import axios from 'axios';
import { Link } from 'react-router-dom';
import moment from 'moment/moment';

function Class(){
    const[Class, setClass] =  useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/api/class')
        .then(res => setClass(res.data.classData.rows)) 
        .catch(err => console.error(err));
    }, [])
    console.log(Class)
    

    const handleDelete = async (id) => {
        
        try {
            await axios.delete('http://localhost:8081/api/class/' + id)
            window.location.reload()
        }
        catch(err){
            console.log(err);
        }

    }

    const ClassCount = Class.length; 

    return(
        <div className="container-fluid">
            <h1 className="h3 mb-2 text-gray-800">Danh sách lớp</h1>
    
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    
                    <Link to="/CreateClass" className='btn btn-success'>+ Thêm lớp</Link>
                    <p className='float-right' > ({ClassCount} lớp)</p>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                            <thead>
                                <tr>                               
                                    <th>Tên lớp</th>
                                    <th>Sĩ số</th>
                                    <th>Ngày tạo</th>
                                    <th>Ghi chú</th>
                                    <th>Danh sách</th>
                                    <th>Tùy chỉnh</th>
                                </tr>
                            </thead>

                            { <tbody>
                                {
                                    
                                    Class?.map((data, i) => (
                                        <tr key={i}>                                         
                                            <td>{data.class_name}</td>
                                            <td>{data.total_students}</td>
                                            <td>{moment(data.createdAt).format('DD/MM/YYYY')}</td>
                                            <td>{data.status}</td>  
                                            <td> </td>                                        
                                            <td>
                                            <Link to={`/UpdateClass/${data.id}`} className='bi bi-pencil-square mr-3'></Link>
                                                <i
                                                    className="bi bi-trash-fill text-danger"
                                                    onClick={() => handleDelete(data.id)}
                                                    style={{ cursor: 'pointer' }} 
                                                ></i>
                                            </td>
                                        </tr>
                                    ))
                                }  
                            </tbody> }
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Class;