This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## For a Production Build

```bash
npm run build && npm run start
# or
yarn build && yarn start
# or
pnpm build && pnpm start
# or
bun build && bun start
```

This will build the app for production and run it in production mode.

## Learn More

### Tests

The tests are written with playwright to tests the UI and make sure is pulling the data directly from the API and show it on the page.

also the tests are running against the preview deployment on Vercel. to make a more accurate test. since is the same environment as the production. and ready for users to see.

### Linting and Formatting

The project uses ESLint to lint the code and make sure is following the best practices. and Prettier to format the code. to make sure is consistent and easy to read.

More..., we could use Husky to run the linting and formatting before the code is pushed to the repository. to make sure the code is always clean and consistent.
I avoid this for now, since is a small project and is not necessary. but is a good practice to have it.

### CI/CD

The project uses GitHub Actions to run the tests and make sure the code is working as expected. and also to deploy the app to Vercel. to make sure the app is always up to date and working as expected.


## Use of the APP 

The app is a simple app that shows the list of the first 151 pokemon, with their name and image. and also the user can click on the pokemon to see more details about it. like the type, abilities, and stats. 

inside the details page the user can also see the evolution chain of the pokemon. and also the user can go back to the list of the pokemon. by clicking the header logo.

also the user can search for a pokemon by name. and the app will show the pokemon if it exists. and if not the app will show a message saying that the pokemon was not found. this also sets the URL to the name of the pokemon. so the user can share the URL with other users. and they will see the same pokemon.

