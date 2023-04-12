import { faker } from '@faker-js/faker'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

function createCategory() {
  return {
    name: faker.name.jobArea(),
  }
}

async function main() {
  console.log('Seeding database')

  console.time('Clear database')
  await prisma.talent.deleteMany({ where: {} })
  await prisma.category.deleteMany({ where: {} })
  await prisma.company.deleteMany({ where: {} })
  await prisma.skill.deleteMany({ where: {} })
  await prisma.job.deleteMany({ where: {} })
  console.timeEnd('Clear database')

  console.time('Inserting categories')
  Promise.all(
    Array.from({ length: 5 }, async () => {
      await prisma.category.create({
        data: { ...createCategory() },
      })
    }),
  )
  console.timeEnd('Inserting categories')
}

main()
  .catch(e => {
    console.log(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
