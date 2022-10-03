import React from 'react';
import {useSelector, useDispatch} from 'react-redux'

import {removeReserve, updateAmountRequest} from '../../store/modules/reserve/actions'

import './style.css'
import { MdDelete, MdAddCircle, MdRemoveCircle } from 'react-icons/md'

function Reserva() {
    const dispatch = useDispatch()
    const reserves = useSelector(state => state.reserve)

    console.log(reserves)
    
    function handleDelet(id){
       dispatch(removeReserve(id))
    }

    function decrementAmount(trip){
         dispatch(updateAmountRequest(trip.id, trip.amount - 1))
    }
        
    function addAmount(trip){
        dispatch(updateAmountRequest(trip.id, trip.amount + 1))

    }

    return (
        <div>
            <h1 id='title'>Você solicitou {reserves.length}</h1>
            {reserves.map(itens=>(            
                    <div className="reservas" key={itens.id}> 
                        <img src={itens.image} 
                            alt={itens.title} 
                        />
                        <strong>{itens.title}</strong>

                        <div id='quantidade'>
                            <button 
                                type='button'
                                onClick={()=>decrementAmount(itens)}
                            >
                                <MdRemoveCircle size={20} color="#000" />
                            </button>

                                <span>Quantidade: {itens.amount}</span>

                            <button 
                                type='button'
                                onClick={()=>addAmount(itens)}
                            >
                                <MdAddCircle size={20} color="#000" />              
                            </button>
                        </div>

                        <button
                        type='button'
                        onClick={()=>handleDelet(itens.id)}
                        >
                        <MdDelete size={20} color="#000" />
                        </button>
                    </div>
            ))}


            <footer>
                <button type='button'>Solicitar Reservas</button>
            </footer>
        </div>
    );
}

export default Reserva;