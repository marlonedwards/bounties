import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SubmitTextBox() {
  const navigate = useNavigate();

  const handleInputFocus = () => {
    navigate('/submit');
  };

  return (
    <form action="" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
      <div>
        <div>
          <label htmlFor="idea" className="sr-only">
            Submit
          </label>
          <div className="relative">
            {/* I want it to show the cursor in the box before redirecting */}
            <input
              type=""
              id="idea"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Submit Your Idea"
            
              onFocus={handleInputFocus}
            />
          </div>
        </div>
      </div>
    </form>
  )
}
