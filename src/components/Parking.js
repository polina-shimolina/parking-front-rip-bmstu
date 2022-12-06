import React, {useEffect, useState} from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import {Link} from "react-router-dom";
import Image from 'react-bootstrap/Image'
import {useSelector, useDispatch} from "react-redux";
import {fetchParking} from "./reducerSlice";


const Parking = () => {
    const {parking} = useSelector(state => state.parking)
    const [loading, setLoading] = useState(true)


    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            await dispatch(fetchParking())
                .then((originalPromiseResult) => {
                    console.log('RANGE FETCHED')
                    console.log(originalPromiseResult.payload)
                })
                .catch((rejectedValueOrSerializedError) => {
                    console.log('ERROR APPEARED WHILE RANGE FETCHING')
                    console.log(rejectedValueOrSerializedError)
                })
        }


        fetchData()

    }, [])


    return (
        <div>
            {loading && 'Загрузка...'}

            <div className=''>
                <div className='' style={{
                    display: 'flex', justifyContent: 'center',
                    overflow: 'auto'
                }}>
                    {parking.map(el => (
                        <div key={el.id} className=''>
                            <Card style={{width: '18rem', margin: '15px'}}>

                                <Card.Body>
                                    <Card.Title style={{textAlign: 'center'}}>{el.adress}</Card.Title>
                                    <Button variant="outline-dark"><Link to={`/parking/${el.id}`} className="nav-link px-lg-1 link-dark">Подробнее</Link></Button>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Parking