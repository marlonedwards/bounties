import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(process.env.REACT_APP_SUPABASE_PROJECT_URL, process.env.REACT_APP_SUPABASE_KEY);

export default function SubmitProposal() {
  const [link, setLink] = useState('');
  const [email, setEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [walletAddress, setWalletAddress] = useState('');

  async function submit(e) {
    e.preventDefault();
    console.log(e);
    try {
      const { data, error } = await supabase
        .from('proposals')
        .insert([
          { description: link, title: link}
        ]);
      if (error) throw error;
      alert('Proposal submitted successfully!');
      // Reset form fields after successful submission
      setLink('');
      setEmail('');
      setPaymentMethod('');
      setWalletAddress('');
    } catch (error) {
      console.error('Error submitting proposal:', error.message);
      alert('Error submitting proposal. Please try again.');
    }
  }

  return (
    <div>
      <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <p className="max-w-xl text-lg">
                Submit the link to your content to complete this proposal.
              </p>
            </div>
            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form onSubmit={submit} className="space-y-4">
                <div>
                  <label htmlFor="link" className="sr-only">Link to your content</label>
                  <input
                    type="text"
                    id="link"
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Link to your content"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <p>If selected, how would you like to be paid.</p>
                  {/* drop-down with PayPal, Stripe, or cryptocurrency */}
                  <select
                    name="paymentMethod"
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mt-1.5 rounded-lg border-gray-300 text-gray-700 sm:text-sm"
                  >
                    <option value="cryptocurrency">Cryptocurrency</option>
                    <option value="paypal">PayPal</option>
                    <option value="stripe">Stripe</option>
                  </select>
                </div>
                <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                  <div>
                    <label htmlFor="eth" className="sr-only">ETH Wallet Address</label>
                    <input
                      type="text"
                      id="eth"
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="ETH Wallet Address"
                      value={walletAddress}
                      onChange={(e) => setWalletAddress(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    Submit Proposal
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

}
