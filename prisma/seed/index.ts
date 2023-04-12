import { PrismaClient } from '@prisma/client'
import {
  createCategory,
  createCompany,
  createContactInfo,
  createRole,
  createSkill,
  createSocialInfo,
  createTalent,
} from './utils'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database')

  console.time('Clear database')
  await prisma.talent.deleteMany({ where: {} })
  await prisma.category.deleteMany({ where: {} })
  await prisma.company.deleteMany({ where: {} })
  await prisma.skill.deleteMany({ where: {} })
  await prisma.role.deleteMany({ where: {} })
  await prisma.job.deleteMany({ where: {} })
  console.timeEnd('Clear database')

  console.time('Inserting skills')
  const skills = await Promise.all(
    Array.from({ length: 15 }, async () => {
      return await prisma.skill.create({
        data: { ...createSkill() },
      })
    }),
  )
  console.timeEnd('Inserting skills')

  console.time('Inserting roles')
  const roles = await Promise.all(
    Array.from({ length: 15 }, async () => {
      return await prisma.role.create({
        data: { ...createRole() },
      })
    }),
  )

  console.timeEnd('Inserting roles')

  console.time('Inserting talents')
  const skillIds = skills.map(s => s.id)
  const rolesIds = roles.map(r => r.id)
  Promise.all(
    Array.from({ length: 25 }, async () => {
      await prisma.talent.create({
        data: {
          ...createTalent(),
          role: {
            connect: {
              id: rolesIds[Math.floor(Math.random() * rolesIds.length)],
            },
          },
          skills: {
            connect: {
              id: skillIds[Math.floor(Math.random() * skillIds.length)],
            },
          },
          socialInfo: {
            create: {
              ...createSocialInfo(),
            },
          },
          contactInfo: {
            create: {
              ...createContactInfo(),
            },
          },
        },
      })
    }),
  )

  console.timeEnd('Inserting talents')

  console.time('Inserting categories')
  const categories = await Promise.all(
    Array.from({ length: 10 }, async () => {
      return await prisma.category.create({
        data: { ...createCategory() },
      })
    }),
  )
  console.timeEnd('Inserting categories')

  console.time('Inserting companies')
  const categoryIds = categories.map(c => c.id)
  Promise.all(
    Array.from({ length: 10 }, async () => {
      await prisma.company.create({
        data: {
          category: {
            connect: {
              id: categoryIds[Math.floor(Math.random() * categoryIds.length)],
            },
          },
          ...createCompany(),
        },
      })
    }),
  )
  console.timeEnd('Inserting companies')
}

main()
  .catch(e => {
    console.log(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
