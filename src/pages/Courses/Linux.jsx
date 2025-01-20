import React, {useState, useEffect} from 'react';
import {NavLink, Route, Routes, useLocation} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

// Sidebar Component
const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-indigo-500 sticky top-20 text-white p-6">
      <h2 className="text-2xl font-bold mb-6">Linux Mastery</h2>
      <ul className="space-y-4">
        <li>
          <NavLink
            to="/courses/linux/operating-system"
            className="hover:text-indigo-300"
          >
            1. Operating System
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/courses/linux/virtual-machines"
            className="hover:text-indigo-300"
          >
            2. Virtual Machines
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/courses/linux/linux-file-system"
            className="hover:text-indigo-300"
          >
            3. Linux File System
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/courses/linux/command-line"
            className="hover:text-indigo-300"
          >
            4. Introduction to the Command Line
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/courses/linux/package-manager"
            className="hover:text-indigo-300"
          >
            5. Introduction to Package Manager
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/courses/linux/common-commands"
            className="hover:text-indigo-300"
          >
            6. Other Common Command Line Commands
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/courses/linux/vim-editor"
            className="hover:text-indigo-300"
          >
            7. VIM EDITOR
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/courses/linux/users-permissions"
            className="hover:text-indigo-300"
          >
            8. Users and Permissions in Linux
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/courses/linux/pipes-redirection"
            className="hover:text-indigo-300"
          >
            9. Pipes and Redirection in Linux
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

// Page to fetch and display content in Markdown
const MarkdownPage = ({fileName}) => {
  const [content, setContent] = useState('');
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top whenever the location changes
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const fetchMarkdownContent = async () => {
      try {
        // Fetch Markdown content from GitHub using the raw content URL
        const response = await fetch(
          `https://raw.githubusercontent.com/Gudisa1/Linux-Mastery/main/${fileName}`
        );
        const data = await response.text();
        setContent(data);
      } catch (error) {
        console.error('Error fetching the markdown content:', error);
      }
    };

    fetchMarkdownContent();
  }, [fileName]);

  return (
    <div className="w-full p-8">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

// Main Page Layout with Sidebar and Content
export const PageLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100">
        <Routes>
          <Route
            path="/operating-system"
            element={<MarkdownPage fileName="1.Operating%20System/README.md" />}
          />
          <Route
            path="/virtual-machines"
            element={<MarkdownPage fileName="2.Virtual%20Machines/README.md" />}
          />
          <Route
            path="/linux-file-system"
            element={
              <MarkdownPage fileName="3.Linux%20File%20System/README.md" />
            }
          />
          <Route
            path="/command-line"
            element={
              <MarkdownPage fileName="4.Introduction%20to%20the%20Command%20Line/README.md" />
            }
          />
          <Route
            path="/package-manager"
            element={
              <MarkdownPage fileName="5.Introduction%20to%20Package%20Manager/README.md" />
            }
          />
          <Route
            path="/common-commands"
            element={
              <MarkdownPage fileName="5.Other%20Common%20Command%20Line%20Commands/README.md" />
            }
          />
          <Route
            path="/vim-editor"
            element={<MarkdownPage fileName="6.VIM%20EDITOR/README.md" />}
          />
          <Route
            path="/users-permissions"
            element={
              <MarkdownPage fileName="7.Users%20and%20Permissions%20in%20Linux/README.md" />
            }
          />
          <Route
            path="/pipes-redirection"
            element={
              <MarkdownPage fileName="8.Pipes%20and%20Redirection%20in%20Linux/README.md" />
            }
          />
          <Route
            path="/"
            element={<MarkdownPage fileName="1.Operating%20System/README.md" />}
          />
        </Routes>
      </div>
    </div>
  );
};
