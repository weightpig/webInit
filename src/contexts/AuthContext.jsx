import React, { createContext, useReducer } from 'react';

// 创建 AuthContext
const AuthContext = createContext();

// 定义初始状态
const initialState = {
  username:   '',
  isLoggedIn: false,
  admId:undefined
};

// 定义 reducer 函数
const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        ...action.payload,
        isLoggedIn: true
      };
    case 'LOGOUT':
      return {
        ...state,
        username: '',
        isLoggedIn: false
      };
    default:
      return state;
  }
};

// 创建提供者组件
const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };