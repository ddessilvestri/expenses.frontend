import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { ThirdPartySignIns } from '../services/authentication';
import { useDispatch } from 'react-redux';

const ThirdPartySignInsComponent = () => {
  const dispatch = useDispatch();
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
      <GoogleLogin
        onSuccess={credentialResponse => ThirdPartySignIns(dispatch, credentialResponse.credential)}
        onError={(e) => {
          console.log('Login Failed', e);
        }}
      />
    </GoogleOAuthProvider>
  );
};

export default ThirdPartySignInsComponent;
