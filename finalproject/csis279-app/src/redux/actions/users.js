import { getUsers,createUser,getPolicies, getAccount } from '../../actions/actions';
import { toast } from 'react-toastify'
//import { createUser } from '../../../../csis279-api/services/user.service';

export const GET_ACCOUNT_STARTED = 'GET_ACCOUNT_STARTED'
export const GET_ACCOUNT_SUCCESS = 'GET_ACCOUNT_SUCCESS'
export const GET_ACCOUNT_ERROR = 'GET_ACCOUNT_ERROR'

export const GET_USERS_STARTED = 'GET_USERS_STARTED'
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
export const GET_USERS_ERROR = 'GET_USERS_ERROR'

export const GET_REGISTER_STARTED = 'GET_REGISTER_STARTED'
export const GET_REGISTER_SUCCESS = 'GET_REGISTER_SUCCESS'
export const GET_REGISTER_ERROR = 'GET_REGISTER_ERROR'

export const GET_POLICIES_STARTED = 'GET_POLICIES_STARTED'
export const GET_POLICIES_SUCCESS = 'GET_POLICIES_SUCCESS'
export const GET_POLICIES_ERROR = 'GET_POLICIES_ERROR'

const usersActions = {

  getAccount: (data) => async (dispatch) => {
    try {
      dispatch({
        type: GET_ACCOUNT_STARTED,
      });
      let response = await getAccount(data)
      dispatch({
        type: GET_ACCOUNT_SUCCESS,
        payload: {
            data: response,
          },
      });
    } catch (error) {
      toast.error('ERROR GETTING ACCOUNT'+error)
      dispatch({
        type: GET_ACCOUNT_ERROR,
      });
    }
},

  getPolicies: () => async (dispatch) => {
    try {
      dispatch({
        type: GET_POLICIES_STARTED,
      });
      let response = await getPolicies()
      dispatch({
        type: GET_POLICIES_SUCCESS,
        payload: {
            data: response,
          },
      });
    } catch (error) {
      toast.error('ERROR GETTING POLICIES'+error)
      dispatch({
        type: GET_POLICIES_ERROR,
      });
    }
},

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
    createUser:(data)=>async(dispatch)=>{
      try {
        dispatch({
          type: GET_REGISTER_STARTED,
        });
        let response = await createUser(data)
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
