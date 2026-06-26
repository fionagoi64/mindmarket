import { ROUTE } from "@/constants/route";
import { Footer } from "@/layouts/Footer";
import { Navbar } from "@/layouts/navbar/Navbar";
import { AboutUsPage } from "@/pages/AboutUsPage";
import { CategoryDetailPage } from "@/pages/CategoryDetailPage";
import { CategoryListPage } from "@/pages/CategoryListPage";
import { ContactUsPage } from "@/pages/ContactUsPage";
import { HomePage } from "@/pages/HomePage";
import { IndustrySectorsPage } from "@/pages/IndustrySectorsPage";
import { InsightDetailPage } from "@/pages/InsightDetailPage";
import { InsightListPage } from "@/pages/InsightListPage";
import { NetworkPage } from "@/pages/NetworkPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { ServicesPage } from "@/pages/ServicesPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-clip">
        <Routes>
          <Route
            path={ROUTE.HOME}
            element={<HomePage />}
          />
          <Route
            path={ROUTE.SERVICES}
            element={<ServicesPage />}
          />
          <Route
            path={ROUTE.SECTOR}
            element={<IndustrySectorsPage />}
          />
          <Route
            path="/:type"
            element={<CategoryListPage />}
          />
          <Route
            path="/:type/:slug"
            element={<CategoryDetailPage />}
          />
          <Route
            path={ROUTE.NETWORK}
            element={<NetworkPage />}
          />
          <Route
            path={ROUTE.ABOUT_US}
            element={<AboutUsPage />}
          />
          <Route
            path={ROUTE.ARTICLES}
            element={<InsightListPage />}
          />
          <Route
            path={`${ROUTE.ARTICLES}/:details`}
            element={<InsightDetailPage />}
          />
          <Route
            path={ROUTE.CONTACT_US}
            element={<ContactUsPage />}
          />
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
