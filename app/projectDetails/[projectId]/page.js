import Image from 'next/image';
import Link from 'next/link';
import projectsData from '../../../data/projectsData.js'; // Adjust path
import ScrollToTopButton from '../../../components/ScrollToTopButton'; // Adjust path
import styles from './page.module.css'; // Import CSS module

export default function ProjectDetail({ params }) {
  const { projectId } = params;

  // Find project by ID
  const project = projectsData.find((p) => p.id === projectId) || {
    name: 'Project Not Found',
    description: 'No project found with this ID.',
    overview: 'Please select a valid project.',
    screenshots: [],
    technologies: [],
    features: [],
    collaboration: '',
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-opacity-10 bg-white opacity-20" />
        <div className={`relative container mx-auto px-4 ${styles.animateFadeInUp}`}>
          <h1 className="text-4xl md:text-5xl font-bold">{project.name}</h1>
          <p className="text-lg md:text-xl mt-4">{project.description}</p>
          {project.link && (
            <Link href={project.link} passHref>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block bg-white text-blue-600 font-semibold py-2 px-4 rounded-lg hover:bg-blue-100 transition-colors duration-300"
              >
                View Project
              </a>
            </Link>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-6">
        {/* Project Overview */}
        <section className={`mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 ${styles.animateFadeInUp}`}>
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">Project Overview</h2>
          <p className="text-gray-700 dark:text-gray-300 mt-4">{project.overview}</p>
        </section>

        {/* Screenshots Section */}
        {project.screenshots.length > 0 && (
          <section className={`mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 ${styles.animateFadeInUp}`}>
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">Screenshots</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              {project.screenshots.map((src, index) => (
                <div
                  key={index}
                  className={`relative w-full h-64 rounded-lg overflow-hidden ${styles.screenshotImg}`}
                >
                  <Image
                    src={src}
                    alt={`Screenshot ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Technologies Section */}
        {project.technologies.length > 0 && (
          <section className={`mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 ${styles.animateFadeInUp}`}>
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">Technologies Used</h2>
            <ul className="list-disc pl-5 mt-4 text-gray-700 dark:text-gray-300">
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Features Section */}
        {project.features.length > 0 && (
          <section className={`mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 ${styles.animateFadeInUp}`}>
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">Key Features</h2>
            <ul className="list-disc pl-5 mt-4 text-gray-700 dark:text-gray-300">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Collaboration Section */}
        {project.collaboration && (
          <section className={`mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 ${styles.animateFadeInUp}`}>
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">Collaboration</h2>
            <p className="text-gray-700 dark:text-gray-300 mt-4">{project.collaboration}</p>
          </section>
        )}
      </main>

      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </div>
  );
}

// Generate static paths for all projects
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    projectId: project.id,
  }));
}