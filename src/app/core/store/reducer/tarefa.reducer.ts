import {
  CREATE_TAREFA,
  CREATE_TAREFA_FAIL,
  CREATE_TAREFA_SUCCESS,
  DELETE_TAREFA_FAIL,
  DELETE_TAREFA_SUCCESS,
  GET_TAREFA,
  GET_TAREFA_FAIL,
  GET_TAREFA_SUCCESS,
  TarefaActionsTypes,
  UPDATE_TAREFA,
  UPDATE_TAREFA_FAIL,
  UPDATE_TAREFA_SUCCESS
} from '../actions/tarefa.action';
import {Tarefa} from '../../components/add-tarefa/Tarefa';


export interface TarefaState {
  Loading: boolean;
  Loaded: boolean;
  TarefaList: Tarefa[];
}


const initializeState: TarefaState = {

		Loading: false,
		Loaded: true,
		TarefaList: [],
	};




export function TarefaReducer(state: TarefaState = initializeState,
	action: TarefaActionsTypes) {

	switch (action.type) {
	// --------------------------------------------------
	//                       GET
	// --------------------------------------------------
	case GET_TAREFA:
		return {...state, Loaded: false, Loading: true};

	case GET_TAREFA_SUCCESS:
		return {...state, Loaded: true, Loading: false, TarefaList: action.payload};

	case GET_TAREFA_FAIL:
		return {...state, Loaded: false, Loading: false};

		// --------------------------------------------------
		//                       CREATE
		// --------------------------------------------------

	case CREATE_TAREFA:
		return {...state, Loaded: true, Loading: false};

	case CREATE_TAREFA_SUCCESS:
		return {...state, Loaded: true, Loading: true};

	case CREATE_TAREFA_FAIL:
		return {...state, Loaded: false, Loading: false};

		// --------------------------------------------------
		//                      DELETE
		// --------------------------------------------------
	case DELETE_TAREFA_SUCCESS:
		return {...state, Loaded: true, Loading: false};

	case DELETE_TAREFA_FAIL:
		return {...state, Loaded: false, Loading: true};

    // --------------------------------------------------
    //                       UPDATE
    // --------------------------------------------------

    case UPDATE_TAREFA:
      return {...state, Loaded: true, Loading: false};

    case UPDATE_TAREFA_SUCCESS:
      return {...state, Loaded: true, Loading: true};

    case UPDATE_TAREFA_FAIL:
      return {...state, Loaded: false, Loading: false};




    default:
		return state;
	}
}

