import { getUsers,register } from '../../actions/actions';
import { toast } from 'react-toastify'


export const GET_USERS_STARTED = 'GET_USERS_STARTED'
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
export const GET_USERS_ERROR = 'GET_USERS_ERROR'

export const GET_REGISTER_STARTED = 'GET_REGISTER_STARTED'
export const GET_REGISTER_SUCCESS = 'GET_REGISTER_SUCCESS'
export const GET_REGISTER_ERROR = 'GET_REGISTER_ERROR'

const usersActions = {

    getUsers: () => async (dispatch) => {
        try {
          dispatch({
            type: GET_USERS_STARTED,
          });
          let response = await getUsers()
          dispatch({
            type: GET_USERS_SUCCESS,
            payload: {
                data: response,
              },
          });
        } catch (error) {
          toast.error('ERROR GETTING USERS'+error)
          dispatch({
            type: GET_USERS_ERROR,
          });
        }
    },
    getRegsitration:(data)=>async(dispatch)=>{
      try {
        dispatch({
          type: GET_REGISTER_STARTED,
        });
        let response = await register()
        dispatch({
          type: GET_REGISTER_SUCCESS,
          payload: {
              data: response,
            },
        });
      } catch (error) {
        toast.error('ERROR REGISTRING USERS'+error)
        dispatch({
          type: GET_REGISTER_ERROR,
        });
      }
  },
};

export default usersActions;
