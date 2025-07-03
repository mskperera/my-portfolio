import Image from 'next/image';
import Link from 'next/link';

const projects = [
{
  title: 'Cloud POS and Inventory System',
  image: '/images/projects/thumbnails/cloudpos_tumb.png',
  description: 'A robust and scalable cloud-based Point of Sale (POS) and inventory management system designed for businesses with multiple branches or clients. It supports real-time product updates, stock tracking, sales processing, and reporting. Ideal for retail and service businesses looking for a centralized and efficient way to manage operations from anywhere.',
  link: 'https://clpos.legendbyte.com',
},
  {
    title: 'IoT Energy Metering System',
    image: '/images/projects/thumbnails/energymeter_tumb.png',
    description: 'An IoT-based system for real-time energy consumption tracking and dynamic cost calculation.',
    link: 'https://example.com/iot-energy-metering-system',
  },
  {
    title: 'Automotive Service Management',
    image: '/images/projects/thumbnails/ams_tumb1.jpg',
    description: 'This Automobile Management System is a desktop software designed to help automobile businesses—such as car dealerships, service centers, and garages—manage their daily tasks more efficiently. It includes key features like stock management, billing, vehicle service history (including lube service records), and report generation.',
    link: 'https://example.com/desktop-pos',
  },
 {
  title: 'Helpdesk Support Management',
  image: '/images/projects/thumbnails/helpdesk.png',
  description: 'This Helpdesk Support Management System is a webased software designed to help organizations efficiently handle customer or internal support requests. It includes key features like ticket creation and tracking, user management, issue categorization, priority handling, and detailed reporting to improve support response and service quality.',
  link: 'https://example.com/helpdesk-system',
},
{
  title: 'Geo Attendance Marker',
  image: '/images/projects/thumbnails/geoattendanceman.jpg',
  description: 'Geo Attendance Tracker is a mobile application designed to help organizations track employee attendance based on real-time GPS location. It allows users to mark their attendance only within approved geographical areas, ensuring accurate time and location logging. Key features include live location verification, attendance history, user management, and reporting for HR and admin use.',
  link: 'https://example.com/geo-attendance-app',
}

];

export default function Projects() {
  return (
    // <section className="py-10 bg-white dark:bg-gray-800" id="projects">
    //   <div className="container mx-auto px-4">
    //     <h2 className="text-3xl font-bold text-center mb-10 animate-slide-up text-gray-600 dark:text-gray-200">Top Projects</h2>
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    //       {projects.map((project, index) => (
    //         <div key={index} className="project-card bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden relative">
    //           <Image src={project.image} alt={project.title} width={400} height={192} className="w-full h-48 object-cover" />
    //           <div className="project-overlay absolute inset-0 bg-sky-500 bg-opacity-70 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
    //             <Link href={project.link} target="_blank" className="text-white font-bold hover:underline">View Details</Link>
    //           </div>
    //           <div className="p-6">
    //             <h3 className="text-xl font-bold mb-2 dark:text-gray-200">{project.title}</h3>
    //             <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
<section className="py-10 bg-white dark:bg-gray-800" id="projects">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-10 animate-slide-up text-gray-600 dark:text-gray-200">Top Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
      {projects.map((project, index) => (
        <div key={index} className="project-card p-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-row relative">
           <div className="project-overlay absolute inset-0 bg-sky-500 bg-opacity-10 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg">
              {/* <Link href={project.link} target="_blank" className="text-white font-bold hover:underline">View Details</Link> */}
            </div>
          <div className="relative w-1/3 overflow-hidden rounded-lg">
            <Image 
              src={project.image} 
              alt={project.title} 
              width={400} 
              height={192} 
              className="w-full h-48 object-cover rounded-lg" 
            />
          
          </div>
          <div className="p-6 w-1/2 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2 dark:text-gray-200">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
  );
}