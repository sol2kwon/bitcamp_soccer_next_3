import React, {useState} from 'react';
import { connect, useDispatch } from 'react-redux';
import { logoutRequest } from '@/modules/auth/login';
import { Logout } from '@/components/auth/Logout';

const LogoutPage = () => {
    const [logout, setLogout] = useState(
        { userid:'', password:''} 
    )
const dispatchEvent = useDispatch()
const handleLogout = e =>{
    e.preventRqeuest()
    dispatchEvent(logoutRequest(logout));
    window.location.href='/auth/logout'
  }
  return(
      <Logout handleLogout={handleLogout} />
  );
};

const mapStateToProps = state => ({isLogout:state.logout.isLogout})
const logoutActions = {logoutRequest}
export default connect(mapStateToProps,logoutActions)(LogoutPage)
  