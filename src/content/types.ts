import { ReactNode } from 'react'

export enum Positions {
  lead = 'Lead',
  frontEnd = 'Front-end',
  backEnd = 'Back-end',
  fullStack = 'Full-stack',
}

export enum Exhaustive {
  minimal = 'minimal',
  exhaustive = 'exhaustive',
}

export enum Options {
  recentExperienceOnly,
}

export type DetailNode = {
  text: ReactNode
  children?: DetailNode[]
  tags?: Tags
}

export type Tags = (Exhaustive | Skills)[]

export type Period = {
  from: string
  to?: string
}

export enum Skills {
  // languages
  bash = 'Bash',
  css = 'CSS',
  golang = 'Golang',
  html = 'HTML',
  java = 'Java',
  javaScript = 'JavaScript',
  mySql = 'MySQL',
  node = 'Node.js',
  php = 'PHP',
  python = 'Python',
  scss = 'SCSS',
  typeScript = 'TypeScript',
  // tools
  akamai = `Akamai`,
  angular = 'Angular',
  apache = `Apache`,
  aws = 'AWS',
  backbone = 'BackboneJS',
  cypress = 'Cypress',
  django = 'Django',
  docker = 'Docker',
  doctrine = 'Doctrine ORM',
  elasticSearch = 'ElasticSearch',
  fastify = 'Fastify',
  flash = 'Flash',
  gcp = 'GCP',
  git = 'Git',
  gitHub = 'GitHub',
  graphQl = 'GraphQL',
  grpc = 'GRPC',
  grunt = 'Grunt',
  jest = 'Jest',
  jira = 'Jira',
  jQuery = 'jQuery',
  kubernetes = 'Kubernetes',
  langchain = 'Langchain',
  less = 'LESS',
  marionette = 'MarionetteJS',
  mocha = 'Mocha',
  mongoDb = 'MongoDB',
  nest = 'Nest.js',
  next = 'Next.js',
  nightwatch = 'Nightwatch',
  numpy = 'Numpy',
  nx = 'Nx',
  pandas = 'Pandas',
  playwright = 'Playwright',
  postgreSql = 'PostgreSQL',
  protobuf = 'Protobuf',
  react = 'React',
  redis = 'Redis',
  redux = 'Redux',
  rx = 'RxJS',
  sagas = `Redux sagas`,
  swagger = 'Swagger',
  tailwind = 'Tailwind',
  vite = 'Vite',
  webpack = 'Webpack',
  wordpress = 'Wordpress',
  zend = 'Zend PHP',
  // practices
  advancedTesting = 'Advanced testing',
  aiEngineering = 'AI Engineering',
  architecture = 'Architecture',
  bem = 'BEM',
  browserCompat = 'Browser compatibility',
  cd = `Continuous deployments`,
  continuousIntegration = 'Continuous integration',
  crossFunctionalLead = `Cross-functional leadership`,
  deepLearning = 'Deep Learning',
  designSystems = 'Design Systems',
  documentation = `Documentation`,
  extremeProg = `Extreme programming`,
  internationalisation = `Internationalisation`,
  kanban = `Kanban`,
  machineLearning = 'Machine Learning',
  mentoring = `Mentoring`,
  microFrontends = `Micro-frontends`,
  microservices = `Microservices`,
  monorepos = `Monorepos`,
  observability = `Observability`,
  owasp = `OWASP`,
  rag = `RAG`,
  rest = 'REST',
  scrum = 'Scrum',
  tdd = `TDD`,
  technicalStrategy = 'Technical strategy',
  wcag = 'WCAG 2.1 compliance',
}
