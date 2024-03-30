import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as Pages from './pages';
import Header from './components/Header';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pages.LandingPage />} />
        <Route path="/submit" element={<Pages.Submit />} />
        <Route path="/ideas" element={<Pages.Ideas />} />
        <Route path="/profile" element={<Pages.Profile />} />
        <Route path="/discover" element={<Pages.Ideas />} />
        <Route path="/expanded-proposal" element={<Pages.ExpandedProposal/>}/>
        <Route path="/expanded-proposal/:proposal_id" element={<Pages.ExpandedProposal/>}/>
        <Route path="/submit-content" element={<Pages.SubmitContent/>}/>
        <Route path="/contribute" element={<Pages.Contribute/>}/>
      
      </Routes>
    </BrowserRouter>
  )
}
