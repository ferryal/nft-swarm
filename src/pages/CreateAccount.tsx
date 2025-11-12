import React, { useState } from "react";
import weeklyImage from "../assets/images/works/weekly.png";

export const CreateAccount: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Creating account:", formData);
    // Handle account creation logic here
  };

  return (
    <div className="min-h-screen bg-background-primary py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <img
              src={weeklyImage}
              alt="Space illustration"
              className="w-full h-auto rounded-20"
            />
          </div>

          {/* Right Side - Create Account Form */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Create Account
            </h1>
            <p className="text-text-secondary text-lg mb-8">
              Welcome! Enter Your Details And Start Creating, Collecting And
              Selling NFTs.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 mb-12">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                className="w-full bg-background-secondary text-text-primary px-5 py-4 rounded-20 outline-none focus:ring-2 focus:ring-accent-primary"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-background-secondary text-text-primary px-5 py-4 rounded-20 outline-none focus:ring-2 focus:ring-accent-primary"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-background-secondary text-text-primary px-5 py-4 rounded-20 outline-none focus:ring-2 focus:ring-accent-primary"
                required
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full bg-background-secondary text-text-primary px-5 py-4 rounded-20 outline-none focus:ring-2 focus:ring-accent-primary"
                required
              />
              <button type="submit" className="btn-primary w-full py-4 text-lg">
                Create Account
              </button>
            </form>

            {/* Newsletter Section */}
            <div className="bg-background-secondary rounded-20 p-8">
              <h3 className="text-2xl font-bold mb-2">
                Join Our Weekly Digest
              </h3>
              <p className="text-text-secondary mb-6">
                Get exclusive promotions & updates straight to your inbox.
              </p>
              <form className="flex gap-4" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email here"
                  className="flex-1 bg-background-primary text-text-primary px-5 py-3 rounded-20 outline-none focus:ring-2 focus:ring-accent-primary"
                />
                <button
                  type="submit"
                  className="btn-primary px-8 py-3 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
