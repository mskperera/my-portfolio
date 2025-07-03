import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
   <footer className="bg-gradient-to-r from-sky-600 to-sky-800 dark:from-gray-900 dark:to-gray-800 text-white py-6">

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-bold mb-4">About</h3>
            <p>Susantha Perera - Full-Stack Developer passionate about building impactful solutions.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-yellow-500">About Me</Link></li>
              <li><Link href="/skills" className="hover:text-yellow-500">Skills</Link></li>
              <li><Link href="/projects" className="hover:text-yellow-500">Projects</Link></li>
              <li><Link href="/contact" className="hover:text-yellow-500">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Stay Updated</h3>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-l-md border-none focus:outline-none flex-grow text-gray-800"
              />
              <button
                type="submit"
                className="bg-yellow-500 text-white p-2 rounded-r-md hover:bg-yellow-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p>© 2025 Susantha Perera. All Rights Reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <Link href="https://www.linkedin.com/in/susantha-perera-11b494119/" target="_blank" className="relative group">
              <Image src="/images/icons/linkedin.png" alt="LinkedIn" width={32} height={32} className="hover:opacity-80 transition-opacity duration-300" />
              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 text-sm text-white bg-sky-500 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                LinkedIn
              </span>
            </Link>
            <Link href="mailto:spmskperera@gmail.com" className="relative group">
              <Image src="/images/icons/email.png" alt="Email" width={32} height={32} className="hover:opacity-80 transition-opacity duration-300" />
              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 text-sm text-white bg-sky-500 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Email
              </span>
            </Link>
            <Link href="https://github.com/mskperera" target="_blank" className="relative group">
              <Image src="/images/icons/github.png" alt="GitHub" width={32} height={32} className="hover:opacity-80 transition-opacity duration-300" />
              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 text-sm text-white bg-sky-500 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                GitHub
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}