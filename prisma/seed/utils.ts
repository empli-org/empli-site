import { faker } from '@faker-js/faker'

export function createCategory() {
  return {
    name: faker.name.jobArea(),
  }
}

export function createSkill() {
  return {
    name: faker.name.jobArea(),
  }
}

export function createTalent() {
  return {
    name: faker.name.firstName(),
    lastname: faker.name.lastName(),
    age: faker.datatype.number({ min: 18, max: 50 }),
    image: faker.image.avatar(),
    yearsOfExp: faker.datatype.number({ min: 1, max: 15 }),
    verified: faker.datatype.boolean(),
  }
}

export function createContactInfo() {
  return {
    phone: faker.phone.number(),
    address: faker.address.streetAddress(),
    city: faker.address.city(),
  }
}

export function createSocialInfo() {
  return {
    linkedin: faker.internet.url(),
    website: faker.internet.url(),
  }
}

export function createRole() {
  return {
    name: faker.name.jobType(),
  }
}

export function createCompany() {
  return {
    name: faker.company.name(),
    description: faker.company.bs(),
  }
}

export function createJob() {
  return {
    code: '',
    title: faker.name.jobTitle(),
    description: faker.name.jobDescriptor(),
    area: faker.name.jobArea(),
    type: faker.name.jobType(),
    requiredExp: faker.datatype.number({ min: 1, max: 5 }),
    minRate: faker.datatype.float({ min: 1000, max: 1999 }),
    maxRate: faker.datatype.float({ min: 2000, max: 3000 }),
    body: `
This is the body of the job.

${faker.lorem.paragraph()}

- item1
- item2
- item3
`,
  }
}
