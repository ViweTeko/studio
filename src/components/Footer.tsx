"use client";

const Footer = () => {
  return (
    <footer className="bg-muted text-gray-600 p-4 text-center">
      <div className="container mx-auto">
        &copy; {new Date().getFullYear()} TrackStar Central. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
