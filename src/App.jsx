import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { SubmissionProvider } from "./context/SubmissionContext";
import { Contact, Cookies, Faq, Privacy } from "./pages/Info";
import { DoeMee } from "./pages/DoeMee";
import { Home } from "./pages/Home";
import { Idee } from "./pages/Idee";
import { Podcast } from "./pages/Podcast";
import { Ruimte } from "./pages/Ruimte";

export default function App() {
  return (
    <SubmissionProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="het-idee" element={<Idee />} />
            <Route path="lego-ruimte" element={<Ruimte />} />
            <Route path="mijn-droom" element={<Podcast />} />
            <Route path="doe-mee" element={<DoeMee />} />
            <Route path="doe-mee/:step" element={<DoeMee />} />
            <Route path="contact" element={<Contact />} />
            <Route path="veelgestelde-vragen" element={<Faq />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="cookies" element={<Cookies />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SubmissionProvider>
  );
}
