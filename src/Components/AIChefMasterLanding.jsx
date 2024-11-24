// import React, { useState, useEffect, useRef } from "react";
// import {
//   ArrowDown,
//   ChevronRight,
//   Menu,
//   X,
//   Mail,
//   ChefHat,
//   Utensils,
//   Phone,
//   MapPin,
//   Send,
// } from "lucide-react";

// const AIChefMasterLanding = () => {
//   const [activeSection, setActiveSection] = useState(0);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [name, setName] = useState("");
//   const sectionRefs = useRef([]);

//   // Updated sections without Contact (will be handled separately)
//   const sections = [
//     {
//       title: "Welcome to AI CHEF MASTER",
//       subtitle: "Turn Every Ingredient into a Masterpiece",
//       proverb: "In the kitchen of innovation, AI stirs the pot of possibility",
//       imageUrl:
//         "https://images.pexels.com/photos/2059152/pexels-photo-2059152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     },
//     {
//       title: "Smart Kitchen Dashboard",
//       subtitle: "Your Culinary Command Center",
//       proverb:
//         "A mindful chef sees ingredients; an AI chef sees infinite possibilities",
//       imageUrl:
//         "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     },
//     {
//       title: "WebDish Creator",
//       subtitle: "Transform Leftovers into Culinary Magic",
//       proverb: "Yesterday's ingredients become tomorrow's inspiration",
//       imageUrl:
//         "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     },
//     {
//       title: "Recipe Intelligence",
//       subtitle: "AI-Powered Recipe Recommendations",
//       proverb: "When wisdom meets algorithms, flavors dance in harmony",
//       imageUrl:
//         "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     },
//     {
//       title: "Sustainable Cooking",
//       subtitle: "Zero Waste, Maximum Taste",
//       proverb: "Every ingredient saved is a future dish created",
//       imageUrl:
//         "https://images.pexels.com/photos/616404/pexels-photo-616404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentPosition = window.pageYOffset;
//       const windowHeight = window.innerHeight;
//       const offset = windowHeight / 2;

//       const newActiveSection = sectionRefs.current.findIndex(
//         (ref) =>
//           ref.offsetTop <= currentPosition + offset &&
//           ref.offsetTop + ref.offsetHeight > currentPosition + offset
//       );

//       if (newActiveSection !== -1 && newActiveSection !== activeSection) {
//         setActiveSection(newActiveSection);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [activeSection]);

//   const scrollToSection = (index) => {
//     sectionRefs.current[index].scrollIntoView({ behavior: "smooth" });
//     setMenuOpen(false);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", { name, email, message });
//   };

//   return (
//     <div className="font-sans text-gray-900">
//       {/* Enhanced Header */}
//       <header className="fixed w-full top-0 z-50 bg-white shadow-md">
//         <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
//           <div className="flex items-center">
//             <ChefHat className="mr-2 text-emerald-600" />
//             <div className="text-2xl font-bold text-emerald-800">
//               AI CHEF MASTER
//             </div>
//           </div>
//           <div className="hidden md:flex space-x-6">
//             {[...sections, { title: "Contact" }].map((section, index) => (
//               <button
//                 key={index}
//                 onClick={() => scrollToSection(index)}
//                 className={`hover:text-emerald-600 transition-colors ${
//                   activeSection === index
//                     ? "text-emerald-600 font-semibold"
//                     : "text-gray-600"
//                 }`}
//               >
//                 {section.title}
//               </button>
//             ))}
//           </div>
//           <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
//             {menuOpen ? (
//               <X className="text-emerald-600" />
//             ) : (
//               <Menu className="text-emerald-600" />
//             )}
//           </button>
//         </nav>
//       </header>

//       {/* Mobile menu */}
//       {menuOpen && (
//         <div className="fixed inset-0 bg-emerald-600 z-40 flex flex-col items-center justify-center">
//           {[...sections, { title: "Contact" }].map((section, index) => (
//             <button
//               key={index}
//               onClick={() => scrollToSection(index)}
//               className="text-emerald-800 text-xl py-3 hover:text-emerald-600 transition-colors"
//             >
//               {section.title}
//             </button>
//           ))}
//         </div>
//       )}

//       {/* Main content sections */}
//       {sections.map((section, index) => (
//         <section
//           key={index}
//           ref={(el) => (sectionRefs.current[index] = el)}
//           className="min-h-screen flex flex-col justify-center items-center p-6 bg-gradient-to-br from-gray-50 to-emerald-50 mt-20 md:mt-0"
//         >
//           <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
//             <div className="flex flex-col justify-center">
//               <h2 className="text-4xl md:text-6xl font-bold text-emerald-800 mb-4">
//                 {section.title}
//               </h2>
//               <p className="text-xl md:text-2xl text-emerald-600 mb-4">
//                 {section.subtitle}
//               </p>
//               <p className="text-lg italic text-emerald-700 mb-8">
//                 "{section.proverb}"
//               </p>
//               {index === 0 && (
//                 <div className="flex space-x-4">
//                   <button className="bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition-colors flex items-center shadow-lg">
//                     Start Cooking <ChevronRight className="ml-2" />
//                   </button>
//                   <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-50 transition-colors shadow-lg border border-emerald-200">
//                     Watch Demo
//                   </button>
//                 </div>
//               )}
//             </div>
//             <div className="bg-white rounded-xl shadow-2xl overflow-hidden h-96 transform hover:scale-105 transition-transform duration-300">
//               <img
//                 src={section.imageUrl}
//                 alt={`${section.title} Feature`}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         </section>
//       ))}

//       {/* Centered Contact Section with distinct design */}
//       <section
//         ref={(el) => (sectionRefs.current[5] = el)}
//         className="min-h-screen flex flex-col justify-center items-center p-6 bg-emerald-900"
//       >
//         <div className="max-w-4xl w-full bg-white rounded-2xl shadow-2xl p-12">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-emerald-800 mb-4">
//               Get in Touch
//             </h2>
//             <p className="text-xl text-emerald-600">
//               Let's Cook Something Amazing Together
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//             <div className="space-y-8">
//               <div className="flex items-center space-x-4">
//                 <div className="bg-emerald-100 p-3 rounded-full">
//                   <MapPin className="h-6 w-6 text-emerald-600" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-gray-800">Location</h3>
//                   <p className="text-gray-600">123 AI Kitchen Street</p>
//                 </div>
//               </div>

//               <div className="flex items-center space-x-4">
//                 <div className="bg-emerald-100 p-3 rounded-full">
//                   <Phone className="h-6 w-6 text-emerald-600" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-gray-800">Phone</h3>
//                   <p className="text-gray-600">+1 (555) 123-4567</p>
//                 </div>
//               </div>

//               <div className="flex items-center space-x-4">
//                 <div className="bg-emerald-100 p-3 rounded-full">
//                   <Mail className="h-6 w-6 text-emerald-600" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-gray-800">Email</h3>
//                   <p className="text-gray-600">hello@aichefmaster.com</p>
//                 </div>
//               </div>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-6">
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//               />
//               <input
//                 type="email"
//                 placeholder="Your Email"
//                 className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//               <textarea
//                 placeholder="Your Message"
//                 className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all h-32"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 required
//               />
//               <button
//                 type="submit"
//                 className="w-full bg-emerald-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition-colors flex items-center justify-center shadow-lg"
//               >
//                 Send Message <Send className="ml-2 h-5 w-5" />
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>

//       {/* Enhanced Footer */}
//       <footer className="bg-gray-900 text-white py-16">
//         <div className="container mx-auto px-6">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
//             <div className="space-y-4">
//               <div className="flex items-center">
//                 <ChefHat className="mr-2 text-emerald-400" />
//                 <h3 className="text-xl font-bold">AI CHEF MASTER</h3>
//               </div>
//               <p className="text-gray-400">
//                 Revolutionizing kitchen intelligence with AI-powered solutions.
//               </p>
//             </div>

//             <div className="space-y-4">
//               <h3 className="text-xl font-bold">Quick Links</h3>
//               <ul className="space-y-2">
//                 {["About Us", "Features", "Pricing", "Blog"].map((item) => (
//                   <li key={item}>
//                     <a
//                       href="#"
//                       className="text-gray-400 hover:text-emerald-400 transition-colors block py-1"
//                     >
//                       {item}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="space-y-4">
//               <h3 className="text-xl font-bold">Legal</h3>
//               <ul className="space-y-2">
//                 {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
//                   (item) => (
//                     <li key={item}>
//                       <a
//                         href="#"
//                         className="text-gray-400 hover:text-emerald-400 transition-colors block py-1"
//                       >
//                         {item}
//                       </a>
//                     </li>
//                   )
//                 )}
//               </ul>
//             </div>

//             <div className="space-y-4">
//               <h3 className="text-xl font-bold">Follow Us</h3>
//               <div className="flex space-x-4">
//                 {["Twitter", "Instagram", "YouTube"].map((platform) => (
//                   <a
//                     key={platform}
//                     href="#"
//                     className="bg-gray-800 hover:bg-emerald-600 transition-colors p-3 rounded-full"
//                   >
//                     {platform}
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="mt-16 pt-8 border-t border-gray-800 text-center">
//             <p className="text-gray-400">
//               &copy; 2024 AI CHEF MASTER. All rights reserved.
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default AIChefMasterLanding;

// =================================================================================================================================================================================================================================================================================================================================


