import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.product.createMany({
    data: [
      {
        title: 'T-shirt',
        description: '100% bawełna',
        price: 49.99,
        image:
          'https://pixabay.com/pl/photos/facet-m%c4%99%c5%bcczyzna-portret-stary-moda-9521785/',
      },
      {
        title: 'Kubek',
        description: 'Kubek do kawy',
        price: 19.99,
        image:
          'https://pixabay.com/pl/photos/cup-of-coffee-puchar-kawa-5325621/',
      },
    ],
  });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  });
