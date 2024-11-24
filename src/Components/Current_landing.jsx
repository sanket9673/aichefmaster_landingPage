import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for React Router
import { Menu, X, Instagram, Facebook, Linkedin, Twitter } from "lucide-react";

const AIChefMasterLanding = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [submitStatus, setSubmitStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [otp, setOtp] = useState("");
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const navigate = useNavigate(); // Initialize useNavigate for programmatic navigation

  const features = [
    {
      title: "Personalized Recipe Recommendations 👨‍🍳",
      description:
        "Tailors recipes based on individual user preferences, dietary restrictions, and available ingredients ",
    },
    {
      title: "Weekly Meal Planning 🗓️",
      description:
        "Simplifies meal planning by suggesting weekly menus that fit users' tastes and nutritional needs",
    },
    {
      title: "Automatic Grocery List Generation 🛒",
      description:
        "Automatically creates shopping lists based on selected recipes, ensuring users have all necessary ingredients",
    },
    {
      title: "Easy-to-follow Instructions With Visual Aids 📸",
      description:
        "Provides easy-to-follow instructions with visual aids to enhance the cooking experience",
    },
  ];

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsValidEmail(newEmail === "" || validateEmail(newEmail));
    setErrorMessage("");
    if (submitStatus === "success") setSubmitStatus("idle");
  };

  const handleEmailSubmit = () => {
    if (!email) {
      setErrorMessage("Please enter your email address");
      setIsValidEmail(false);
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address");
      setIsValidEmail(false);
      return;
    }

    setSubmitStatus("submitting");

    try {
      // Simulate email submission
      setTimeout(() => {
        setSubmitStatus("success");
        setEmail("");
        setEmailSubmitted(true); // Email submission successful
        setSubmitStatus("idle");
      }, 1000);
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage("Failed to submit email. Please try again.");
    }
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  // Handle OTP submission
  const handleOtpSubmit = () => {
    // Simulate OTP verification (you can add actual OTP verification logic here)
    const otpIsValid = otp === "123456"; // Example OTP check

    if (otpIsValid) {
      // Mark OTP as verified and redirect to Welcome2 component
      setIsOtpVerified(true);
      navigate("/welcome2"); // Redirect to the Welcome2 component using React Router
    } else {
      // Handle OTP failure (optional)
      alert("Invalid OTP. Please try again.");
    }
  };

  const handleContinue = () => {
    if (isOtpVerified) {
      navigate("/welcome2"); // Redirect to Welcome2 component if OTP is verified
    } else {
      alert("Please verify OTP first.");
    }
  };

  const NavLinks = ({ className = "", onClick = () => {} }) => (
    <ul className={`${className}`}>
      {["HOME", "FEATURES", "CONTACT"].map((item) => (
        <li key={item}>
          <a
            href={`#${item.toLowerCase()}`}
            className="text-green-600 hover:text-green-700 text-lg font-medium"
            onClick={onClick}
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="w-full py-4 px-4 md:px-6 bg-white border-b border-green-100 fixed top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              src="https://www.aichefmaster.com/assets/logo.jpeg"
              alt="AI Chef Master Logo"
              className="h-8 w-8 md:h-10 md:w-10 rounded-full"
            />
            <span className="font-bold text-green-600 text-lg md:text-xl">
              AI CHEF MASTER
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <NavLinks className="flex gap-8" />
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-green-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-green-100 py-4">
            <NavLinks
              className="flex flex-col items-center gap-4"
              onClick={() => setIsMenuOpen(false)}
            />
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen bg-green-50 pt-16">
        <div className="absolute inset-0">
          <img
            src="/background-ai-chef.jpg"
            alt="Delicious Food"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 md:px-8 lg:px-16 bg-black/50 text-white min-h-screen">
          <div className="max-w-4xl text-center">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 md:mb-8 leading-tight">
              <span className="block">
                Elevate Your Culinary with
              </span>
              <span className="block">
                <span className="text-green-300">AI Chef Master</span>
              </span>
            </h1>
            <p className="text-lg md:text-2xl lg:text-2xl mb-8 md:mb-12">
              Join our waitlist today and enjoy a FREE one-year subscription to AI Chef Master.
            </p>
            <div className="w-full max-w-md mx-auto">
  {/* Email Section */}
  {!emailSubmitted ? (
    <div className="mb-4">
      <input
        type="email"
        placeholder="Enter your email to join the waitlist"
        className="w-full px-4 py-3 md:py-4 rounded-lg border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800 text-lg"
        value={email}
        onChange={handleEmailChange}
      />
      {errorMessage && (
        <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
      )}
      <button
        onClick={handleEmailSubmit}
        className="w-full bg-green-600 text-white py-3 md:py-4 px-6 rounded-lg hover:bg-green-700 transition-colors text-lg font-semibold mt-4"
      >
        Join the Waitlist
      </button>
    </div>
  ) : (
    // OTP Section
    <div className="mt-4">
      <p className="text-green-500 text-sm mt-2">
        OTP has been sent. Please enter the OTP.
      </p>
      <input
        type="text"
        maxLength="6"
        placeholder="Enter 6-digit OTP"
        className="w-full px-4 py-3 md:py-4 rounded-lg border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800 text-lg"
        value={otp}
        onChange={handleOtpChange}
      />
      <button
        onClick={handleOtpSubmit}
        className="w-full bg-green-600 text-white py-3 md:py-4 px-6 rounded-lg hover:bg-green-700 transition-colors text-lg font-semibold mt-4"
      >
        Submit OTP
      </button>
    </div>
  )}

  {submitStatus === "submitting" && (
    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mx-auto mt-4"></div>
  )}
</div>

          </div>
        </div>
      </section>



      {/* Features Section */}
      <section id="features" className="py-12 md:py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12 text-green-800">
            Our Features
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-6 md:gap-8">
            {features.map((feature, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-lg md:text-xl font-semibold mb-4 text-green-600">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Save Time Section */}
      <div className="py-8 bg-green-50 text-center">
        <p className="text-lg md:text-xl lg:text-2xl mb-12 font-medium text-green-700">
          Save time, reduce food waste, and enjoy delicious meals tailored to your taste!😋
        </p>
      </div>


      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 text-green-800">
            Ready to Transform Your Cooking?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8">
            Join our community of food enthusiasts and elevate your culinary
            journey
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-green-100 py-8">
  <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-36">
      <div>
        <h3 className="font-bold text-green-600 mb-4">Follow ACM Links</h3>
        <ul className="space-y-2 text-sm md:text-base text-gray-600">
      <li className="flex items-center space-x-2">
        <Instagram size={20} className="text-green-600" />
        <a href="https://www.instagram.com/aichefmaster/" className="hover:text-green-600">
          Instagram
        </a>
      </li>
      <li className="flex items-center space-x-2">
        <Twitter size={20} className="text-green-600" />
        <a href="https://x.com/AIChefMaster" className="hover:text-green-600">
          X
        </a>
      </li>
      <li className="flex items-center space-x-2">
        <Linkedin size={20} className="text-green-600" />
        <a href="https://www.linkedin.com/company/aichefmaster/" className="hover:text-green-600">
          LinkedIn
        </a>
      </li>
      <li className="flex items-center space-x-2">
        <Facebook size={20} className="text-green-600" />
        <a href="https://www.facebook.com/profile.php?id=61557270956883&mibextid=ZbWKwL" className="hover:text-green-600">
          Facebook
        </a>
      </li>
    </ul>
      </div>
      <div>
        <h3 className="font-bold text-green-600 mb-4">Contact</h3>
        <ul className="space-y-2 text-sm md:text-base text-gray-600">
          <li>Info@aichefmaster.com </li>
        </ul>
      </div>
    </div>
    <div className="mt-8 pt-8 border-t border-green-100 text-sm md:text-base text-gray-600">
      <p>&copy; 2024 Premali Kitchen Pvt. Ltd. All rights reserved.</p>
    </div>
  </div>
</footer>

    </div>
  );
};

export default AIChefMasterLanding;
