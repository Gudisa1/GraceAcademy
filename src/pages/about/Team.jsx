import React from 'react';
import './Team.css';

const teamMembers = [
  {
    name: 'Gudisa Gebi',
    role: 'Head of Curriculum',
    image: '../../../images/gudi.jpg',
    bio: 'Expert in digital education, crafting world-class courses for aspiring professionals.',
  },
  {
    name: 'Abreham Assefa',
    role: 'Public Relations Manager',
    image: '../../../images/abresh.jpg',
    bio: 'A skilled communicator strengthening Grace Academy’s relationships and enhancing its presence in the community.',
  },

  {
    name: 'Neftalem Mulu',
    role: 'Operations Manager',
    image: '../../../images/nefta.jpg',
    bio: 'Ensures seamless operations at Grace Academy with a focus on efficiency and collaboration.',
  },

  {
    name: 'Amanuel Alemayehu',
    role: 'Marketing Manager',
    image: '../../../images/aman.jpg',
    bio: 'Creative strategist driving engagement and connecting students with the Grace Academy vision.',
  },
];

const Team = () => {
  return (
    <div className="TeamSection bg-gray-50 py-16 px-6">
      <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-indigo-600 mb-12">
        Meet Our Team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="team-card bg-white shadow-lg rounded-lg p-6 text-center transform hover:scale-105 transition duration-300"
          >
            <img
              className="w-32 h-32 mx-auto rounded-full mb-4"
              src={member.image}
              alt={member.name}
            />
            <h3 className="text-xl font-semibold text-gray-800">
              {member.name}
            </h3>
            <p className="text-sm text-indigo-500 font-medium">{member.role}</p>
            <p className="text-gray-600 mt-4">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
