// app/components/Footer.js
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4 border-t border-t-teal-500/20">
      <div className="container mx-auto text-center">
        <p className="text-sm mb-5">© {new Date().getFullYear()} Numan&apos;s Portfolio. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mb-5">
          <a href="https://github.com/Numan-star" target="_blank" rel="noopener noreferrer" className="hover:text-teal-500 flex items-center space-x-2">
            <FaGithub className="w-5 h-5" />
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/muhammad-numan-618a24241/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-500 flex items-center space-x-2">
            <FaLinkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
          <a href="mailto:numan.codes@gmail.com" className="hover:text-teal-500 flex items-center space-x-2">
            <FaEnvelope className="w-5 h-5" />
            <span>Contact</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
