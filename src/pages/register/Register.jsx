import './style.css';

export default function Register() {
  return (
    <div className='login'>
      <div className='loginWrapper'>
        <div className='loginLeft'>
          <h3 className='loginLogo'>Tuenti</h3>
          <span className='loginDesc'>
            Connect with your friends and the world around you on Tuenti.
          </span>
        </div>
        <div className='loginRight'>
          <div className='loginBox'>
            <input type='text' placeholder='Username' className='loginInput' />
            <input type='text' placeholder='Email' className='loginInput' />
            <input
              type='password'
              placeholder='Password'
              className='loginInput'
            />
            <input
              type='password'
              placeholder='Password Again'
              className='loginInput'
            />
            <button className='loginButton'>Sign Up</button>
            <button className='loginRegisterButton'>Log into account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
