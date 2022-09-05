# Braga Technologies Main Site

_This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)._

## Deployment
Main site: -  
Development site: [https://braga-technologies-main-site.vercel.app/](https://braga-technologies-main-site.vercel.app/)

## Getting Started

First, run the development server:

```bash
pnpm run dev
# or
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## For Content Managers
Config files in the [config](./config) folder are used to generate the content of the website. More details can be found in each file.

Steps to edit the website content:
1. Find the relevant config file in the [config](./config) folder. Files are organized by page, except for the partner logos config.
2. Change the content of the config file. Follow the original formatting and structure.
3. Commit and push the changes to the config file using the following command:
```bash
git add config/<config-file>
git commit -m "Update <config-file>"
git push
```
4. The website will be automatically deployed to [https://braga-technologies-main-site.vercel.app](https://braga-technologies-main-site.vercel.app) after the changes are pushed.
* Contact [Feli](https://github.com/FelineJTD) if you need help.