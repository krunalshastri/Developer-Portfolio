import emoji from 'react-easy-emoji';

const greeting = {
  username: 'Sourabh Varshney',
  title: "Hi all, I'm Sourabh!",
  subTitle: 'Software Developer',
  resumeLink:
    'https://drive.google.com/file/d/1JYWfLjN0vuv7fm1GUxqdEqr2Jzs2SAwK/view?usp=sharing',
};

// Your Social Media Link

const socialMediaLinks = {
  github: 'https://github.com/sourabhvarshney111',
  linkedin: 'https://www.linkedin.com/in/sourabh-varshney-8324b5149/',
  gmail: 'sourabhvarshney111@gmail.com',
  twitter: 'https://twitter.com/VarshneySourabh',
};

// Your Skills Section

const skillsSection = {
  title: 'Skills Set',
  skills: [
    emoji(
      '⚡ Designing and developing Test Automation frameworks using Python and Java'
    ),
    emoji('⚡ End to End automation executions'),
    emoji(
      '⚡ Building predictive models to extract insights and make decisions out of data'
    ),
  ],
  softwareSkills: [
    {
      skillName: 'python',
      classname: 'logos:python',
      style: {
        backgroundColor: 'transparent',
      },
    },
    {
      skillName: 'java',
      classname: 'logos:java',
      style: {
        backgroundColor: 'transparent',
      },
    },
    {
      skillName: 'C++',
      classname: 'logos:c-plusplus',
      style: {
        backgroundColor: 'transparent',
      },
    },
    {
      skillName: 'HTML',
      classname: 'vscode-icons:file-type-html',
      style: {
        color: '#61DAFB',
      },
    },
    {
      skillName: 'JavaScript',
      classname: 'logos:javascript',
      style: {
        color: '#61DAFB',
      },
    },
    {
      skillName: 'git',
      classname: 'logos:git-icon',
      style: {
        backgroundColor: 'transparent',
      },
    },
    {
      skillName: 'tensorflow',
      classname: 'logos-tensorflow',
      style: {
        backgroundColor: 'transparent',
      },
    },
    {
      skillName: 'keras',
      classname: 'simple-icons:keras',
      style: {
        backgroundColor: 'white',
        color: '#D00000',
      },
    },
    {
      skillName: 'sql',
      classname: 'cib:mysql',
      style: {
        backgroundColor: 'transparent',
      },
    },
    {
      skillName: 'PHP',
      classname: 'cib:php',
      style: {
        backgroundColor: 'transparent',
      },
    },
  ],
};

// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: 'Member Technical',
      company: 'D. E. Shaw India Private Limited',
      companylogo: require('./assets/images/deshaw.png'),
      date: 'July 2020 – Present',
      descBullets: [
        'Working on the main trading infrastructure of the rm, which supports large ways of trading in the market',
        'Created an automation, which takes care of monthly release of production code',
        'Working on migration of code for supporting a new site of trading',
      ],
    },
    {
      role: 'Intern',
      company: 'D. E. Shaw India Private Limited',
      companylogo: require('./assets/images/deshaw.png'),
      date: 'May 2019 – July 2019',
      descBullets: [
        'Worked on the Project "Fix-ller Support for Spreads"',
        'The project is a simulator which mocks the trading of spreads(Related stocks) in the market',
        'Supports the simulation of more than 10 million trades in a second',
      ],
    },
    {
      role: 'Contributor',
      company: 'MLPACK',
      companylogo: require('./assets/images/mlpack.png'),
      date: 'Dec 2017 – Apr 2018',
      descBullets: [
        'Contributed to Open Source C++ Machine Learning Library for several algorithms like NADAM, NADAMAX etc.',
        'The library is currently used across various languages including python',
        'Reliable code, which has no issues reported till now',
      ],
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: 'true', // Set true or false to show Contact profile using Github, defaults to false
  display: true, // Set false to hide this section, defaults to true
};

// Your certifications

const certifications = {
  certifications: [
    {
      title: 'Deep Learning',
      subtitle: '- Andrew Ng',
      color_code: '#F6EAEA',
    },
    {
      title: 'Machine Learning',
      subtitle: '- Stanford',
      color_code: '#F0FFDD',
    },
  ],
};

//Project section

const projects = {
  projects: [
    {
      name: 'Legal Document Recommendation System',
      description: [
        'Recommendation System for Indian Legal Documents, given small details of the legal case',
        'Uses extractive summary approach to speed up the recommendation',
        'Ranking of recommendations decided using cosine similarity score of documents',
        'More than 90% accurate and achieves around 0.95 on the F1-score metric',
      ],
      stack:
        'Python, Numpy, Machine Learning, NLP, Scikit-learn, Gensim, Pandas, Scipy, NLTK',
    },
    {
      name: 'Home Automation Using Machine Learning',
      description: [
        'Project of automating homes and oces using machine learning concepts',
        'One component is built from scratch voice-controlled electrical appliances using smartphone only',
        'Another component nds the solution of automating oce lighting by analyzing patterns from past and considering aecting factors like daylight using neural networks',
        'Miniature model of oce lighting was used in the department in reality and turned out to be great success for them',
      ],
      stack: 'Python, Numpy, Machine Learning, Android',
    },
    {
      name: 'Stock Market Prediction',
      description: [
        'Use of Machine Learning Basic Models to predict future stock prices',
        'Used data of last 1 year for future days last price prediction',
        'Best model developed was 95% accurate for one of the stocks',
      ],
      stack: 'Python, Machine Learning, Numpy',
    },
  ],
};

const contactInfo = {
  title: emoji('Contact Me ☎️'),
  subtitle:
    'Discuss a project or just want to say hi? My Inbox is open for all.',
  number: '+91-7017005842',
  email_address: 'sourabhvarshney111@gmail.com',
};

export {
  greeting,
  socialMediaLinks,
  skillsSection,
  workExperiences,
  openSource,
  contactInfo,
  certifications,
  projects,
};
