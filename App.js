import React, { useState } from 'react';

function Captcha() {
  const generateCaptcha = () => {
    const captchaChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
      captcha += captchaChars.charAt(Math.floor(Math.random() * captchaChars.length));
    }
    return captcha;
  };

  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [inputCaptcha, setInputCaptcha] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleChange = (event) => {
    setInputCaptcha(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputCaptcha.trim().toUpperCase() === captcha.toUpperCase()) {
      setLoginSuccess(true);
      setTimeout(() => {
        alert('Login Successful!');
        setLoginSuccess(false);
      }, 2000);
      setErrorMessage(''); 
    } else {
      setErrorMessage('Incorrect CAPTCHA!');
      setInputCaptcha('');
      setCaptcha(generateCaptcha());
    }
  };
  
  const handleRefresh = () => {
    setInputCaptcha('');
    setCaptcha(generateCaptcha());
  };

  return (
    <div style={{ background: '#000', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className={`login-container ${loginSuccess ? 'success' : ''}`}>
        <h2 style={{ marginBottom: '20px', color: '#fff', textAlign: 'center' }}>LOGIN</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="username" style={{ marginRight: '5px', color: '#fff' }}>Username:</label>
            <input type="text" id="username" name="username" required style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ddd' }} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="password" style={{ marginRight: '5px', color: '#fff' }}>Password:</label>
            <input type="password" id="password" name="password" required style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ddd' }} />
          </div>
          <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
            <label htmlFor="captcha" style={{ marginRight: '5px', color: '#fff' }}>CAPTCHA:</label>
            <span style={{ backgroundColor: '#f0f0f0', padding: '5px 10px', borderRadius: '5px', marginRight: '10px', color: '#333' }}>{captcha}</span>
            <button type="button" onClick={handleRefresh} style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '5px' }}>Refresh</button>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <input
              type="text"
              id="captcha"
              name="captcha"
              value={inputCaptcha}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ddd' }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <button type="submit" style={{ backgroundColor: '#4caf50', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>Login</button>
          </div>
          {errorMessage && <div style={{ color: 'red', marginBottom: '10px' }}>{errorMessage}</div>}
        </form>
        {loginSuccess && (
          <div style={{ textAlign: 'center' }}>
            <iframe src="https://gifer.com/embed/Vho" ></iframe><p><a href="https://gifer.com"></a></p>
                      </div>
        )}
      </div>
    </div>
  );
}

export default Captcha;
