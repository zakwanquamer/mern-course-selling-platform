import { useState } from "react";

function AdminLogin(){

 const [email,setEmail] = useState("");
 const [password,setPassword] = useState("");

 const handleSubmit = (e)=>{
  e.preventDefault();
 }

 return(

  <div className="flex items-center justify-center h-screen bg-gray-900">

    <div className="bg-white p-8 rounded-xl w-96">

      <h2 className="text-2xl font-bold mb-6 text-center">
        Admin Login
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
        type="email"
        placeholder="Admin Email"
        className="w-full border p-3 rounded"
        onChange={(e)=>setEmail(e.target.value)}
        />

        <input
        type="password"
        placeholder="Password"
        className="w-full border p-3 rounded"
        onChange={(e)=>setPassword(e.target.value)}
        />

        <button className="w-full bg-black text-white p-3 rounded">
          Login
        </button>

      </form>

    </div>

  </div>

 )
}

export default AdminLogin