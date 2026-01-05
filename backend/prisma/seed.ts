import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.product.deleteMany();
  await prisma.product.createMany({
    data: [
      {
        title: 'T-shirt',
        description: '100% bawełna',
        price: 49.99,
        image:
          'https://cdn.pixabay.com/photo/2023/05/06/01/34/t-shirt-7973405_1280.jpg',
      },
      {
        title: 'Kubek',
        description: 'Kubek do kawy',
        price: 19.99,
        image:
          'https://cdn.pixabay.com/photo/2014/09/24/17/13/mugs-459324_1280.jpg',
      },
      {
        title: 'Kubek',
        description: 'Kubek do kawy',
        price: 19.99,
        image:
          'https://cdn.pixabay.com/photo/2020/06/21/15/57/cup-of-coffee-5325621_1280.jpg',
      },
      {
        title: 'Talerz',
        description: 'Porcelanowy talerz obiadowy',
        price: 29.99,
        image:
          'https://cdn.pixabay.com/photo/2017/02/14/09/49/porcelain-2065456_1280.jpg',
      },
      {
        title: 'Butelka do wody',
        description: 'Praktyczna butelka sportowa',
        price: 14.99,
        image:
          'https://cdn.pixabay.com/photo/2022/12/18/16/45/aluminum-7663829_1280.jpg',
      },
      {
        title: 'Notebook',
        description: 'Notatnik do codziennych zapisków',
        price: 24.99,
        image:
          'https://cdn.pixabay.com/photo/2017/04/06/22/40/write-2209503_1280.jpg',
      },
      {
        title: 'Długopis',
        description: 'Elegancki długopis metalowy',
        price: 9.99,
        image:
          'https://cdn.pixabay.com/photo/2021/01/19/08/59/ball-pen-5930536_1280.jpg',
      },
      {
        title: 'Słuchawki',
        description: 'Bezprzewodowe słuchawki bluetooth',
        price: 149.99,
        image:
          'https://cdn.pixabay.com/photo/2016/10/06/22/29/headphones-1720164_1280.jpg',
      },
      {
        title: 'Lampa',
        description: 'LED lampka do czytania i pracy',
        price: 39.99,
        image:
          'https://cdn.pixabay.com/photo/2019/04/04/17/58/poster-4103332_1280.jpg',
      },
      {
        title: 'Plecak',
        description: 'Lekki plecak turystyczny',
        price: 89.99,
        image:
          'https://cdn.pixabay.com/photo/2016/11/19/15/08/backpack-1839743_1280.jpg',
      },
      {
        title: 'Kubek termiczny',
        description: 'Kubek utrzymujący temperaturę napoju',
        price: 49.99,
        image:
          'https://cdn.pixabay.com/photo/2015/03/17/11/01/hot-water-bottle-677527_1280.jpg',
      },
      {
        title: 'Książka',
        description: 'Bestsellerowy poradnik rozwojowy',
        price: 39.99,
        image:
          'https://cdn.pixabay.com/photo/2018/01/17/18/43/book-3088775_1280.jpg',
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
