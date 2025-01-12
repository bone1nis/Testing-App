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
    <BrowserRouter>
      <div className="app">
        <AgeVerificationBanner />
        <CookieBanner />
        <AppHeader />
        <main className="main">
          <Routes>
            <Route path="/Testing-App/" element={<MainPage />} />
            <Route path="/Testing-App/age-verification" element={<AgeVerificationPage />} />
            <Route path="/Testing-App/game" element={<GamePage />} />
            <Route path="/Testing-App/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/Testing-App/cookie-privacy" element={<CookiePrivacyPage />} />
            <Route
              path="/Testing-App/terms-and-conditions"
              element={<TermsAndConditionsPage />}
            />
            <Route path="/Testing-App/blog" element={<BlogPage />} />
          </Routes>
        </main>
        <AppFooter />
      </div>
    </BrowserRouter>
  );
};

export default App;
