import { Action } from "@ngrx/store";
import { ACTION_CAMBIO_APELLIDO, ACTION_CAMBIO_NOMBRE } from "../actions/userActions";
import { IUserState } from "../states/userState.interface";

const userStateInicial: IUserState = {
    nombre: 'Miguel Ángel',
    apellido: 'De los Ríos'
}

export function userReducer(state = userStateInicial, action: Action): IUserState {


        switch (action.type) {
            case ACTION_CAMBIO_NOMBRE:
                
                return{
                    ...state,
                    nombre: action.type
                }

            case ACTION_CAMBIO_APELLIDO:
        
                return{
                    ...state,
                    nombre: action.type
                }
                
        }

        return state;
}