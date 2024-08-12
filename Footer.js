import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-9 mt-10">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} My Hostar. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Follow us on{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Twitter
          </a>{" "}
          |{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Facebook
          </a>{" "}
          |{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Instagram
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
