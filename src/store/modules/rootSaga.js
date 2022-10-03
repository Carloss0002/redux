import {all} from 'redux-saga/effects'

import reserve from './reserve/saga'

export default function* rootSaga(){
    return yield all([
        reserve
    ])
} 