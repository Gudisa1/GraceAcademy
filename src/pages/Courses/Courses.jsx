import React from 'react';
import {NavLink} from 'react-router-dom';

// JSON data for courses
const coursesData = [
  //   {
  //     id: 1,
  //     title: 'Basics of Programming',
  //     image: '../../images/pro3.gif', // Replace with actual GIF path
  //     description:
  //       'Learn the fundamental concepts of programming including variables, data structures, and control flow. Perfect for beginners.',
  //   },
  //   {
  //     id: 2,
  //     title: 'Web Design',
  //     image: '../../images/w.gif', // Replace with actual GIF path
  //     description:
  //       'Turn your creative ideas into reality! Learn the art and science of web design, from layout to interactivity, with expert mentorship.',
  //   },
  //   {
  //     id: 3,
  //     title: 'Frontend Development',
  //     image: '../../images/front.gif', // Replace with actual GIF path
  //     description:
  //       'Learn how to build interactive and dynamic web pages using HTML, CSS, and JavaScript. Dive into popular frontend frameworks like React.',
  //   },
  //   {
  //     id: 4,
  //     title: 'Backend Development',
  //     image: '../../images/backend.gif', // Replace with actual GIF path
  //     description:
  //       'Master server-side programming and learn about databases, API design, and server management using languages like Node.js and Python.',
  //   },
  {
    id: 5,
    title: 'Linux Basic',
    image: '../../images/linux.gif', // Replace with actual GIF path
    description:
      'Gain hands-on experience with Linux operating systems, including shell commands, user management, and system configuration.',
  },
  //   {
  //     id: 6,
  //     title: 'DevOps',
  //     image: '../../images/devops1.gif', // Replace with actual GIF path
  //     description:
  //       'Learn about continuous integration, continuous deployment, and automating workflows to enhance collaboration between development and IT operations.',
  //   },
];

const Courses = () => {
  return (
    <div className="bg-primary mb-12" id="courses">
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl text-white font-bold mt-8 sm:mt-12 py-8 sm:py-12 font-mono">
        FREE <span className="text-indigo-500">Courses</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 mx-20">
        {coursesData.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-lg shadow-xl p-6 text-center w-full sm:w-full md:w-full lg:w-full xl:w-full"
          >
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-indigo-500">
              {course.title}
            </h2>
            <figure className="flex justify-center mt-4 mb-4">
              <img
                className="w-40 h-40 object-cover rounded-lg shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-300"
                src={course.image}
                alt={course.title}
              />
            </figure>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700">
              {course.description}
            </p>
            <button className="mt-4 px-6 py-2 bg-indigo-500 text-xs sm:text-sm md:text-base lg:text-lg text-white rounded-lg hover:bg-indigo-600 transition-colors">
              <NavLink to="/courses/linux">Start Learning</NavLink>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
