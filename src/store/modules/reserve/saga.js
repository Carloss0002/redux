import { select,call, put, all, takeLatest} from 'redux-saga/effects'
import {addReserveSuccess, updateAmountReserveSuccess} from './actions'
import api from '../../../service/api '

function* addToReserve({ id }){
   const tripExists = yield select(
      state => state.reserve.find(itens => itens.id === id)
   )

   const myStock = yield call(api.get, `/stock/${id}`)

   const stockAmount = myStock.data.amount

   const currentStock = tripExists ? tripExists.amount : 0

   const amount = currentStock + 1

   if(amount > stockAmount){
      alert('Quantidade maxima atingida')
      return;
   }

   if(tripExists){
      
      const amount = tripExists.amount + 1

      yield put(updateAmountReserveSuccess(id, amount))

   }else{
         const response = yield call(api.get, `/trips/${id}`)
         
         const data= {
            ...response.data,
            amount: 1
         }

         yield put(addReserveSuccess(data))

        
   }

}

function* updatAmount({id, amount}){
    if(amount <= 0) return

    const myStock = yield call(api.get, `/stock/${id}`)

    const stockAmount = myStock.data.amount

    if(amount > stockAmount){
      alert('quantidade maxima atingida')
      return;
    }

    yield put(updateAmountReserveSuccess(id, amount))
}

export default all([
      takeLatest('ADD_RESERVE_REQUEST', addToReserve),
      takeLatest('UPDATE_RESERVE_REQUEST', updatAmount)
])