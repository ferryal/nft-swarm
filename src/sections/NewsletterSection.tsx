import React, { useState } from "react";

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <section className="bg-background-primary py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-background-secondary rounded-20 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Image Side */}
            <div className="relative h-64 md:h-auto">
              <img
                src="https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&h=800&fit=crop"
                alt="Astronaut reading"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Side */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Join Our Weekly Digest
              </h2>
              <p className="text-text-secondary text-lg mb-8">
                Get Exclusive Promotions & Updates Straight To Your Inbox
              </p>

              {/* Email Form */}
              <form onSubmit={handleSubmit} className="flex gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email here"
                  className="flex-1 bg-background-primary text-text-primary px-5 py-4 rounded-20 outline-none focus:ring-2 focus:ring-accent-primary"
                  required
                />
                <button
                  type="submit"
                  className="btn-primary px-8 py-4 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
