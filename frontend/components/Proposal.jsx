import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(process.env.REACT_APP_SUPABASE_PROJECT_URL, process.env.REACT_APP_SUPABASE_KEY);

export default function Proposal() {
  const [proposals, setProposals] = useState([]);
  // const [countries, setCountries] = useState([]);

  //   useEffect(() => {
  //     getCountries();
  //   }, []);

  //   async function getCountries() {
  //     const { data } = await supabase.from("countries").select();
  //     setCountries(data);
  //  }

    useEffect(() => {
      getProposals();
    }, []);

    async function getProposals() {
      const { data } = await supabase.from("proposals").select();
      console.log(data);
      setProposals(data);
    }

  return (
      <>
        {proposals.map((proposal) => (
          <article className="rounded-xl border-2 border-gray-100 bg-white mb-8">
          <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
            <div>
              <h3 className="font-medium sm:text-lg">
                <Link to={`/expanded-proposal/${proposal.id}` }>
                  {proposal.title}
                </Link>
              </h3>

              <p className="line-clamp-2 text-sm text-gray-700">
                {proposal.description}
              </p>

              <div className="mt-2 sm:flex sm:items-center sm:gap-2">
                <div className="flex items-center gap-1 text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    />
                  </svg>

                  <p className="text-xs">{/* get rows in table */ 0 } submissions</p>
                </div>

                <span className="hidden sm:block" aria-hidden="true">&middot;</span>

                <p className="hidden sm:block sm:text-xs sm:text-gray-500">
                  Posted by {"unknown"}
                  <a href="#" className="font-medium underline hover:text-gray-700">
                    {/* email */}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </article>
        ))}
      </>
    // <ul>
    //     {proposals.map((proposal) => (
    //       <li key={proposal.id}>{proposal.title}</li>
    //     ))}
    //   </ul>
  );
  }