import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext.jsx';

const useAuthDispatch = () => {
  const { dispatch } = useContext(AuthContext);
  return dispatch;
};

export default useAuthDispatch;