import { useState, useEffect } from "react";
import { Package, Purchases } from "@revenuecat/purchases-js";
import {
  RedirectToSignUp,
  SignedIn,
  SignedOut,
  useAuth,
} from "@clerk/clerk-react";
import { useTranslation } from "react-i18next";
const VITE_REVENUECAT_API_KEY = import.meta.env.VITE_REVENUECAT_API_KEY;

const PricingPage = () => {
  const { t } = useTranslation();
  const [offering, setOffering] = useState<Package[] | null>(null);
  const { userId, isLoaded } = useAuth();

  useEffect(() => {
    const getOfferings = async () => {
      try {
        await Purchases.configure({
          apiKey: VITE_REVENUECAT_API_KEY,
          appUserId: userId!,
        });

        const offerings = await Purchases.getSharedInstance().getOfferings();
        if (
          offerings.current !== null &&
          offerings.current.availablePackages.length !== 0
        ) {
          setOffering(offerings.current.availablePackages);
        }
      } catch (error) {
        console.error("Error fetching offerings:", error);
      }
    };
    getOfferings();
  }, [isLoaded]);

  const purchase = async (pkg: any) => {
    const { customerInfo } = await Purchases.getSharedInstance().purchase({
      rcPackage: pkg,
    });
    if (Object.keys(customerInfo.entitlements.active).includes("pro")) {
      console.log("Pro unlocked!");
    }
  };

  return (
    <>
      <SignedIn>
        <div className="container mx-auto px-4 mt-24 py-8">
          <h1 className="text-3xl font-bold text-center mb-8">
            {t("pricing.title")}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offering?.map((pkg) => (
              <div
                key={pkg.identifier}
                className="border p-6 rounded-lg shadow-lg"
              >
                <h2 className="text-2xl font-bold mb-4">
                  {pkg.webBillingProduct.period?.number}
                  {pkg.webBillingProduct.period?.unit}
                </h2>
                <h2 className="text-2xl font-bold mb-4">
                  {pkg.webBillingProduct.title}
                </h2>
                <p className="text-xl mb-4">
                  {pkg.webBillingProduct.price.formattedPrice} /{" "}
                  {pkg.webBillingProduct.period?.unit}
                </p>
                <button
                  onClick={() => purchase(pkg)}
                  className="bg-darkGreen text-white px-6 py-3 rounded-lg w-full"
                >
                  {t("pricing.selectPlan")}
                </button>
              </div>
            ))}
          </div>
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignUp />
      </SignedOut>
    </>
  );
};

export default PricingPage;
