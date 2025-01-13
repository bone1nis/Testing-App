import { lazy, ReactElement } from "react";
import { BrowserRouter, Route, Routes } from "react-router";

import AppHeader from "../appHeader/AppHeader";
import AppFooter from "../appFooter/AppFooter";

const AgeVerificationBanner = lazy(
  () => import("../ageVerigicationBanner/AgeVerificationBanner")
);
const CookieBanner = lazy(() => import("../cookieBanner/cookieBanner"));

const MainPage = lazy(() => import("../../pages/mainPage/MainPage"));
const AgeVerificationPage = lazy(
  () => import("../../pages/ageVerificationPage/AgeVerification")
);
const GamePage = lazy(() => import("../../pages/gamePage/GamePage"));
const PrivacyPolicyPage = lazy(
  () => import("../../pages/privacyPolicyPage/PrivacyPolicyPage")
);
const CookiePrivacyPage = lazy(
  () => import("../../pages/cookiePrivacyPage/CookiePrivacyPage")
);
const TermsAndConditionsPage = lazy(
  () => import("../../pages/TermsAndConditionsPage/TermsAndConditionsPage")
);
const BlogPage = lazy(() => import("../../pages/blogPage/BlogPage"));

const App = (): ReactElement => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="app">
        <AgeVerificationBanner />
        <CookieBanner />
        <AppHeader />
        <main className="main">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/age-verification" element={<AgeVerificationPage />} />
            <Route path="/game" element={<GamePage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/cookie-privacy" element={<CookiePrivacyPage />} />
            <Route
              path="/terms-and-conditions"
              element={<TermsAndConditionsPage />}
            />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
        </main>
        <AppFooter />
      </div>
    </BrowserRouter>
  );
};

export default App;
