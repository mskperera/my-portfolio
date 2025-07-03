import Image from 'next/image';

const skills = [
  { name: 'C#', icon: '/images/icons/csharp.png', progress: 92 },
    { name: 'Node.js', icon: '/images/icons/nodejs.png', progress: 88 },
  { name: 'React.js', icon: '/images/icons/react.png', progress: 90 },
   { name: 'React Native', icon: '/images/icons/reactnative.jpg', progress: 90 },
      { name: 'Next.js', icon: '/images/icons/nextjs.jpg', progress: 88 },
     { name: 'JavaScript', icon: '/images/icons/js.png', progress: 80 },
  { name: 'MySQL', icon: '/images/icons/mysql.png', progress: 87 },
  { name: 'MSSQL', icon: '/images/icons/mssql.png', progress: 87 },
  { name: 'AWS', icon: '/images/icons/aws.png', progress: 90 },
  // { name: 'Docker', icon: 'fab fa-docker text-sky-500 text-3xl', progress: 85 },
  
];

export default function Skills() {
  return (
 <section className="py-10 bg-gray-100 dark:bg-gray-900" id="skills">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-8 animate-slide-up text-gray-600 dark:text-gray-200">Skills</h2>
    <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
      {skills.map((skill, index) => (
        <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <div className="flex flex-col items-center mb-2">
            <div className="h-12 flex items-center justify-center mb-2">
              {skill.icon.startsWith('fab') ? (
                <i className={`${skill.icon} text-4xl`} />
              ) : (
                <Image src={skill.icon} alt={skill.name} width={40} height={40} className="object-contain" />
              )}
            </div>
            <h3 className="text-lg dark:text-gray-200">{skill.name}</h3>
          </div>
          {/* <div className="skill-progress bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
            <div className="skill-progress-bar bg-sky-500 h-full" style={{ width: `${skill.progress}%` }} />
          </div> */}
        </div>
      ))}
    </div>
  </div>
</section>
  );
}