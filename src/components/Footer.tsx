// components/Footer.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import { Instagram, Facebook, MessageSquare } from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" w-full z-42 static bottom-0">
      <div className="backdrop-blur-md bg-darkGreen/10">
        <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8 ">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Logo & App Name */}
            <div className="mb-6 md:mb-0">
              <svg
                width="100"
                height="40"
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
              <p className="text-sm text-darkBrown mt-2">
                Calorie counter | Paris
              </p>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-6">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/ubod.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 px-3 py-2 rounded-md text-darkBrown hover:text-darkGreen hover:bg-lightGreen/10 transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@ubodapp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 px-3 py-2 rounded-md text-darkBrown hover:text-darkGreen hover:bg-lightGreen/10 transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.53.02C13.84 0 15.14.01 16.44.02c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/people/Ubod-calorie-counter/61572954044551/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 px-3 py-2 rounded-md text-darkBrown hover:text-darkGreen hover:bg-lightGreen/10 transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>

              {/* Suggestion Box */}
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-darkBrown">
            <a href="/privacyPolicy" className="hover:underline">
              © {currentYear} Ubod. {t("footer.rights", "All rights reserved.")}
            </a>
            <p className="mt-2">
              {t(
                "footer.suggestionText",
                "Have a suggestion? Let us know on our"
              )}
              <a
                href="https://fider.ubod.app/"
                className="text-darkGreen hover:underline ml-1"
              >
                {t("footer.feedbackPlatform", "feedback platform")}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
