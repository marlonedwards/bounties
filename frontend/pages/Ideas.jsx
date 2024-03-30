import React from 'react'
import Header from '../components/Header.jsx';
import SubmitTextBox from '../components/SubmitTextBox.jsx';
import Proposal from '../components/Proposal.jsx';

export default function Ideas() {
  return (
    <div>
        <Header />
        <section>
            <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
                {/* Submit Your Idea */}
                {/* When they click this take them to submit */}
                <SubmitTextBox />
              
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Top Proposals</h1>
                {/* for loop loading all of the proposals */}
                <Proposal />
            </div>
        </section>
    </div>
  )
}


