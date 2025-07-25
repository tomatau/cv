import { Exhaustive, SkillDetail, Skills } from './types'

type MySkills = Record<string, SkillDetail[]>

export const skills: MySkills = {
  languages: [
    { text: Skills.bash },
    { text: Skills.css, expert: true, exhaustive: Exhaustive.exhaustive },
    { text: Skills.coffee, exhaustive: Exhaustive.exhaustive },
    { text: Skills.golang, exhaustive: Exhaustive.exhaustive },
    { text: Skills.html, expert: true, exhaustive: Exhaustive.exhaustive },
    { text: Skills.handlebars, exhaustive: Exhaustive.exhaustive },
    { text: Skills.java, exhaustive: Exhaustive.exhaustive },
    {
      text: Skills.javaScript,
      expert: true,
      exhaustive: Exhaustive.exhaustive,
    },
    { text: Skills.node, expert: true },
    { text: Skills.php, exhaustive: Exhaustive.exhaustive },
    { text: Skills.python },
    { text: Skills.scss, expert: true, exhaustive: Exhaustive.exhaustive },
    { text: Skills.typeScript, expert: true },
  ],
  tools: [
    { text: Skills.angular, exhaustive: Exhaustive.exhaustive },
    { text: Skills.apache, exhaustive: Exhaustive.exhaustive },
    { text: Skills.aws },
    { text: Skills.backbone, exhaustive: Exhaustive.exhaustive },
    { text: Skills.circleCi },
    { text: Skills.cypress, expert: true },
    { text: Skills.django, exhaustive: Exhaustive.exhaustive },
    { text: Skills.docker },
    { text: Skills.doctrine, exhaustive: Exhaustive.exhaustive },
    { text: Skills.elasticSearch },
    { text: Skills.fastify, exhaustive: Exhaustive.exhaustive },
    { text: Skills.flash, exhaustive: Exhaustive.exhaustive },
    { text: Skills.gcp, exhaustive: Exhaustive.exhaustive },
    { text: Skills.git, expert: true },
    { text: Skills.gitHub, exhaustive: Exhaustive.exhaustive },
    { text: Skills.gitLab, exhaustive: Exhaustive.exhaustive },
    { text: Skills.graphQl, exhaustive: Exhaustive.exhaustive },
    { text: Skills.grpc, exhaustive: Exhaustive.exhaustive },
    { text: Skills.grunt, exhaustive: Exhaustive.exhaustive },
    { text: Skills.gulp, exhaustive: Exhaustive.exhaustive },
    { text: Skills.jenkins, exhaustive: Exhaustive.exhaustive },
    { text: Skills.jest, exhaustive: Exhaustive.exhaustive },
    { text: Skills.jira, exhaustive: Exhaustive.exhaustive },
    { text: Skills.jQuery, exhaustive: Exhaustive.exhaustive },
    { text: Skills.karma, exhaustive: Exhaustive.exhaustive },
    { text: Skills.kubernetes, exhaustive: Exhaustive.exhaustive },
    { text: Skills.launchDarkly, exhaustive: Exhaustive.exhaustive },
    { text: Skills.langchain },
    { text: Skills.less, exhaustive: Exhaustive.exhaustive },
    { text: Skills.marionette, exhaustive: Exhaustive.exhaustive },
    { text: Skills.mocha, exhaustive: Exhaustive.exhaustive },
    { text: Skills.mongoDb, exhaustive: Exhaustive.exhaustive },
    { text: Skills.mySql, exhaustive: Exhaustive.exhaustive },
    { text: Skills.nest, exhaustive: Exhaustive.exhaustive },
    { text: Skills.newrelix, exhaustive: Exhaustive.exhaustive },
    { text: Skills.next },
    { text: Skills.numpy, exhaustive: Exhaustive.exhaustive },
    { text: Skills.nx, exhaustive: Exhaustive.exhaustive },
    { text: Skills.pandas, exhaustive: Exhaustive.exhaustive },
    { text: Skills.playwright, exhaustive: Exhaustive.exhaustive },
    { text: Skills.postgreSql },
    { text: Skills.protobuf, exhaustive: Exhaustive.exhaustive },
    { text: Skills.protractor, exhaustive: Exhaustive.exhaustive },
    { text: Skills.ramda, exhaustive: Exhaustive.exhaustive },
    { text: Skills.react, expert: true },
    { text: Skills.redis, exhaustive: Exhaustive.exhaustive },
    { text: Skills.redux, expert: true, exhaustive: Exhaustive.exhaustive },
    { text: Skills.reduxSagas, exhaustive: Exhaustive.exhaustive },
    { text: Skills.sentry, exhaustive: Exhaustive.exhaustive },
    { text: Skills.swagger, exhaustive: Exhaustive.exhaustive },
    { text: Skills.terraform, exhaustive: Exhaustive.exhaustive },
    { text: Skills.tailwind, exhaustive: Exhaustive.exhaustive },
    { text: Skills.twilio, exhaustive: Exhaustive.exhaustive },
    { text: Skills.vite, exhaustive: Exhaustive.exhaustive },
    { text: Skills.webpack, exhaustive: Exhaustive.exhaustive },
    { text: Skills.wordpress, exhaustive: Exhaustive.exhaustive },
    { text: Skills.zend, exhaustive: Exhaustive.exhaustive },
  ],
  practices: [
    { text: Skills.advancedTesting, expert: true },
    { text: Skills.abTesting },
    { text: Skills.aiEngineering },
    { text: Skills.aiIntegrations },
    { text: Skills.architecture, expert: true },
    { text: Skills.apiDesign, expert: true },
    { text: Skills.bem, expert: true, exhaustive: Exhaustive.exhaustive },
    { text: Skills.browserCompat, expert: true },
    { text: Skills.cd, expert: true },
    {
      text: Skills.continuousIntegration,
      expert: true,
      exhaustive: Exhaustive.exhaustive,
    },
    { text: Skills.crossFunctionalLead, expert: true },
    { text: Skills.deepLearning, exhaustive: Exhaustive.exhaustive },
    { text: Skills.designSystems, expert: true },
    { text: Skills.documentation, exhaustive: Exhaustive.exhaustive },
    { text: Skills.eventSourcing, exhaustive: Exhaustive.exhaustive },
    { text: Skills.extremeProg, exhaustive: Exhaustive.exhaustive },
    { text: Skills.functional, expert: true },
    { text: Skills.gitflow, exhaustive: Exhaustive.exhaustive },
    { text: Skills.internationalisation },
    { text: Skills.kanban, exhaustive: Exhaustive.exhaustive },
    { text: Skills.machineLearning, exhaustive: Exhaustive.exhaustive },
    { text: Skills.mentoring, expert: true },
    { text: Skills.microFrontends, exhaustive: Exhaustive.exhaustive },
    { text: Skills.microservices },
    { text: Skills.monorepos, exhaustive: Exhaustive.exhaustive },
    { text: Skills.openIdConnect, exhaustive: Exhaustive.exhaustive },
    { text: Skills.observability },
    { text: Skills.owasp },
    { text: Skills.rag },
    { text: Skills.redBlue },
    { text: Skills.rest, expert: true },
    { text: Skills.scrum, expert: true },
    { text: Skills.schemaDesign, expert: true },
    { text: Skills.tdd, expert: true },
    { text: Skills.technicalStrategy, expert: true },
    { text: Skills.technicalWriting, exhaustive: Exhaustive.exhaustive },
    { text: Skills.ux, exhaustive: Exhaustive.exhaustive },
    { text: Skills.wcag, expert: true },
  ],
}
