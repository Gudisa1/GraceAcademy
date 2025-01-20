import React, {useState} from 'react';

const Faq = () => {
  // State to track which FAQ is expanded
  const [expanded, setExpanded] = useState(null);

  // Function to handle toggle of an FAQ item
  const toggleFAQ = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  // FAQ data (questions and answers)
  const faqs = [
    {
      question: 'What is Grace Academy?',
      answer:
        'Grace Academy is an online learning platform designed to empower individuals with the skills and knowledge needed for a successful future.',
    },
    {
      question: 'How do I enroll?',
      answer:
        'You can enroll in courses directly through our website. Simply select a course and follow the instructions to sign up.',
    },
    {
      question: 'What courses do you offer?',
      answer:
        'We offer a wide range of courses in various fields such as technology, business, design, and personal development.',
    },
    {
      question: 'Do you offer certifications?',
      answer:
        'Yes, upon successful completion of a course, you will receive a certification from Grace Academy.',
    },
    {
      question: 'How can I contact support?',
      answer:
        "You can contact our support team through the 'Contact Us' section on our website or via email at graceacademyeth@gmail.com.",
    },
    {
      question: 'How can I get a discount?',
      answer:
        "Students can receive discounts in two ways: 1) By enrolling with a group, you will get a discount for everyone in the group. 2) If you enroll in one course, you'll receive a discount on any subsequent courses you choose to enroll in.",
    },
  ];

  return (
    <>
      <h2 className="text-3xl font-semibold text-center text-blue-900 mt-10 mb-8">
        Frequently Asked Questions
      </h2>
      <div
        className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-xl"
        id="faq"
      >
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 pb-4">
              {/* Question Header */}
              <div
                onClick={() => toggleFAQ(index)}
                className="cursor-pointer flex justify-between items-center py-4 text-xl font-semibold text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out"
              >
                <span>{faq.question}</span>
                <span className="text-xl">
                  {expanded === index ? '-' : '+'}
                </span>
              </div>

              {/* Answer Section */}
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  expanded === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="text-gray-700 text-base">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Faq;
