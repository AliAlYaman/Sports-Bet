import { Link, usePage } from "@inertiajs/react";
import { TrendingUp, Menu, X } from "lucide-react";
import { useState } from "react";

interface NavbarProps {
  currentRoute?: string;
}

type AuthUser = {
  id: number;
  name: string;
  email: string;
};

type InertiaProps = {
  auth: {
    user: AuthUser | null;
  };
};

export default function Navbar({ currentRoute }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { props } = usePage<InertiaProps>();
  const user = props.auth.user;

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "Football", href: "/football" },
    { name: "Basketball", href: "/basketball" },
    { name: "Baseball", href: "/baseball" },
    { name: "Hockey", href: "/hockey" },
    { name: "Tennis", href: "/tennis" },
    { name: "Soccer", href: "/soccer" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-slate-900 border-b border-slate-800 w-full z-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <TrendingUp className="h-6 w-6 text-blue-400" />
              <span className="text-white text-xl font-bold">BetGenius</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6 flex-1 justify-center">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  currentRoute === item.href
                    ? "text-blue-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {user ? (
              <>
                <span className="text-gray-300 px-3 py-2 text-sm font-medium">
                  Hello, {user.name}
                </span>
                <Link
                  href="/logout"
                  method="post"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Log out
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  Sign In
                </Link>
                <Link
                  href="/register"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Join Now
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-300 hover:text-white p-2"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800 border-t border-slate-700">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                  currentRoute === item.href
                    ? "text-blue-400 bg-slate-700"
                    : "text-gray-300 hover:text-white hover:bg-slate-700"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="border-t border-slate-700 pt-4 pb-3">
              {user ? (<div className="flex flex-col space-y-2 px-3">
                <span
                  className="text-gray-300 hover:text-white py-2 text-base font-medium transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Hello, {user.name}
                </span>
                <Link
                  href="/logout"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-base font-medium transition-colors duration-200 text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Log out
                </Link>
              </div>) : (<div className="flex flex-col space-y-2 px-3">
                <Link
                  href="/login"
                  className="text-gray-300 hover:text-white py-2 text-base font-medium transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  href="/register"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-base font-medium transition-colors duration-200 text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Join Now
                </Link>
              </div>)}
              
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
