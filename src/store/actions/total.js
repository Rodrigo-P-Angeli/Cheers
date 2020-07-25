/* eslint-disable prettier/prettier */
/* eslint-disable semi */

import { SET_TOTAL, SET_ITEM_TOTAL } from '../ActionsTypes'

export const setTotal = total => {
    return {
        type: SET_TOTAL,
        payload: total,
    }
}

export const setItemTotal = (id, qt, total) => {
    return {
        type: SET_ITEM_TOTAL,
        payload: {
            id,
            qt,
            total,
        },
    }
}

export const calcTotalItem = (id, qt, valor) => {
    const total = qt * valor
    return (dispatch) => {
        dispatch(setItemTotal(id, qt, total))
    }
}


export const setless = ceverjasID => {
    const cervejas = [...this.state.cervejas]
    cervejas.forEach(cerveja => {
        if (cerveja.id === ceverjasID) {
            if (cerveja.count > 0) {
                cerveja.count = cerveja.count - 1
                cerveja.total = cerveja.count * cerveja.price
                this.setTotal()
            }
        }
    }
    )
    this.setState({ cervejas })
}

export const onChanged = (ceverjasID, text) => {
    //Esta função deixa o usuário digitar apenas números inteiros.
    let newText = '';
    let numbers = '0123456789';
    const cervejas = [...this.state.cervejas]
    for (var i = 0; i < text.length; i++) {
        if (numbers.indexOf(text[i]) > -1) {
            newText = newText + text[i];
        }
    }
    cervejas.forEach(cerveja => {
        if (cerveja.id === ceverjasID) {
            cerveja.count = newText * 1
            cerveja.total = cerveja.count * cerveja.price
            this.setTotal()
        }
    })
    this.setState({ cervejas })
}

export const setmore = ceverjasID => {
    const cervejas = [...this.state.cervejas]
    cervejas.forEach(cerveja => {
        if (cerveja.id === ceverjasID) {
            cerveja.count = cerveja.count + 1
            cerveja.total = cerveja.count * cerveja.price
            this.setTotal()
        }
    })
    this.setState({ cervejas })
}

export const setTotal2 = () => {
    const cervejas = [...this.state.cervejas]
    let total = 0
    cervejas.forEach(cerveja => {
        total = cerveja.total + total
    })
    this.setState({ Total: total })
}