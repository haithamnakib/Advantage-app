import {
    GET_USERS_STARTED,
    GET_USERS_SUCCESS,
    GET_USERS_ERROR,

    GET_REGISTER_STARTED,
    GET_REGISTER_SUCCESS,
    GET_REGISTER_ERROR,

    
    GET_POLICIES_STARTED,
    GET_POLICIES_SUCCESS,
    GET_POLICIES_ERROR,

    GET_ACCOUNT_STARTED,
    GET_ACCOUNT_SUCCESS,
    GET_ACCOUNT_ERROR,
    
  } from "../actions/users";
  
  const defaultState = {
    users: [], account:[],
    isLoading: false,
  };
  
  function userReducer(state = defaultState, action) {
    switch (action.type) {
      case GET_USERS_STARTED:
        return Object.assign({}, state, {
          isLoading: true,
        });
      case GET_USERS_SUCCESS:
        return Object.assign({}, state, {
          isLoading: false,
          users: action.payload.data,
        });
      case GET_USERS_ERROR:
        return Object.assign({}, state, {
          isLoading: false,
          users: [],
        });
        case GET_REGISTER_STARTED:
          return Object.assign({}, state, {
            isLoading: true,
          });
        case GET_REGISTER_SUCCESS:
          return  Object.assign({}, state, {
            isLoading: false,
            users: action.payload.data,
          });
          case GET_REGISTER_ERROR:
            return Object.assign({}, state, {
              isLoading: false,
              users: [],
            });
            case GET_POLICIES_STARTED:
              return Object.assign({}, state, {
                isLoading: true,
              });
            case GET_POLICIES_SUCCESS:
              return Object.assign({}, state, {
                isLoading: false,
                users: action.payload.data,
              });
            case GET_POLICIES_ERROR:
              return Object.assign({}, state, {
                isLoading: false,
                users: [],
              });
              case GET_ACCOUNT_STARTED:
                return Object.assign({}, state, {
                  isLoading: true,
                });
              case GET_ACCOUNT_SUCCESS:
                return Object.assign({}, state, {
                  isLoading: false,
                  account: action.payload.data,
                });
              case GET_ACCOUNT_ERROR:
                return Object.assign({}, state, {
                  isLoading: false,
                  account: [],
                });
      default:
        return state;
    }
  }
  
  export default userReducer;