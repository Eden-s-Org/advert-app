import React from "react";
import { Link, useNavigate } from "react-router";
import { apiSignup } from "../../services/auth";

// const Signup = () => {
//   const handleSubmit = async (data) => {
// const payload = {
//   firstname:data.firstname,
//   lastname: data.lastname,
// };
// try{
// await apiSignup(payload);
// }catch (error) {
// console.log(error);
// }

// };

export default function SignupPage() {
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const userName = form.userName.value;
    const gender = form.gender.value;
    const email = form.email.value;
    const role = form.role.value;
    const confirmPassword = form.confirmPassword.value;
    const password = form.password.value;
    if (firstName && lastName && userName && gender && email && password && confirmPassword) {
     const userData = {firstName , lastName , userName , gender , email, role , password, confirmPassword}
      const response = await apiSignup (userData)
      // localStorage.setItem("token", response.data.token);
      // localStorage.setItem("role", response.data.user.role);
      if (response.data) {
      console.log(response.data);
        navigate("/login");
      alert(response.data.message)
      }
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded shadow w-full max-w-sm">
        <h2 className="text-center text-xl font-bold">Sign Up</h2>
        <form className="space-y-4 mt-4" onSubmit={handleSignup}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="w-full p-2 border rounded"
            required
          />

          <input
            type="text"
            name="userName"
            placeholder="userName"
            className="w-full p-2 border rounded"
            required
          />
          <div className="relative">
            <select
              name="gender"
              className="w-full p-2 border rounded"
              required
              onMouseOver={(e) => {
                const option = e.target.options[e.target.selectedIndex];
                const tooltip = document.getElementById("tooltip-custom");
                if (option.value === "Custom" && tooltip)
                  tooltip.style.display = "block";
              }}
              onMouseOut={() => {
                const tooltip = document.getElementById("tooltip-custom");
                if (tooltip) tooltip.style.display = "none";
              }}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Custom">Custom</option>
            </select>

           

            <div
              id="tooltip-custom"
              className="absolute top-full left-0 mt-1 hidden bg-black text-white text-xs px-2 py-1 rounded shadow z-10"
            >
              Are you a business or a company?
            </div>
          </div>
          <select name="role" 
          className="w-full p-2 border rounded"
          required>
          <option value="">Select Role</option>
              <option value="vendor">Vendor</option>
              <option value="customer">Customer</option>
          </select>
           
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="w-full p-2 border rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Sign Up
          </button>
        </form>
        <Link to="/login" className=" flex justify-center mt-3 font-semibold">
          <p>
            Already have an account?{" "}
            <span className="text-blue-600 underline font-bold">Login</span>
          </p>
        </Link>
      </div>
    </div>
  );
}
