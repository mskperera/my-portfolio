import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
  <header className="bg-gradient-to-r from-sky-500 to-sky-300 dark:from-gray-900 dark:to-gray-800 py-12 text-center relative">

      <div className="container mx-auto">
        <div className="flex flex-col items-center">
        <div className="w-48 h-48 relative rounded-full overflow-hidden border-4 border-white shadow-lg">
  <Image
    src="/images/profile/me_1.jpg"
    alt="Susantha Perera"
    fill
    className="object-cover"
    style={{ objectPosition: '0% 20%' }}
  />
</div>

          <h1 className="text-4xl font-bold text-white mt-4 animate-fade-in">Susantha Perera</h1>
          <p className="text-lg text-white mt-2 animate-fade-in">Software Engineer | Full-Stack Developer</p>
          <div className="flex items-center justify-center mt-6 space-x-6 animate-fade-in">
            <a
              href="/assets/resume.pdf"
              download
              target="_blank"
              className="inline-block py-2 px-6 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transform hover:scale-105 transition-all duration-300"
            >
              Download My CV
            </a>
            <div className="flex space-x-6">
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
      </div>
    </header>
  );
}