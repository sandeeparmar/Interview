import React from 'react';

const ResourcesPage = () => {
  const resources = [
    {
      category: 'Books',
      items: [
        {
          title: 'Cracking the Coding Interview',
          author: 'Gayle McDowell',
          description: 'The most comprehensive guide to coding interviews',
          link: '#',
          rating: 5,
        },
        {
          title: 'System Design Interview',
          author: 'Alex Xu',
          description: 'An insider\'s guide to system design interviews',
          link: '#',
          rating: 5,
        },
        {
          title: 'Elements of Programming Interviews',
          author: 'Aziz, Prakash, Lee',
          description: 'The insiders\' guide to coding interviews',
          link: '#',
          rating: 4,
        },
      ],
    },
    {
      category: 'Online Courses',
      items: [
        {
          title: 'Algorithms Specialization',
          author: 'Stanford University',
          description: 'Comprehensive algorithms course from Stanford',
          link: '#',
          rating: 5,
        },
        {
          title: 'System Design Interview Course',
          author: 'InterviewBit',
          description: 'Learn system design with real examples',
          link: '#',
          rating: 4,
        },
        {
          title: 'Data Structures and Algorithms',
          author: 'MIT',
          description: 'MIT\'s complete course on algorithms',
          link: '#',
          rating: 5,
        },
      ],
    },
    {
      category: 'Practice Platforms',
      items: [
        {
          title: 'LeetCode',
          author: 'LeetCode',
          description: 'The most popular coding interview platform',
          link: '#',
          rating: 4,
        },
        {
          title: 'HackerRank',
          author: 'HackerRank',
          description: 'Coding challenges and competitions',
          link: '#',
          rating: 3,
        },
        {
          title: 'CodeSignal',
          author: 'CodeSignal',
          description: 'Technical interviews and assessments',
          link: '#',
          rating: 3,
        },
      ],
    },
    {
      category: 'System Design',
      items: [
        {
          title: 'High Scalability',
          author: 'High Scalability',
          description: 'Real-world system design case studies',
          link: '#',
          rating: 4,
        },
        {
          title: 'System Design Primer',
          author: 'Donne Martin',
          description: 'GitHub repository with system design resources',
          link: '#',
          rating: 4,
        },
        {
          title: 'Distributed Systems Course',
          author: 'MIT',
          description: 'MIT\'s distributed systems course',
          link: '#',
          rating: 5,
        },
      ],
    },
  ];

  const tips = [
    {
      title: 'Practice Regularly',
      description: 'Consistency is key. Practice coding problems daily, even if just for 30 minutes.',
      icon: '📅',
    },
    {
      title: 'Understand, Don\'t Memorize',
      description: 'Focus on understanding patterns and concepts rather than memorizing solutions.',
      icon: '🧠',
    },
    {
      title: 'Mock Interviews',
      description: 'Practice with friends or use platforms that offer mock interview sessions.',
      icon: '🗣️',
    },
    {
      title: 'System Design Practice',
      description: 'Don\'t neglect system design. It\'s crucial for senior positions.',
      icon: '🏗️',
    },
    {
      title: 'Know Your Resume',
      description: 'Be ready to explain any project or technology mentioned in your resume.',
      icon: '📋',
    },
    {
      title: 'Ask Good Questions',
      description: 'Always clarify requirements and ask thoughtful questions during interviews.',
      icon: '❓',
    },
  ];

  const companyGuides = [
    {
      name: 'Google',
      focusAreas: ['Algorithms', 'System Design', 'Behavioral'],
      difficulty: 'Hard',
      process: '5-6 rounds including phone screens and onsite',
    },
    {
      name: 'Microsoft',
      focusAreas: ['Coding', 'System Design', 'Leadership'],
      difficulty: 'Medium-Hard',
      process: '4-5 rounds including phone and onsite',
    },
    {
      name: 'Amazon',
      focusAreas: ['Algorithms', 'Behavioral (Leadership Principles)', 'System Design'],
      difficulty: 'Medium-Hard',
      process: '5-6 rounds with strong focus on leadership principles',
    },
    {
      name: 'Facebook/Meta',
      focusAreas: ['Algorithms', 'System Design', 'Product Sense'],
      difficulty: 'Hard',
      process: '4-5 rounds including coding and system design',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Interview Resources</h1>
        <p className="text-gray-600">Curated resources to help you succeed in your technical interviews</p>
      </div>

      {/* Interview Tips */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Interview Tips</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, index) => (
            <div key={index} className="bg-white shadow-md rounded-xl p-4 text-center">
              <div className="text-3xl mb-2">{tip.icon}</div>
              <h3 className="text-lg font-bold mb-1">{tip.title}</h3>
              <p className="text-gray-600 text-sm">{tip.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Company Guides */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Company Interview Guides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {companyGuides.map((company, index) => (
            <div key={index} className="bg-white shadow-md rounded-xl p-4">
              <h3 className="text-lg font-bold mb-2">{company.name}</h3>
              <div className="text-sm text-gray-700">
                <p><strong>Focus Areas:</strong> {company.focusAreas.join(', ')}</p>
                <p><strong>Difficulty:</strong> {company.difficulty}</p>
                <p><strong>Process:</strong> {company.process}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Learning Resources */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Learning Resources</h2>
        {resources.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-8">
            <h3 className="text-xl font-bold mb-3">{category.category}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="bg-white shadow-md rounded-xl p-4">
                  <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-700 mb-1"><strong>Author:</strong> {item.author}</p>
                  <p className="text-sm text-gray-600 mb-1">{item.description}</p>
                  <p className="text-yellow-500 mb-2">{'⭐'.repeat(item.rating)}</p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 text-sm hover:underline"
                  >Learn More</a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ResourcesPage;
