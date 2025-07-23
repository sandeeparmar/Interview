import React, { useState } from "react";

const LoginPage = () => {
    const [email , setEmail] = useState('') ;
    const [error , setError] = useState('') ;

   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleSubmit = (e) => {
        e.preventDefault() ;
        if(!emailRegex.test(email)){
          setError('Invalid Email Id') ;
        }  
        else {
          setError('') ;
          alert("WelCome Back...") ;
        }
    } ;

    return (
      <form onSubmit={handleSubmit}  className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-8 w-full max-w-md">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Welcome Back</h2>
            
           <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label> 
              <input 
                type="email" 
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                placeholder="Enter your email"
              />  
               {error && <p className="text-red-500 text-sm">{error}</p>}
           </div>

           <div className="mb-6">
             <label className="block text-sm font-medium text-gray-700 mb-2">Password</label> 
             <input 
               type="password" 
               id="password"  
               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
               placeholder="Enter your password"
             />
           </div>   

            <button 
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Login
            </button>
            
            <div className="mt-6 text-center">
              <a href="#" className="text-sm text-blue-600 hover:text-blue-800 transition-colors">
                Forgot your password?
              </a>
            </div>
          </div> 
      </form>
    ) 
} ;

export default LoginPage;