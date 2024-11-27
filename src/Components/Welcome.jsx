import React from "react";
import { motion } from "framer-motion";
import "./one.css"

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 hover:text-green-400">
    <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
  </svg>
);
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 hover:text-green-400">
    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 2.8 9.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.093 4.093 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 18.407a11.615 11.615 0 0 0 6.29 1.84" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 hover:text-green-400">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z" />
  </svg>
);
const Welcome = () => {
  return (
    <div>
      <header className="w-full py-4 px-6 flex justify-between items-center border-b border-green-700 bg-gray-800">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <img
            src="https://www.aichefmaster.com/assets/logo.jpeg"
            alt="AI Chef Master Logo"
            className="h-8 w-8 rounded-full object-cover"
          />
          <span className="font-bold text-green-400">
            AI CHEF MASTER
          </span>
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex space-x-4 text-green-400"
        >
          <a
            href="https://www.facebook.com/people/AI-Chef-Master/61557270956883/?mibextid=ZbWKwL"
            className="hover:text-white-300"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://in.linkedin.com/company/aichefmaster"
            className="hover:text-white-300"
          >
            <TwitterIcon />
          </a>
          <a
            href="https://in.linkedin.com/company/aichefmaster"
            className="hover:text-white-300"
          >
            <LinkedInIcon />
          </a>
        </motion.div>
      </header>
    </div>
  );
};

export default Welcome;
