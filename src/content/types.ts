import { ReactNode } from 'react'
import { SkillDetail } from './skills.content'

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
  skills?: SkillDetail
  exhaustive?: Exhaustive
}

export type Period = {
  from: string
  to?: string
}

export enum Languages {
  bash = 'Bash',
  css = 'CSS',
  coffee = 'coffeescript',
  golang = 'Golang',
  handlebars = 'Handlebars',
  html = 'HTML',
  java = 'Java',
  javaScript = 'JavaScript',
  mySql = 'MySQL',
  node = 'Node.js',
  php = 'PHP',
  python = 'Python',
  scss = 'SCSS',
  typeScript = 'TypeScript',
}

export enum Tools {
  akamai = `Akamai`,
  angular = 'Angular',
  apache = `Apache`,
  aws = 'AWS',
  backbone = 'BackboneJS',
  circleCi = 'CircleCI',
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
  gitLab = 'GitLab',
  graphQl = 'GraphQL',
  grpc = 'GRPC',
  grunt = 'Grunt',
  gulp = 'Gulp',
  jenkins = 'Jenkins',
  jest = 'Jest',
  jira = 'Jira',
  jQuery = 'jQuery',
  karma = 'Karma',
  kubernetes = 'Kubernetes',
  launchDarkly = 'LaunchDarkly',
  langchain = 'Langchain',
  less = 'LESS',
  marionette = 'MarionetteJS',
  mocha = 'Mocha',
  mongoDb = 'MongoDB',
  nest = 'Nest.js',
  newrelix = 'NewRelic',
  next = 'Next.js',
  nightwatch = 'Nightwatch',
  numpy = 'Numpy',
  nx = 'Nx',
  pandas = 'Pandas',
  playwright = 'Playwright',
  postgreSql = 'PostgreSQL',
  protobuf = 'Protobuf',
  protractor = 'Protractor',
  ramda = 'Ramda',
  react = 'React',
  redis = 'Redis',
  redux = 'Redux',
  reduxSagas = `Redux sagas`,
  rx = 'RxJS',
  sentry = `Sentry`,
  swagger = 'Swagger',
  tailwind = 'Tailwind',
  terraform = 'Terraform',
  twilio = 'Twilio',
  vite = 'Vite',
  webpack = 'Webpack',
  wordpress = 'Wordpress',
  zend = 'Zend PHP',
}

export enum Practices {
  abTesting = 'A/B testing',
  advancedTesting = 'Advanced testing',
  aiEngineering = 'AI Engineering',
  aiIntegrations = 'AI/ML integrations',
  apiDesign = 'API design',
  architecture = 'Architecture',
  bem = 'BEM',
  browserCompat = 'Browser compatibility',
  cd = `Continuous deployments`,
  continuousIntegration = 'Continuous integration',
  crossFunctionalLead = `Cross-functional leadership`,
  deepLearning = 'Deep Learning',
  designSystems = 'Design Systems',
  documentation = `Documentation`,
  eventSourcing = `Event sourcing`,
  extremeProg = `Extreme programming`,
  functional = `Functional programming`,
  gitflow = `Gitflow`,
  internationalisation = `Internationalisation`,
  kanban = `Kanban`,
  machineLearning = 'Machine learning',
  mentoring = `Mentoring`,
  microFrontends = `Micro-frontends`,
  microservices = `Microservices`,
  monorepos = `Monorepos`,
  observability = `Observability`,
  openIdConnect = `OpenID Connect`,
  owasp = `OWASP`,
  rag = `RAG`,
  redBlue = `Red blue deploys`,
  rest = 'REST',
  scrum = 'Scrum',
  schemaDesign = 'Schema design',
  tdd = `TDD`,
  technicalStrategy = 'Technical strategy',
  technicalWriting = 'Technical writing',
  ux = 'User Experience',
  wcag = 'WCAG 2.1 compliance',
}

export const Skills = {
  ...Languages,
  ...Tools,
  ...Practices,
}

export type Skills = (typeof Skills)[keyof typeof Skills]
