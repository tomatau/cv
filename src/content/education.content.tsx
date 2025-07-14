import { ReactNode } from 'react'
import { DetailNode, Period, Skills } from './types'

type Education = {
  period: Period
  establishment: ReactNode
  qualifications: DetailNode[]
  skills?: Skills[]
}

export const education: Education[] = [
  {
    period: {
      from: '2004',
      to: '2008',
    },
    establishment: 'Sheffield Hallam University',
    qualifications: [{ text: 'Computing with Networks BSc (Hons)' }],
    skills: [
      Skills.architecture,
      Skills.css,
      Skills.documentation,
      Skills.html,
      Skills.java,
      Skills.javaScript,
      Skills.mySql,
      Skills.owasp,
      Skills.wcag,
    ],
  },
  {
    period: {
      from: '2024',
    },
    establishment: 'Coursera',
    qualifications: [
      { text: 'Machine Learning Specialisation' },
      { text: 'Deep Learning Specialisation' },
    ],
    skills: [
      Skills.machineLearning,
      Skills.aiEngineering,
      Skills.deepLearning,
      Skills.python,
      Skills.pandas,
      Skills.numpy,
    ],
  },
]
