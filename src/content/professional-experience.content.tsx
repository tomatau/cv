import { SkillDetail } from './skills.content'
import { DetailNode, Exhaustive, Period, Skills } from './types'

type ProfessionalExperience = {
  exhaustive?: Exhaustive.exhaustive
  period: Period
  role: string
  establishment: {
    name: string
    location: string
    size?: string
  }
  responsibilities: DetailNode[]
  skills: SkillDetail[]
}

const dendra: ProfessionalExperience = {
  period: {
    from: `Apr 2024`,
    to: `Jul 2025`,
  },
  role: 'Senior Software Engineer',
  establishment: {
    name: 'Dendra',
    location: 'Oxford (remote)',
    size: 'start-up: 50 — 150 staff',
  },
  responsibilities: [
    {
      text: `Lead product development of the customer facing rebrand resulting in significant upscales and retention.`,
      children: [
        {
          text: 'Responsible for scoping, discovery, technical strategy, success measures and documentation',
          exhaustive: Exhaustive.exhaustive,
        },
      ],
    },
    {
      text: `A key engineer within a medium sized start-up:`,
      children: [
        { text: `Developing the customer-facing platform.` },
        {
          text: `Supported internal GIS, Data Ecology, Environmental Management, and ML operations.`,
        },
      ],
      exhaustive: Exhaustive.exhaustive,
    },
    {
      text: `Contributed to new features and products to support the product market fit, supporting sales, and improve operating efficiency.`,
      exhaustive: Exhaustive.exhaustive,
    },
    {
      text: `Improved team processes with stricter practices around quarterly goals, success measures, scope discipline, ticket health and team processes.`,
      exhaustive: Exhaustive.exhaustive,
    },
  ],
  skills: [
    { text: Skills.advancedTesting, exhaustive: Exhaustive.exhaustive },
    { text: Skills.angular },
    { text: Skills.architecture, exhaustive: Exhaustive.exhaustive },
    { text: Skills.aws, exhaustive: Exhaustive.exhaustive },
    { text: Skills.bash, exhaustive: Exhaustive.exhaustive },
    { text: Skills.bem },
    { text: Skills.continuousIntegration, exhaustive: Exhaustive.exhaustive },
    { text: Skills.css, exhaustive: Exhaustive.exhaustive },
    { text: Skills.cypress },
    { text: Skills.designSystems },
    { text: Skills.django },
    { text: Skills.docker },
    { text: Skills.elasticSearch },
    { text: Skills.git, exhaustive: Exhaustive.exhaustive },
    { text: Skills.gitHub, exhaustive: Exhaustive.exhaustive },
    { text: Skills.html, exhaustive: Exhaustive.exhaustive },
    { text: Skills.jest, exhaustive: Exhaustive.exhaustive },
    { text: Skills.jira, exhaustive: Exhaustive.exhaustive },
    { text: Skills.postgreSql, exhaustive: Exhaustive.exhaustive },
    { text: Skills.python },
    { text: Skills.redis, exhaustive: Exhaustive.exhaustive },
    { text: Skills.rest, exhaustive: Exhaustive.exhaustive },
    { text: Skills.rx },
    { text: Skills.scrum, exhaustive: Exhaustive.exhaustive },
    { text: Skills.scss },
    { text: Skills.technicalStrategy },
    { text: Skills.terraform },
    { text: Skills.typeScript },
    { text: Skills.webpack, exhaustive: Exhaustive.exhaustive },
  ],
}

const beamery: ProfessionalExperience = {
  period: {
    from: `Jan 2020`,
    to: `Dec 2023`,
  },
  role: 'Principal Engineer and Tech Lead',
  establishment: {
    name: 'Beamery Inc',
    location: 'London',
    size: 'scale-up: 50 — 400 staff',
  },
  responsibilities: [
    {
      text: `Owned and developed the “Suggestions” microservices product in my first quarter in the role, the company's first AI offering critical to the AI sales pitch producing $3m in ARR.`,
      exhaustive: Exhaustive.exhaustive,
    },
    {
      text: `Leading new Frontend development team of 6 engineers accountable for the new Design System, Multi Language, MFE architecture, A11y and FE tooling, improving scalability and developer efficiency.`,
    },
    {
      text: `Leading technical rollout and adoption of the Design System used across 31 projects, saving over 40,000 hours of engineering effort over 2 years.`,
    },
    {
      text: `Leading technical rollout of WCAG 2.1 AA compliance, a critical aspect of multi million pound contract renewals.`,
    },
    {
      text: `Leading the cross team "Frontend tribe” for over 26 Frontend engineers and 8 QA engineers - to foster knowledge sharing, and standardisation.`,
    },
    {
      text: `Migrating legacy monolithic systems to independently owned services.`,
      exhaustive: Exhaustive.exhaustive,
    },
  ],
  skills: [
    { text: Skills.advancedTesting, exhaustive: Exhaustive.exhaustive },
    { text: Skills.architecture, exhaustive: Exhaustive.exhaustive },
    { text: Skills.bash, exhaustive: Exhaustive.exhaustive },
    { text: Skills.continuousIntegration, exhaustive: Exhaustive.exhaustive },
    { text: Skills.crossFunctionalLead, exhaustive: Exhaustive.exhaustive },
    { text: Skills.css, exhaustive: Exhaustive.exhaustive },
    { text: Skills.cypress, exhaustive: Exhaustive.exhaustive },
    { text: Skills.designSystems },
    { text: Skills.docker },
    { text: Skills.documentation, exhaustive: Exhaustive.exhaustive },
    { text: Skills.elasticSearch, exhaustive: Exhaustive.exhaustive },
    { text: Skills.fastify, exhaustive: Exhaustive.exhaustive },
    { text: Skills.gcp, exhaustive: Exhaustive.exhaustive },
    { text: Skills.git, exhaustive: Exhaustive.exhaustive },
    { text: Skills.golang, exhaustive: Exhaustive.exhaustive },
    { text: Skills.graphQl },
    { text: Skills.grpc, exhaustive: Exhaustive.exhaustive },
    { text: Skills.html, exhaustive: Exhaustive.exhaustive },
    { text: Skills.internationalisation, exhaustive: Exhaustive.exhaustive },
    { text: Skills.jest, exhaustive: Exhaustive.exhaustive },
    { text: Skills.jira, exhaustive: Exhaustive.exhaustive },
    { text: Skills.kanban, exhaustive: Exhaustive.exhaustive },
    { text: Skills.kubernetes, exhaustive: Exhaustive.exhaustive },
    { text: Skills.mentoring, exhaustive: Exhaustive.exhaustive },
    { text: Skills.microFrontends, exhaustive: Exhaustive.exhaustive },
    { text: Skills.microservices, exhaustive: Exhaustive.exhaustive },
    { text: Skills.mocha, exhaustive: Exhaustive.exhaustive },
    { text: Skills.mongoDb },
    { text: Skills.monorepos, exhaustive: Exhaustive.exhaustive },
    { text: Skills.nest, exhaustive: Exhaustive.exhaustive },
    { text: Skills.next },
    { text: Skills.node },
    { text: Skills.nx, exhaustive: Exhaustive.exhaustive },
    { text: Skills.observability, exhaustive: Exhaustive.exhaustive },
    { text: Skills.owasp, exhaustive: Exhaustive.exhaustive },
    { text: Skills.playwright, exhaustive: Exhaustive.exhaustive },
    { text: Skills.protobuf, exhaustive: Exhaustive.exhaustive },
    { text: Skills.rag, exhaustive: Exhaustive.exhaustive },
    { text: Skills.react },
    { text: Skills.redux, exhaustive: Exhaustive.exhaustive },
    { text: Skills.rest, exhaustive: Exhaustive.exhaustive },
    { text: Skills.scrum },
    { text: Skills.swagger, exhaustive: Exhaustive.exhaustive },
    { text: Skills.tdd, exhaustive: Exhaustive.exhaustive },
    { text: Skills.technicalStrategy },
    { text: Skills.typeScript },
    { text: Skills.vite, exhaustive: Exhaustive.exhaustive },
    { text: Skills.wcag },
  ],
}

const thinkfulWriter: ProfessionalExperience = {
  period: {
    from: `May 2018`,
    to: `Jan 2020`,
  },
  role: 'Mentor / Consultant / Open Source Developer',
  establishment: {
    name: 'Thinkful Inc',
    location: 'Remote',
    size: 'start-up: ~200 staff',
  },
  responsibilities: [
    {
      text: `Writing new React, Node and authentication curricula to improve student retention and comprehension. Modernised content to current standards (React, Postgres) and practices (TDD, iterations, migrations, FRP).`,
    },
    {
      text: `Mentoring students with no web development experience into full-stack employment within 6 months.`,
      exhaustive: Exhaustive.exhaustive,
    },
  ],

  skills: [
    { text: Skills.advancedTesting },
    { text: Skills.continuousIntegration, exhaustive: Exhaustive.exhaustive },
    { text: Skills.css, exhaustive: Exhaustive.exhaustive },
    { text: Skills.documentation },
    { text: Skills.extremeProg, exhaustive: Exhaustive.exhaustive },
    { text: Skills.git, exhaustive: Exhaustive.exhaustive },
    { text: Skills.gitHub, exhaustive: Exhaustive.exhaustive },
    { text: Skills.html, exhaustive: Exhaustive.exhaustive },
    { text: Skills.javaScript, exhaustive: Exhaustive.exhaustive },
    { text: Skills.mentoring },
    { text: Skills.node },
    { text: Skills.postgreSql },
    { text: Skills.react },
    { text: Skills.rest },
    { text: Skills.tdd },
    { text: Skills.typeScript, exhaustive: Exhaustive.exhaustive },
    { text: Skills.wcag },
  ],
}

const just: ProfessionalExperience = {
  exhaustive: Exhaustive.exhaustive,
  period: {
    from: `Nov 2017`,
    to: `May 2018`,
  },
  role: 'Senior Developer',
  establishment: {
    name: 'Just Plc',
    location: 'Reigate',
    size: 'start-up: 12 — 50 staff',
  },
  responsibilities: [
    {
      text: `Reduced email collection website deploy size by 80% within 1 hour of my first day at the company and setting up my machine, lowering hosting costs and improving page load times by several seconds.`,
      exhaustive: Exhaustive.exhaustive,
    },
    {
      text: `Lead the build of the company's OpenID Connect provider, providing a centralised login system and heightened security.`,
    },
    {
      text: `Built the initial product demo, a proof of concept giving stakeholders the confidence to invest in product proposal.`,
      exhaustive: Exhaustive.exhaustive,
    },
    {
      text: `Built the first release of front end platform in 6 months less than the budgeted and expected time, allowing the development team to focus on other systematic improvements.`,
    },
  ],

  skills: [
    { text: Skills.advancedTesting },
    { text: Skills.bash, exhaustive: Exhaustive.exhaustive },
    { text: Skills.continuousIntegration, exhaustive: Exhaustive.exhaustive },
    { text: Skills.css, exhaustive: Exhaustive.exhaustive },
    { text: Skills.cypress, exhaustive: Exhaustive.exhaustive },
    { text: Skills.docker, exhaustive: Exhaustive.exhaustive },
    { text: Skills.extremeProg },
    { text: Skills.git, exhaustive: Exhaustive.exhaustive },
    { text: Skills.gitHub, exhaustive: Exhaustive.exhaustive },
    { text: Skills.html, exhaustive: Exhaustive.exhaustive },
    { text: Skills.mentoring },
    { text: Skills.mocha, exhaustive: Exhaustive.exhaustive },
    { text: Skills.node },
    { text: Skills.react },
    { text: Skills.redux, exhaustive: Exhaustive.exhaustive },
    { text: Skills.sagas, exhaustive: Exhaustive.exhaustive },
    { text: Skills.scrum },
    { text: Skills.scss, exhaustive: Exhaustive.exhaustive },
    { text: Skills.tdd },
    { text: Skills.wcag },
    { text: Skills.webpack },
  ],
}

const nowtv: ProfessionalExperience = {
  period: {
    from: `Dec 2015`,
    to: `Nov 2017`,
  },
  role: 'Web Developer',
  establishment: {
    name: 'NowTV',
    location: 'Osterley',
    size: 'corp: 400+ staff',
  },
  responsibilities: [
    {
      text: `Building a service status app to reduce call service support costs by 80%.`,
    },
    {
      text: `Adding features to the eCommerce platform to increase search engine ranks for NowTV products and increase sales.`,
      exhaustive: Exhaustive.exhaustive,
    },
    {
      text: `Received an award for contributions to feedback and development.`,
    },
    {
      text: `Running presentations and talks on mentoring, isomorphic web apps and a new approach to ReactJS integration testing.`,
      exhaustive: Exhaustive.exhaustive,
    },
    {
      text: `Inventing a new style of React functional testing, reducing continuous integration cycle time from 50 minutes to 3 minutes, saving 9 hours of the team's development time per day.`,
    },
  ],

  skills: [
    { text: Skills.advancedTesting },
    { text: Skills.akamai },
    { text: Skills.bash, exhaustive: Exhaustive.exhaustive },
    { text: Skills.bem, exhaustive: Exhaustive.exhaustive },
    { text: Skills.cd },
    { text: Skills.continuousIntegration, exhaustive: Exhaustive.exhaustive },
    { text: Skills.css, exhaustive: Exhaustive.exhaustive },
    { text: Skills.cypress, exhaustive: Exhaustive.exhaustive },
    { text: Skills.docker, exhaustive: Exhaustive.exhaustive },
    { text: Skills.extremeProg, exhaustive: Exhaustive.exhaustive },
    { text: Skills.git, exhaustive: Exhaustive.exhaustive },
    { text: Skills.gitHub, exhaustive: Exhaustive.exhaustive },
    { text: Skills.html, exhaustive: Exhaustive.exhaustive },
    { text: Skills.javaScript, exhaustive: Exhaustive.exhaustive },
    { text: Skills.jira, exhaustive: Exhaustive.exhaustive },
    { text: Skills.mentoring },
    { text: Skills.mocha },
    { text: Skills.nightwatch, exhaustive: Exhaustive.exhaustive },
    { text: Skills.node, exhaustive: Exhaustive.exhaustive },
    { text: Skills.observability },
    { text: Skills.owasp, exhaustive: Exhaustive.exhaustive },
    { text: Skills.react },
    { text: Skills.redux },
    { text: Skills.sagas, exhaustive: Exhaustive.exhaustive },
    { text: Skills.scrum },
    { text: Skills.scss, exhaustive: Exhaustive.exhaustive },
    { text: Skills.tdd },
    { text: Skills.wcag },
    { text: Skills.webpack, exhaustive: Exhaustive.exhaustive },
  ],
}

const wizenoze: ProfessionalExperience = {
  period: {
    from: `Aug 2014`,
    to: `Dec 2015`,
  },
  role: 'Web Developer',
  establishment: {
    name: 'Wizenoze',
    location: 'Remote',
    size: 'start-up: ~12 staff',
  },
  responsibilities: [
    {
      text: `Built 3 line-of-business tools that more than double productivity.`,
    },
    {
      text: `Revamped the main web product have better adaptability to company direction changes.`,
    },
    {
      text: `Employed to fix sluggish admin pages, achieved this goal as the sole front end developer whilst adding new high priority features.`,
      exhaustive: Exhaustive.exhaustive,
    },
    {
      text: `Evangelising React and testing practices to add tests to legacy systems and set-up the front end continuous integration for daily releases.`,
      exhaustive: Exhaustive.exhaustive,
    },
  ],

  skills: [
    { text: Skills.cypress },
    { text: Skills.mocha },
    { text: Skills.node },
    { text: Skills.postgreSql },
    { text: Skills.react },
    { text: Skills.redux },
    { text: Skills.scss },
    { text: Skills.tdd },
    { text: Skills.webpack },
  ],
}

const thinkfulLead: ProfessionalExperience = {
  period: {
    from: `Mar 2014`,
    to: `Dec 2015`,
  },
  role: 'Angular & React Curriculum Lead',
  establishment: {
    name: 'Thinkful Ltd',
    location: 'Remote',
    size: 'start-up: ~50 staff',
  },
  responsibilities: [
    {
      text: `Mentoring over 50 students with no web development experience into front-end employment within 6 months.`,
    },
    {
      text: `Running weekly office hours video sessions to help students debug their coding problems.`,
    },
    {
      text: `Constant improvements to the Angular JS curriculum to help thousands of students improve comprehension and pass grade.`,
      exhaustive: Exhaustive.exhaustive,
    },
    {
      text: `Writing guides and tutorials for Angular and React.`,
      exhaustive: Exhaustive.exhaustive,
    },
    {
      text: `Running workshops on advanced Angular JS and Isomorphic React to existing senior developers in companies such as Dow Jones.`,
      exhaustive: Exhaustive.exhaustive,
    },
  ],

  skills: [
    { text: Skills.angular },
    { text: Skills.css },
    { text: Skills.html },
    { text: Skills.javaScript },
    { text: Skills.react },
    { text: Skills.tdd },
  ],
}

const metail: ProfessionalExperience = {
  exhaustive: Exhaustive.exhaustive,
  period: {
    from: `Feb 2014`,
    to: `Mar 2014`,
  },
  role: 'Senior Web Engineer',
  establishment: {
    name: 'Metail',
    location: 'Cambridge',
    size: 'start-up: ~50 staff',
  },
  responsibilities: [
    {
      text: `Evangelising and advocating TDD in the front end to reduce the need for manual browser testing.`,
      exhaustive: Exhaustive.exhaustive,
    },
    {
      text: `Contributing to the build of the company's main product - an eCommerce plugin widget.`,
    },
    {
      text: `Collaborating with the scrum master to improve the front end team's adherence to scrum.`,
      exhaustive: Exhaustive.exhaustive,
    },
  ],

  skills: [
    { text: Skills.html },
    { text: Skills.less },
    { text: Skills.marionette },
  ],
}

const transversal: ProfessionalExperience = {
  period: {
    from: `Sep 2013`,
    to: `Feb 2014`,
  },
  role: 'Web Developer',
  establishment: {
    name: 'Transversal',
    location: 'Cambridge',
    size: 'start-up: ~100 staff',
  },
  responsibilities: [
    {
      text: `Introduced TDD practices and libraries to the front-end development team, decreasing code regressions.`,
      exhaustive: Exhaustive.exhaustive,
    },
    {
      text: `Promoted SOLID design patterns in the front-end codebase, improving maintenance and developer productivity.`,
      exhaustive: Exhaustive.exhaustive,
    },
    {
      text: `Contributed to the 20-person development team's transition to agile methodologies, increasing collaboration and productivity.`,
    },
  ],

  skills: [
    { text: Skills.backbone },
    { text: Skills.browserCompat },
    { text: Skills.grunt },
    { text: Skills.html },
    { text: Skills.jQuery },
    { text: Skills.mocha },
  ],
}

const austnews: ProfessionalExperience = {
  period: {
    from: `Feb 2012`,
    to: `Apr 2013`,
  },
  role: 'Web Developer',
  establishment: {
    name: 'AustNews',
    location: 'Brisbane',
    size: 'corp: 1 engineer',
  },
  responsibilities: [
    {
      text: `Resolved a legacy database system issue, restoring hundreds of client websites after being called in on my day off sick.`,
      exhaustive: Exhaustive.exhaustive,
    },
    {
      text: `Created a suite of 5 applications used to streamline prospect customers to integrated clients in 20 times the productivity.`,
    },
    {
      text: `Built the rebranded website in under two weeks, adding dozens of new features to reduce technical support needs and free up sales staff time.`,
    },
  ],
  skills: [
    { text: Skills.apache },
    { text: Skills.backbone },
    { text: Skills.doctrine },
    { text: Skills.html },
    { text: Skills.jQuery },
    { text: Skills.marionette },
    { text: Skills.mySql },
    { text: Skills.zend },
  ],
}

const catalyst: ProfessionalExperience = {
  exhaustive: Exhaustive.exhaustive,
  period: {
    from: `Jan 2012`,
    to: `Feb 2012`,
  },
  role: 'Wordpress Guru',
  establishment: {
    name: 'Catalyst Commedia',
    location: 'Brisbane',
    size: 'start-up: ~10 staff',
  },
  responsibilities: [
    {
      text: `Quickly fixed multiple legacy client sites in a short-term role.`,
    },
    {
      text: `Exceeded expectations by fixing problems in half the budgeted time.`,
      exhaustive: Exhaustive.exhaustive,
    },
  ],
  skills: [
    { text: Skills.apache },
    { text: Skills.jQuery },
    { text: Skills.php },
    { text: Skills.wordpress },
  ],
}

const brainWire: ProfessionalExperience = {
  exhaustive: Exhaustive.exhaustive,
  period: {
    from: `Feb 2011`,
    to: `Jul 2011`,
  },
  role: 'Web Developer',
  establishment: {
    name: 'BrainWire',
    location: 'Brisbane',
    size: 'start-up: 3 staff',
  },
  responsibilities: [
    {
      text: `Autonomously planning, designing and building the company's proprietary content management system.`,
    },
    {
      text: `Provided support in UX, SEO, and methodologies, extending beyond contractual responsibilities.`,
      exhaustive: Exhaustive.exhaustive,
    },
    {
      text: `Strong client collaboration to integrate desired functionality into administrative controls.`,
      exhaustive: Exhaustive.exhaustive,
    },
  ],

  skills: [
    { text: Skills.apache },
    { text: Skills.css },
    { text: Skills.html },
    { text: Skills.jQuery },
    { text: Skills.mySql },
    { text: Skills.php },
  ],
}

const fullPhatDesign: ProfessionalExperience = {
  exhaustive: Exhaustive.exhaustive,
  period: {
    from: `Apr 2010`,
    to: `Sep 2010`,
  },
  role: 'Web Developer',
  establishment: {
    name: 'FullPhatDesign',
    location: 'Mansfield',
    size: 'start-up: 2 staff',
  },
  responsibilities: [
    {
      text: `Served as the sole web developer, building a proprietary CMS that integrated into customer websites.`,
    },
    {
      text: `Collaborated daily with the company owner to realise designs for clients and customers.`,
      exhaustive: Exhaustive.exhaustive,
    },
    {
      text: `Collaborating directly with customers to integrate desired functionality into admin controls.`,
    },
  ],

  skills: [
    { text: Skills.apache },
    { text: Skills.css },
    { text: Skills.html },
    { text: Skills.jQuery },
    { text: Skills.mySql },
    { text: Skills.php },
  ],
}

const gnb: ProfessionalExperience = {
  exhaustive: Exhaustive.exhaustive,
  period: {
    from: `Jul 2009`,
    to: `Apr 2010`,
  },
  role: 'English Teacher',
  establishment: {
    name: 'GnB English',
    location: 'South Korea',
    size: 'private school',
  },
  responsibilities: [
    {
      text: `Integrated a game-based teaching method to increase student engagement and improve English speaking ability.`,
      exhaustive: Exhaustive.exhaustive,
    },
    {
      text: `Taught over 200 students, achieving a 99.5%+ pass rate.`,
    },
  ],
  skills: [],
}

const jda: ProfessionalExperience = {
  exhaustive: Exhaustive.exhaustive,
  period: {
    from: `Sep 2008`,
    to: `Dec 2008`,
  },
  role: 'Assistant Web Developer',
  establishment: {
    name: 'JD Approach',
    location: 'Sheffield',
    size: 'start-up: ~5 staff',
  },
  responsibilities: [
    {
      text: `Added Flash development to the company's offerings used in 2 key sales.`,
    },
    {
      text: `Introduced jQuery to the development team, nearly doubling the front-end development productivity.`,
      exhaustive: Exhaustive.exhaustive,
    },
    {
      text: `Introduced the development team to PHP PDO, improving security to remove risk of XSS and SQL injection attacks.`,
      exhaustive: Exhaustive.exhaustive,
    },
  ],

  skills: [
    { text: Skills.apache },
    { text: Skills.css },
    { text: Skills.flash },
    { text: Skills.html },
    { text: Skills.jQuery },
    { text: Skills.mySql },
    { text: Skills.php },
  ],
}

export const professionalExperience = [
  dendra,
  beamery,
  thinkfulWriter,
  just,
  nowtv,
  wizenoze,
  thinkfulLead,
  metail,
  transversal,
  austnews,
  catalyst,
  brainWire,
  fullPhatDesign,
  gnb,
  jda,
]
