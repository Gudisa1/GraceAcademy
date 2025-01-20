import React from 'react';

const LearningProcess = () => {
  return (
    <div className="bg-indigo-800 dark:bg-gray-800 py-16 mt-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-7xl sm:text-center mb-14">
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            How the Learning Process Works
          </p>
          <p className="mt-2 text-lg sm:text-center leading-8 text-gray-300">
            Discover our step-by-step approach to mastering skills at Grace
            Academy. Each stage is designed to ensure clarity, engagement, and
            success.
          </p>
        </div>

        {/* Steps */}
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {/* Step 1 */}
          <div>
            <div className="flex items-center text-sm font-semibold leading-6 text-blue-400">
              <svg
                viewBox="0 0 4 4"
                className="mr-4 h-1 w-1 flex-none"
                aria-hidden="true"
              >
                <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
              </svg>
              Step 1
            </div>
            <p className="mt-6 text-lg font-semibold leading-8 tracking-wide text-white">
              Learn with Video Tutorials
            </p>
            <p className="mt-1 text-base leading-7 text-gray-300 dark:text-gray-400">
              Begin your journey by consuming video tutorials and other learning
              resources curated by experts.
            </p>
          </div>

          {/* Step 2 */}
          <div>
            <div className="flex items-center text-sm font-semibold leading-6 text-blue-400">
              <svg
                viewBox="0 0 4 4"
                className="mr-4 h-1 w-1 flex-none"
                aria-hidden="true"
              >
                <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
              </svg>
              Step 2
            </div>
            <p className="mt-6 text-lg font-semibold leading-8 tracking-wide text-white">
              Join Live Sessions
            </p>
            <p className="mt-1 text-base leading-7 text-gray-300 dark:text-gray-400">
              Attend live sessions to clarify doubts and gain deeper insights
              from instructors.
            </p>
          </div>

          {/* Step 3 */}
          <div>
            <div className="flex items-center text-sm font-semibold leading-6 text-blue-400">
              <svg
                viewBox="0 0 4 4"
                className="mr-4 h-1 w-1 flex-none"
                aria-hidden="true"
              >
                <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
              </svg>
              Step 3
            </div>
            <p className="mt-6 text-lg font-semibold leading-8 tracking-wide text-white">
              Work on Projects
            </p>
            <p className="mt-1 text-base leading-7 text-gray-300 dark:text-gray-400">
              Apply your knowledge by working on real-world projects to solidify
              your learning and gauge your understanding.
            </p>
          </div>

          {/* Step 4 */}
          <div>
            <div className="flex items-center text-sm font-semibold leading-6 text-blue-400">
              <svg
                viewBox="0 0 4 4"
                className="mr-4 h-1 w-1 flex-none"
                aria-hidden="true"
              >
                <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
              </svg>
              Step 4
            </div>
            <p className="mt-6 text-lg font-semibold leading-8 tracking-wide text-white">
              Earn Your Certificate
            </p>
            <p className="mt-1 text-base leading-7 text-gray-300 dark:text-gray-400">
              Successfully complete your projects to earn a certificate that
              validates your skills and achievements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningProcess;
