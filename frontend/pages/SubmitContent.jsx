import React from 'react'
import Header from '../components/Header.jsx';
import SubmitTextBox from '../components/Proposal.jsx';
import SubmitIdea from '../components/SubmitIdea.jsx';
import SubmitProposal from '../components/SubmitProposal.jsx';
export default function SubmitContent() {
  return (
    <div>
      <Header />
      <SubmitProposal />
      {/* 
        SUBMISSION FORM
        // have this form post to DB
        // MySQL
        
      */}
    </div>
  )
}
