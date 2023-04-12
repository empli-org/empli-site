import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database')

  console.time('Clear database')
  await prisma.job.deleteMany({ where: {} })
  console.timeEnd('Clear database')
}

main()
  .catch(e => {
    console.log(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
