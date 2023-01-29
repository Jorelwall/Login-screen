import '../styles/global.css'
import FocusAmico from '../assets/Focus-amico.svg';
import Logo from '../assets/Logo.png';
import { User, Lock} from 'phosphor-react'
import DarkModeButton from '../../src/components/DarkModeButton';
import { Link} from 'react-router-dom';

export default function SignIn() {
  return (
    <>
      <div className='w-full flex justify-end items-center'>
        <DarkModeButton />
      </div>
      <form className='w-full h-[90vh] flex flex-col justify-center items-center sm:flex-row'>
        <div>
          <img 
            src={FocusAmico}
            alt='Focus Amico'
            className='w-60 sm:w-72'  
          />
        </div>
        <fieldset>
            <div className='w-full flex justify-center items-center'>
              <img 
                src={Logo} 
                alt='Logo'
                className='w-14 h-14 sm:w-20 sm:h-20 '
              />
            </div>
            <h1 className='text-3xl text-center font-bold dark:text-indigo-100'>Welcome
            <span className='text-[#BA68C8]'> back</span></h1>
            <h2 className='mt-2 text-md text-center font-light dark:text-indigo-100'>Welcome! please login to continue</h2>
            <div className='h-72 mt-8 flex flex-col justify-between items-center'>
              <div
                id='email__container'
                className='transition duration-700 w-72 h-14 bg-indigo-100 rounded-lg flex border-2 border-slate-500 focus-within:border-slate-300 dark:bg-gray-800 dark:text-indigo-100 dark:border-gray-500 dark:focus-within:border-gray-400'>
                <label 
                  htmlFor="email"
                  className='w-8 pl-2 flex items-center'
                ><User size={25}/></label>
                <input 
                  type="email"
                  className='pl-2 text-lg text-gray-900 bg-transparent outline-none dark:text-indigo-100'
                  placeholder='email'
                  required  
                />
              </div>
              <div
                id='password__container'
                className='transition duration-700 w-72 h-14 bg-indigo-100 rounded-lg flex border-2 border-slate-500 focus-within:border-slate-300 dark:bg-gray-800 dark:text-indigo-100 dark:border-gray-500 dark:focus-within:border-gray-400'>
                <label 
                  htmlFor="password"
                  className='w-8 pl-2 flex items-center'
                ><Lock size={25}/></label>
                <input 
                  type="password"
                  className='pl-2 text-lg text-gray-900 bg-transparent outline-none dark:text-indigo-100'
                  placeholder='password'
                  required  
                />
              </div>
              <a 
                href=""
                className='w-full text-end font-medium dark:text-indigo-100'>Forgot password?</a>
              <button 
                type='submit'
                id='submitSignInButton'
                className='transition w-44 h-12 text-white font-semibold bg-[#BA68C8] rounded-lg hover:bg-[#893997]'
              >
                  Sign in
              </button>
              <Link
              to="/SignUp"
              className='text-gray-800 font-semibold underline dark:text-indigo-100'
              >Do you have not an acount?</Link>
            </div>
          </fieldset>
      </form>
    </>
  );
};