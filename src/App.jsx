import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./Pages/Home"
import VoiceAgentSection from "./Pages/VoiceAgentSection"
import JourneySection from "./Pages/JourneySection"
import TrustedStartupsSection from "./Pages/TrustedStartupsSection"
import CRMPage from "./Pages/CRMPage"
import AutomationPage from "./Pages/AutomationPage"
import AnalyticsPage from "./Pages/AnalyticsPage"
import SalesTeamsPage from "./Pages/SalesTeamsPage"
import StartupsPage from "./Pages/StartupsPage"
import EnterprisePage from "./Pages/EnterprisePage"
import BlogsPage from "./Pages/BlogsPage"
import DocsPage from "./Pages/DocsPage"
import HelpCenterPage from "./Pages/HelpCenterPage"

import ChatBot from "./components/ChatBot"

import Footer from "./common/Footer"
import { ImageOff } from "lucide-react"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/VoiceAgentSection" element={<VoiceAgentSection />} />
        <Route path="/JourneySection" element={<JourneySection />} />
        <Route path="/TrustedStartupsSection" element={<TrustedStartupsSection />} />
          
         {/* Navbar */}
         <Route path="/CRM" element={<CRMPage />} />
         <Route path="/automation" element={<AutomationPage />} />
         <Route path="/analytics" element={<AnalyticsPage />} />
         <Route path='/sales-teams' element={<SalesTeamsPage />} />
         <Route path="/startups" element={<StartupsPage />} />
         <Route path="/enterprise" element={<EnterprisePage />} />
         <Route path="/blogs" element={<BlogsPage />} />
         <Route path="/docs" element={<DocsPage />} />
         <Route path="/help-center" element={<HelpCenterPage />} />

         {/* Footer */}
        <Route path="/Footer" element={<Footer />} />
        </Routes>

      {/* Chatboat */}
        < ChatBot />
    </BrowserRouter>
  )
}