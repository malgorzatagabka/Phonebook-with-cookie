import CookieConsent from 'react-cookie-consent';

const Cookie = () => {
  return (
    <>
      <CookieConsent
        cookieName="cookies"
        style={{ background: '#000', textAlign: 'center' }}
        buttonStyle={{
          border: 'none',
          borderRadius: '5px',
          background: 'rgb(143, 100, 146)',
          padding: '10px',
          color: 'rgb(255, 255, 255)',
          fontSize: '18px',
          '&:hover': {
              background: 'blueviolet',
              color:'azure',
              boxShadow: '5px 5px 5px rgb(85, 84, 84)',
          },
        }}
        expires={365}
      >
        This website uses delicious cookies.{' '}
      </CookieConsent>
    </>
  );
};

export default Cookie;