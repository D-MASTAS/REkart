import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import firebase from 'firebase/app';
import 'firebase/auth';
import { signInWithEmailAndPassword  } from 'firebase/auth'
import { auth } from '../utils/Firebase'

const Login = () => {
    const navigate = useNavigate();
	const [value, setValue] = useState({
		"email":"",
    "password":""
	});

	const [errormsg, setErrorMsg] = useState('');
	const [submitButtonDisable, setsubmitButtonDisable] = useState(false);
  const [login, setLogin] = useState('Login');

    const handleSubmission = (e) => {
		if(!value.email || !value.password)
		{
			setErrorMsg("Please enter a valid email address or password or name");
		}
		else{
			setErrorMsg("")
		}
        setsubmitButtonDisable(true);
		signInWithEmailAndPassword(auth, value.email, value.password)
		.then(async(res)=>{
			setsubmitButtonDisable(false);
        setLogin('LoggedIn');
        navigate('/');
		}).catch(err=>{
			setsubmitButtonDisable(false);
			console.log(err)
		})
	}













  return (
    <>
    <div className="flex justify-center mt-6">
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100">
	<div className="mb-8 text-center">
		<h1 className="my-3 text-4xl font-bold">Login</h1>
		<p className="text-sm dark:text-gray-400">Login to access your account</p>
	</div>
	<form novalidate="" action="" className="space-y-12 ng-untouched ng-pristine ng-valid">
		<div className="space-y-4">
			<div>
				<label for="email" className="block mb-2 text-sm">Email address</label>
				<input type="email" name="email" id="email" placeholder="leroy@jenkins.com" onChange={(event) => 
				setValue((prev) => ({...prev, email: event.target.value}))}
				className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
			</div>
			<div>
				<div className="flex justify-between mb-2">
					<label for="password" className="text-sm">Password</label>
					<a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-400">Forgot password?</a>
				</div>
				<input type="password" name="password" id="password" placeholder="*****" onChange={(event) => 
					setValue((prev) => ({...prev, password: event.target.value}))}
				className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
			</div>
		</div>
		<div className="space-y-2">
			<div>
			<b>{errormsg}</b>
			</div>
			<div>
				<button type="button" 
				onClick={handleSubmission}
				disabled={submitButtonDisable}
				className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">{login}</button>
			</div>
			<p className="px-6 text-sm text-center dark:text-gray-400">Have an account !
				<a rel="noopener noreferrer" href="/signup" 
				className="hover:underline dark:text-violet-400 pl-1">SignUp</a>
			</p>
		</div>
	</form>
</div>
    </div>
    </>
  )
}

export default Login