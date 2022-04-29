import React, {useState} from 'react';
import { connect, useDispatch } from 'react-redux';
import { loginRequest,loginCancelled,logoutRequest } from '@/modules/auth/login';
import { Login } from '@/components/auth/Login';

const LoginPage = () => {
  const [login, setLogin] = useState(
    { userid:'', password:''}
  )
  const dispatch = useDispatch()
  const onChange = e =>{
    e.preventDefault()
    const{name,value} = e.target;
    setLogin({...login,[name]:value})
  }
  const onSubmit = e =>{
    e.preventDefault()
    alert('로그인 정보: '+JSON.stringify(login))
    dispatch(loginRequest(login))
    window.location.href='/'
  }
  return (
    <Login onSubmit={onSubmit} onChange={onChange}/>
  );
};
const mapStateToProps = state => ({isLoggined:state.signin.isLoggined})
const loginActions = {loginRequest, loginCancelled,logoutRequest}
export default connect(mapStateToProps,loginActions)(LoginPage)


