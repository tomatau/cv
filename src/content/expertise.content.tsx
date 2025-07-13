import { ReactNode } from 'react'
import { DetailNode, Exhaustive } from './types'

type Expertise = {
  heading: string
  details: DetailNode[]
}

export const expertise: Expertise[] = [
  {
    heading: 'Leadership',
    details: [
      {
        text: '4 years experience as a department principal engineer',
        children: [
          {
            text: 'Enabling over 40 engineers in delivery teams',
            exhaustive: Exhaustive.exhaustive,
          },
          {
            text: 'Leading enablement team of 6 engineers',
            exhaustive: Exhaustive.exhaustive,
          },
        ],
      },
      {
        text: 'Lead department level front-end engineering alignment',
        children: [
          {
            text: 'Across 12 teams and over 20 front-end engineers',
            exhaustive: Exhaustive.exhaustive,
          },
          {
            text: 'Rolling out design system, WCAG 2.1 compliance and multi-language',
            exhaustive: Exhaustive.exhaustive,
          },
        ],
      },
      {
        text: '6 years as a professional full-stack mentor',
        children: [
          {
            text: 'Writing curriculum and running office hours for 100s of students',
            exhaustive: Exhaustive.exhaustive,
          },
        ],
      },
      {
        text: 'Lead delivery on dozens of customer facing and internal products',
        children: [
          {
            text: 'Technical discovery, collaboration, documentation, delegation, goal and scope setting, success measures and stakeholder reporting',
            exhaustive: Exhaustive.exhaustive,
          },
        ],
      },
    ],
  },
  {
    heading: 'Full stack',
    details: [
      {
        text: '16 years experience in back-end and front-end engineering',
        children: [
          {
            text: 'Designing and building RESTful APIs and Microservices',
            exhaustive: Exhaustive.exhaustive,
          },
          {
            text: 'Designing and building single page applications with evolving tech stacks',
            exhaustive: Exhaustive.exhaustive,
          },
        ],
      },
    ],
  },
  {
    heading: 'Web operations',
    details: [
      {
        text: '14 years experience in web application delivery',
        children: [
          {
            text: 'Deploying, continuous integration and monitoring',
            exhaustive: Exhaustive.exhaustive,
          },
        ],
      },
    ],
  },
]
