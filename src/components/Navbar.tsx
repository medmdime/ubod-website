import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Home, HeadphonesIcon, Menu, X, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const languages = [
    { code: "en", name: "English" },
    { code: "fr", name: "Français" },
    { code: "es", name: "Español" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleLangMenu = () => setIsLangMenuOpen(!isLangMenuOpen);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLangMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="backdrop-blur-md shadow-lg bg-darkGreen/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <NavLink to="/">
                <svg
                  width="100"
                  height="96"
                  viewBox="0 0 267 96"
                  fill="black"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 34.5481H8.40103V64.8748C8.40103 77.3726 18.5134 87.5887 31.0008 87.5887C43.4883 87.5887 53.6007 77.3622 53.6007 64.8748V34.5481H62.0017V65.103C62.0017 82.2577 48.1452 96.0001 30.9905 96.0001C13.8358 96.0001 0 82.0295 0 64.8748V34.5481Z"
                    fill="#658c5e"
                  />
                  <path
                    d="M98.8209 33.8738C89.9635 33.8738 81.8944 37.6283 76.2211 43.6335V0H67.8201V64.8746C67.8201 82.019 81.6662 95.9999 98.8209 95.9999C115.976 95.9999 129.946 82.019 129.946 64.8746C129.946 47.7303 116.079 33.8738 98.8209 33.8738ZM98.8209 87.5989C86.3335 87.5989 76.2211 77.3725 76.2211 64.885C76.2211 52.3975 86.3335 42.2852 98.8209 42.2852C111.308 42.2852 121.535 52.3975 121.535 64.885C121.535 77.3725 111.422 87.5989 98.8209 87.5989Z"
                    fill="#658c5e"
                  />
                  <path
                    d="M197.974 64.8746C197.974 82.0293 184.118 95.9999 166.963 95.9999C149.808 95.9999 135.838 82.0293 135.838 64.8746C135.838 47.7199 149.808 33.8634 166.963 33.8634C184.118 33.8634 197.974 47.7199 197.974 64.8746ZM189.563 64.8746C189.563 52.3768 179.451 42.2748 166.963 42.2748C154.476 42.2748 144.249 52.3872 144.249 64.8746C144.249 77.3621 154.476 87.5885 166.963 87.5885C179.451 87.5885 189.563 77.3621 189.563 64.8746Z"
                    fill="#658c5e"
                  />
                  <path
                    d="M257.59 0V31.1046H257.611V42.3993C251.917 36.3734 243.869 32.6396 234.991 32.6396C217.846 32.6396 203.886 46.4857 203.886 63.6404C203.886 80.7951 217.846 94.7657 234.991 94.7657C252.135 94.7657 266.012 80.7847 266.012 63.6404V0H257.59ZM234.991 86.3543C222.503 86.3543 212.287 76.1279 212.287 63.6404C212.287 51.1529 222.493 41.0406 234.991 41.0406C247.488 41.0406 257.611 51.1322 257.611 63.6404C257.611 76.1486 247.499 86.3543 234.991 86.3543Z"
                    fill="#658c5e"
                  />
                </svg>
              </NavLink>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "text-darkGreen"
                      : "text-darkBrown hover:text-darkGreen hover:bg-lightGreen/10"
                  }`
                }
              >
                <Home size={18} />
                <span>{t("nav.home")}</span>
              </NavLink>
              <NavLink
                to="/support"
                className={({ isActive }) =>
                  `flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "text-darkGreen"
                      : "text-darkBrown hover:text-darkGreen hover:bg-lightGreen/10"
                  }`
                }
              >
                <HeadphonesIcon size={18} />
                <span>{t("nav.support")}</span>
              </NavLink>

              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={toggleLangMenu}
                  className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-darkBrown hover:text-darkGreen hover:bg-lightGreen/10 transition-colors"
                >
                  <Globe size={18} />
                </button>

                {isLangMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => changeLanguage(lang.code)}
                          className="block w-full text-left px-4 py-2 text-sm text-darkBrown hover:bg-lightGreen/10"
                        >
                          {lang.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-darkBrown hover:text-darkGreen hover:bg-lightGreen/10 transition-colors"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive
                    ? "text-darkGreen bg-lightGreen/20"
                    : "text-darkBrown hover:text-darkGreen hover:bg-lightGreen/10"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              <span className="flex items-center space-x-2">
                <Home size={18} />
                <span>{t("nav.home")}</span>
              </span>
            </NavLink>
            <NavLink
              to="/support"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive
                    ? "text-darkGreen bg-lightGreen/20"
                    : "text-darkBrown hover:text-darkGreen hover:bg-lightGreen/10"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              <span className="flex items-center space-x-2">
                <HeadphonesIcon size={18} />
                <span>{t("nav.support")}</span>
              </span>
            </NavLink>

            {/* Mobile Language Selector */}
            <div className="px-3 py-2">
              <div className="font-medium text-darkBrown mb-2">Language</div>
              <div className="space-y-1">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      changeLanguage(lang.code);
                      setIsOpen(false);
                    }}
                    className="block w-full text-left py-2 text-sm text-darkBrown hover:text-darkGreen hover:bg-lightGreen/10 rounded-md transition-colors"
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
