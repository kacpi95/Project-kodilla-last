import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();
  await prisma.product.createMany({
    data: [
      {
        title: 'T-shirt',
        description: '100% bawełna',
        price: 49.99,
        image:
          'https://cdn.pixabay.com/photo/2023/05/06/01/34/t-shirt-7973405_1280.jpg',
        detailedDescription:
          'Ten klasyczny T-shirt wykonany jest w 100% z wysokiej jakości bawełny, co zapewnia komfort noszenia przez cały dzień. Materiał jest miękki i oddychający, idealny na każdą okazję.',
      },
      {
        title: 'Kubek',
        description: 'Kubek do kawy',
        price: 19.99,
        image:
          'https://cdn.pixabay.com/photo/2014/09/24/17/13/mugs-459324_1280.jpg',
        detailedDescription:
          'Porcelanowy kubek doskonały do codziennej kawy lub herbaty. Wytrzymały i łatwy w czyszczeniu, nadaje się również do mycia w zmywarce. Klasyczny design sprawia, że pasuje do każdej kuchni.',
      },
      {
        title: 'Kubek',
        description: 'Kubek do kawy',
        price: 19.99,
        image:
          'https://cdn.pixabay.com/photo/2020/06/21/15/57/cup-of-coffee-5325621_1280.jpg',
        detailedDescription:
          'Elegancki kubek do kawy o minimalistycznym designie. Wykonany z wysokiej jakości ceramiki, zachowuje temperaturę napoju na dłużej. Idealny do domu, biura lub jako prezent dla miłośnika kawy.',
      },
      {
        title: 'Talerz',
        description: 'Porcelanowy talerz obiadowy',
        price: 29.99,
        image:
          'https://cdn.pixabay.com/photo/2017/02/14/09/49/porcelain-2065456_1280.jpg',
        detailedDescription:
          'Porcelanowy talerz idealny na codzienne posiłki i eleganckie kolacje. Wytrzymały i łatwy w utrzymaniu czystości. Klasyczny biały kolor pasuje do każdego zastawienia stołowego.',
      },
      {
        title: 'Butelka do wody',
        description: 'Praktyczna butelka sportowa',
        price: 14.99,
        image:
          'https://cdn.pixabay.com/photo/2022/12/18/16/45/aluminum-7663829_1280.jpg',
        detailedDescription:
          'Lekka butelka do wody, idealna na trening, spacer czy wycieczkę. Wykonana z trwałego materiału, który nie wchłania zapachów. Ergonomiczny kształt ułatwia picie w każdej sytuacji.',
      },
      {
        title: 'Notebook',
        description: 'Notatnik do codziennych zapisków',
        price: 24.99,
        image:
          'https://cdn.pixabay.com/photo/2017/04/06/22/40/write-2209503_1280.jpg',
        detailedDescription:
          'Elegancki notatnik do codziennych zapisków, planowania i szkiców. Posiada wysokiej jakości papier, który nie przebija atramentu. Idealny dla studentów, profesjonalistów.',
      },
      {
        title: 'Długopis',
        description: 'Elegancki długopis metalowy',
        price: 9.99,
        image:
          'https://cdn.pixabay.com/photo/2021/01/19/08/59/ball-pen-5930536_1280.jpg',
        detailedDescription:
          'Metalowy długopis o eleganckim designie, idealny do pisania w domu, w pracy i na spotkaniach. Płynnie pisze, zapewniając przyjemne doświadczenie. Doskonały również jako prezent.',
      },
      {
        title: 'Słuchawki',
        description: 'Bezprzewodowe słuchawki bluetooth',
        price: 149.99,
        image:
          'https://cdn.pixabay.com/photo/2016/10/06/22/29/headphones-1720164_1280.jpg',
        detailedDescription:
          'Bezprzewodowe słuchawki Bluetooth zapewniają wysokiej jakości dźwięk i komfort użytkowania. Wyposażone w miękkie nauszniki i długi czas pracy na baterii. Idealne do słuchania muzyki.',
      },
      {
        title: 'Lampa',
        description: 'LED lampka do czytania i pracy',
        price: 39.99,
        image:
          'https://cdn.pixabay.com/photo/2019/04/04/17/58/poster-4103332_1280.jpg',
        detailedDescription:
          'LED lampka idealna do czytania, pracy i nauki. Regulowana jasność pozwala dostosować światło do własnych potrzeb. Stylowy design sprawia, że pasuje do każdego wnętrza.',
      },
      {
        title: 'Plecak',
        description: 'Lekki plecak turystyczny',
        price: 89.99,
        image:
          'https://cdn.pixabay.com/photo/2016/11/19/15/08/backpack-1839743_1280.jpg',
        detailedDescription:
          'Lekki plecak turystyczny wykonany z wytrzymałego materiału, idealny na wycieczki i codzienne użytkowanie. Posiada wiele kieszeni i wygodne szelki. Ergonomiczny design zapewnia komfort.',
      },
      {
        title: 'Kubek termiczny',
        description: 'Kubek utrzymujący temperaturę napoju',
        price: 49.99,
        image:
          'https://cdn.pixabay.com/photo/2015/03/17/11/01/hot-water-bottle-677527_1280.jpg',
        detailedDescription:
          'Kubek termiczny, który utrzymuje ciepło napoju przez wiele godzin. Wykonany z wysokiej jakości materiałów, bezpieczny dla zdrowia. Idealny do pracy i aktywności na świeżym powietrzu.',
      },
      {
        title: 'Książka',
        description: 'Bestsellerowy poradnik rozwojowy',
        price: 39.99,
        image:
          'https://cdn.pixabay.com/photo/2018/01/17/18/43/book-3088775_1280.jpg',
        detailedDescription:
          'Bestsellerowy poradnik rozwojowy, który inspiruje do działania i osobistego rozwoju. Zawiera praktyczne porady i ćwiczenia, które można wprowadzić w życie od zaraz.',
      },
    ],
  });

  const tshirt = await prisma.product.findFirst({
    where: { title: 'T-shirt' },
  });

  if (tshirt) {
    await prisma.productImage.createMany({
      data: [
        {
          url: 'https://cdn.pixabay.com/photo/2021/02/26/15/52/man-6052253_1280.jpg',
          productId: tshirt.id,
        },
        {
          url: 'https://cdn.pixabay.com/photo/2021/02/26/15/52/man-6052254_1280.jpg',
          productId: tshirt.id,
        },
        {
          url: 'https://cdn.pixabay.com/photo/2025/05/20/10/57/t-shirt-9611374_1280.jpg',
          productId: tshirt.id,
        },
        {
          url: 'https://cdn.pixabay.com/photo/2017/01/13/04/56/t-shirt-1976334_1280.png',
          productId: tshirt.id,
        },
      ],
    });
  }
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  });
