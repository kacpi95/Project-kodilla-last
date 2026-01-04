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
      {
        title: 'Kubek',
        description: 'Kubek do kawy',
        price: 19.99,
        image:
          'https://pixabay.com/pl/photos/cup-of-coffee-puchar-kawa-5325621/',
      },
      {
        title: 'Talerz',
        description: 'Porcelanowy talerz obiadowy',
        price: 29.99,
        image:
          'https://pixabay.com/pl/photos/dinner-plate-food-kitchen-2864682/',
      },
      {
        title: 'Butelka wody',
        description: 'Praktyczna butelka sportowa',
        price: 14.99,
        image:
          'https://pixabay.com/pl/photos/bottle-water-drink-plastic-791910/',
      },
      {
        title: 'Notebook',
        description: 'Notatnik do codziennych zapisków',
        price: 24.99,
        image:
          'https://pixabay.com/pl/photos/notebook-pen-office-writing-828911/',
      },
      {
        title: 'Długopis',
        description: 'Elegancki długopis metalowy',
        price: 9.99,
        image:
          'https://pixabay.com/pl/photos/pen-stationery-office-write-2281856/',
      },
      {
        title: 'Słuchawki',
        description: 'Bezprzewodowe słuchawki bluetooth',
        price: 149.99,
        image:
          'https://pixabay.com/pl/photos/headphones-music-audio-sound-381237/',
      },
      {
        title: 'Lampka biurkowa',
        description: 'LED lampka do czytania i pracy',
        price: 39.99,
        image:
          'https://pixabay.com/pl/photos/lamp-lights-lighting-office-1834787/',
      },
      {
        title: 'Plecak',
        description: 'Lekki plecak turystyczny',
        price: 89.99,
        image:
          'https://pixabay.com/pl/photos/backpack-travel-hiking-bag-569556/',
      },
      {
        title: 'Kubek termiczny',
        description: 'Kubek utrzymujący temperaturę napoju',
        price: 49.99,
        image:
          'https://pixabay.com/pl/photos/thermo-mug-coffee-cup-drink-4989917/',
      },
      {
        title: 'Książka',
        description: 'Bestsellerowy poradnik rozwojowy',
        price: 39.99,
        image:
          'https://pixabay.com/pl/photos/book-books-reading-library-2867320/',
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
