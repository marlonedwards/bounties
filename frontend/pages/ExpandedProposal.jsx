import React, {useEffect, useState} from 'react'
import Header from '../components/Header.jsx';
import SubmitTextBox from '../components/SubmitTextBox.jsx';
import Proposal from '../components/Proposal.jsx';
import { Link,useParams } from 'react-router-dom';
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(process.env.REACT_APP_SUPABASE_PROJECT_URL, process.env.REACT_APP_SUPABASE_KEY);

export default function ExpandedProposal() {
  const { proposal_id } = useParams();
  const [proposal, setProposal] = useState([]);

  async function getProposal() {
    const { data } = await supabase.from("proposals").select().eq('id', proposal_id);
    setProposal(data[0]);
  }
  useEffect(() => {
    getProposal();
  }, []);


  return (
    <div>
        <Header />
        <section>
            <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
                {/* Submit Your Idea */}
                {/* get proposal by proposal ID */}
                <h1 className="text-3xl font-bold text-gray-800 mb-4">{proposal.title}</h1>
                <p>
                {proposal.description}
                </p>
                <br/>
                {/* Create form for submitting to a proposal */}
                {/* When they click this take them to submit */}
                {/* show the other submissions, ranked by date */}
                {/* link to submit */}
                <Link to="/submit-content">Submit Your Content</Link>
                <br />
                <Link to="/contribute">Contribute to This Bounty</Link>
            </div>
        </section>
    </div>
  )
}


