import React from 'react'
import Header from '../components/Header.jsx';
import SubmitTextBox from '../components/SubmitTextBox.jsx';
import Proposal from '../components/Proposal.jsx';

export default function Contribute() {
  return (
    <div>
        <Header />
        <section>
            <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
                
                {/* load proposal */}
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Original Idea</h1>
                <p>Current Bounty: {"$0"} / {"$1000"}</p>
                <p className="mb-4">Contribute</p>
                
            </div>
        </section>
    </div>
  )
}


