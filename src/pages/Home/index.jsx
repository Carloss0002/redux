import React from 'react';
import {useDispatch} from 'react-redux'
import {useState, useEffect} from 'react'
import api from '../../service/api ';

import {addReserveRequest} from '../../store/modules/reserve/actions'

import './style.css'
import {MdFlightTakeoff} from 'react-icons/md'


function Home() {
    const dispatch = useDispatch()
    const[trips, setTrips] = useState([])

    useEffect(()=>{
        async function loadReserva(){
              const response = await api.get('/trips')
              
              setTrips(response.data)
        }
        loadReserva()
    }, [])

    function handleApp(id){
       dispatch(addReserveRequest(id))

       
    }

    return (
        <div>
            <h1>Faça a sua reserva</h1>
            <div className='box'>
                {trips.map(item=>{
                    return(
                       <li key={item.id}>
                         <img src={item.image} alt={item.title} />
                         <strong>{item.title}</strong>
                         <span>Status: { trips.status?'Disponivel' : 'Indisponivel'}</span>

                         <button
                           type='button'
                           onClick={()=>handleApp(item.id)}
                         >
                             <div>
                                <MdFlightTakeoff size={16} color="#fff"/>
                             </div>
                            <span>Solicitar reserva  </span>
                         </button>
                       </li>
                    )
                })}
            </div>
        </div>
    );
}

export default Home;