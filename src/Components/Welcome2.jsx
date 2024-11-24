import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for React Router
import { Instagram, Facebook, Linkedin, Twitter } from "lucide-react"; // Import icons from lucide-react

const Welcome2 = () => {
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [submitted, setSubmitted] = useState(false); // New state to track if the user has submitted
  const navigate = useNavigate();

  const handleFeatureChange = (e) => {
    const { value, checked } = e.target;
    setSelectedFeatures((prev) =>
      checked ? [...prev, value] : prev.filter((feature) => feature !== value)
    );
  };

  const handleSubmit = () => {
    if (selectedFeatures.length === 0) {
      alert("Please select at least one feature.");
    } else {
      alert("Features selected: " + selectedFeatures.join(", "));
      setSubmitted(true); // Set submitted to true when the user clicks submit
    }
  };

  const features = [
    { title: "Personalized Recipe Suggestions", description: "Get recipes tailored to your taste and dietary preferences." },
    { title: "Easy Meal Planning", description: "Simplify your weekly meal prep with customized meal plans." },
    { title: "Grocery List Generation", description: "Automatically create shopping lists based on selected recipes." },
    { title: "Step-by-step Cooking Instructions", description: "Follow easy-to-understand cooking guides with visuals." }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen bg-green-50">
        <div className="absolute inset-0">
          <img
            src="background-ai-chef.jpg"
            alt="Delicious Food"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 md:px-8 lg:px-16 bg-black/50 text-white min-h-screen">
          <div className="max-w-4xl text-center">
            {/* Conditionally Render Content */}
            {submitted ? (
              <div className="container mx-auto px-4 py-12 md:py-16 bg-green-50 text-center">
                <h1 className="text-4xl font-bold mb-6 text-black">
                  Welcome, Saurabh! 👋<br /> Thank you for joining the <span className="text-green-500">AI Chef Master</span> waitlist!
                </h1>
                <p className="text-lg mb-8 text-black">
                  You’re now part of an exclusive group of early users!
                </p>
                <p className="text-lg mb-8 text-black">
                  We’re working hard to launch soon! Stay tuned for updates in your inbox.
                </p>
                <p className="text-lg text-black">
                  Join our community to connect with fellow food enthusiasts and share your thoughts!
                </p>

                {/* Social Media Icons and Copyright Text Visible Only After Submit */}
                <div className="flex flex-col items-center py-6 bg-green-50 mt-8">
                  <div className="flex justify-center items-center space-x-6 py-4">
                    <a href="https://www.instagram.com/aichefmaster/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800">
                      <Instagram size={32} />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61557270956883&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800">
                      <Facebook size={32} />
                    </a>
                    <a href="https://www.linkedin.com/company/aichefmaster/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800">
                      <Linkedin size={32} />
                    </a>
                    <a href="https://x.com/AIChefMaster" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800">
                      <Twitter size={32} />
                    </a>
                  </div>

                  {/* Horizontal Line and Copyright Text Inside the Same Box */}
                  <div className="w-24 mx-auto my-4 border-t-2 border-green-600"></div>
                  <p className="text-sm text-center text-gray-600">
                    &copy; 2024 Premali Kitchen Pvt. Ltd. All rights reserved.
                  </p>
                </div>
              </div>
            ) : (
              <div className="container mx-auto px-4 py-12 md:py-16 bg-green-50">
                <h1 className="text-4xl md:text-2xl lg:text-4xl font-bold mb-6 md:mb-8 leading-tight">
                  <span className="block text-black">Welcome to <span className="text-green-500">AI Chef Master</span></span>
                </h1>
                <p className="text-lg md:text-2xl lg:text-2xl mb-8 md:mb-12 text-black">
                  To tailor your experience, please select the most interesting features!
                </p>
                <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold text-center mb-8 md:mb-12 text-green-800">
                  Our Key Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
                  {/* Checkboxes on the Left */}
                  <div className="space-y-6 col-span-1 md:col-span-2 lg:col-span-2">
                    {features.map((feature, i) => (
                      <div key={i} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <label className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            value={feature.title}
                            onChange={handleFeatureChange}
                            className="mr-2"
                          />
                          <div className="flex flex-col justify-center items-center flex-grow text-center">
                            <h3 className="text-lg md:text-xl font-semibold mb-2 text-green-600">{feature.title}</h3>
                            <p className="text-sm md:text-base text-gray-600">{feature.description}</p>
                          </div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="w-72 bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
                  >
                    Submit
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Welcome2;
