import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const DescriptionPage = () => {
    const { id } = useParams()
    const [data, setData] = useState({})

    const getData = () => {
        axios.get(`http://localhost:3000/product/${id}`)
            .then((res) => setData(res.data))
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="container my-5" >
            <h1 className="text-center mb-4" style={{ fontSize: "38px" }}>Description Page</h1>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow-sm">
                        <div className="card-body text-center">
                            <h1 className="card-title mb-4">{data.id}</h1>
                            <img src={data.image} alt="" className="img-fluid mb-4" style={{ borderRadius: '10px', maxHeight: '250px', objectFit: 'cover' }} />
                            <h3 className="card-subtitle mb-2">{data.title}</h3>
                            <h4 className="text-success mb-2">{data.price}</h4>
                            <h4 className="card-subtitle mb-4 text-muted">{data.category}</h4>
                            <p className="card-text" style={{ textAlign: 'justify', lineHeight: '1.6' }}>{data.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DescriptionPage;