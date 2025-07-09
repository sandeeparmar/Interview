import React from 'react';
import './ResourcesPage.css';

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
          link: 'https://leetcode.com',
          rating: 5,
        },
        {
          title: 'HackerRank',
          author: 'HackerRank',
          description: 'Coding challenges and competitions',
          link: 'https://hackerrank.com',
          rating: 4,
        },
        {
          title: 'CodeSignal',
          author: 'CodeSignal',
          description: 'Technical interviews and assessments',
          link: 'https://codesignal.com',
          rating: 4,
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
          rating: 5,
        },
        {
          title: 'System Design Primer',
          author: 'Donne Martin',
          description: 'GitHub repository with system design resources',
          link: '#',
          rating: 5,
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
    <div className="resources-page">
      <div className="page-header">
        <h1>Interview Resources</h1>
        <p>Curated resources to help you succeed in your technical interviews</p>
      </div>

      {/* Interview Tips */}
      <section className="tips-section">
        <h2>Interview Tips</h2>
        <div className="tips-grid">
          {tips.map((tip, index) => (
            <div key={index} className="tip-card">
              <div className="tip-icon">{tip.icon}</div>
              <h3>{tip.title}</h3>
              <p>{tip.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Company Guides */}
      <section className="company-guides-section">
        <h2>Company Interview Guides</h2>
        <div className="company-guides">
          {companyGuides.map((company, index) => (
            <div key={index} className="company-card">
              <h3>{company.name}</h3>
              <div className="company-info">
                <p><strong>Focus Areas:</strong> {company.focusAreas.join(', ')}</p>
                <p><strong>Difficulty:</strong> {company.difficulty}</p>
                <p><strong>Process:</strong> {company.process}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Learning Resources */}
      <section className="learning-resources-section">
        <h2>Learning Resources</h2>
        {resources.map((category, categoryIndex) => (
          <div key={categoryIndex} className="resource-category">
            <h3>{category.category}</h3>
            <div className="resource-items">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="resource-card">
                  <h4>{item.title}</h4>
                  <p><strong>Author:</strong> {item.author}</p>
                  <p>{item.description}</p>
                  <p><strong>Rating:</strong> {'⭐'.repeat(item.rating)}</p>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">Learn More</a>
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
