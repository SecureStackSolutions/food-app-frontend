import { getJestProjects } from '@nrwl/jest';

export default {
  projects: getJestProjects(),
  collectCoverage: true,
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
};
