## Cel projektu

Projekt jest prostym sklepem internetowym typu e-commerce, którego celem jest umożliwienie użytkownikowi:

- przeglądania różnych kategorii produktów,

- zapoznania się ze szczegółami wybranego produktu,

- dodawania produktów do koszyka,

- składania zamówień poprzez formularz.

## Jak uruchomić projekt krok po kroku

### 1. Sklonuj repozytorium:

  git clone git@github.com:kacpi95/Project-kodilla-last.git

### 2. Wejdź do katalogu backendu

  cd backend

### 3. Zainstaluj zależności:

  npm install

  #### lub

  yarn install

### 4. Skopiuj plik .env.template do .env i uzupełnij zmienne środowiskowe.

### 5. W przypadku korzystania z PostgreSQL (lokalnie lub zdalnie):

  npx prisma generate
  npx prisma db push
  npx prisma db seed

### 6. Zbuduj frontend:

  cd ../frontend
  yarn install
  yarn build

  #### lub

  npm install
  npm build

### 7. Uruchom server backendowy:

  cd ../backend
  yarn start

  #### lub

  npm start

### 8. Otwórz przeglądarkę pod adresem:

  http://localhost:8000

## Dodatkowe informacje techniczne

- Backend: NestJS + TypeScript

- Frontend: React

- Baza danych: PostgreSQL

### Zmiana bazy danych

Przy zmianie bazy danych należy zmienić zmienną DATABASE_URL w pliku .env, a następnie uruchomić:

  npx prisma generate
  npx prisma db push

### Integracja frontendu z backendem

Frontend jest serwowany bezpośrednio przez NestJS, dlatego wszystkie endpointy API dostępne są pod ścieżką:

  /api/...

### Seedowanie bazy danych

Skrypt prisma/seed.ts umożliwia dodanie przykładowych produktów wraz ze zdjęciami.

### Obsługa zdjęć produktów

W seedzie wykorzystano przykładowe adresy URL zdjęć pochodzące z serwisu Pixabay.
