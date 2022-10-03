export function  addReserveRequest(id){
    return{
        type: "ADD_RESERVE_REQUEST",
        id
    }
}
export function  addReserveSuccess(itens){
    return{
        type: "ADD_RESERVE_SUCCESS",
        itens
    }
}

export function removeReserve(id){
    return{
        type: 'REMOVE_RESERVE',
        id
    }
}

export function updateAmountRequest(id, amount){
    return{
        type: 'UPDATE_RESERVE_REQUEST',
        id,
        amount
    }
}

export function updateAmountReserveSuccess(id, amount){
    return{
        type: 'UPDATE_RESERVE_SUCCESS',
        id,
        amount
    }
}