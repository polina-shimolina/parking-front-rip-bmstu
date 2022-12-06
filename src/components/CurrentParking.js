import React, {useEffect, useState} from "react";
import {Col, Row, Image} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchParking, loadParking, setLoading} from "./reducerSlice";
import axios from "axios";
import {fetchParkingEl} from "./reducerSlice";

const CurrentParking = () => {
    let id = useParams()['parking_pk'];
    console.log(useParams())
    const {parking} = useSelector((state) => state.parking);
    const {loading} = useSelector((state) => state.toolkit.isLoading);
    const {parkingEl} = useSelector((state) => state.parkingEl);
    const dispatch = useDispatch();
    useEffect(() => {
        //console.log(id)
        const fetchData = async () => {
            await dispatch(fetchParkingEl(id))
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
        <>
             <div><Link to='/'>Главная</Link> / <Link to={`/parking/${parkingEl.id}`}>Парковка № {parkingEl.id}</Link><p></p></div>
             {parking && <h2 className="mb-3">Номер парковки: {parkingEl.id}</h2>}
             <Row>
                 {loading && "Загрузка..."}
                 {parking && (
                     <>
                         <Col xs="12" md="6" lg="4" xl="3">
                             <h5 className="fw-bold">Адресс:</h5>
                             <p>{parkingEl.adress}</p>
                             <h5 className="fw-bold">Стоимость:</h5>
                             <p>{parkingEl.price} рублей</p>
                             <h5 className="fw-bold">Количество мест:</h5>
                             <p>{parkingEl.places}</p>
                         </Col>
                     </>
                 )}
            </Row>
        </>
     );
 };
 export default CurrentParking;