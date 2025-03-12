import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-secondary/90 text-base-100 pb-4 pt-8">
      <div className="container">
        {/* bottom */}
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-300">
            Copyright© 2025 landing page. All Rights Reserved. develop by{" "}
            <Link
              to="https://emanagerit.com"
              target="_blank"
              className="underline"
            >
              eManager
            </Link>
          </span>
          <ul className="flex items-center gap-2"></ul>
        </div>
      </div>
    </footer>
  );
}
