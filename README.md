This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

Run in development:

1. Clone the Repository:


```sh
git clone https://github.com/lyubomiriliev/interview-task.git
```

2. Install dependencies (Using npm)
   
```sh
npm install
```

3. Run the Development Server

```sh
npm run dev
```

The app will be available at
```sh
http://localhost:3000
```
You will get redirected to /en as the default locale, but you can also switch to /bg using the button at top right.

Build & Export:

1. Run build

```sh
npm run build
```

2. Test locally

```sh
npx serve out
```

You will get redirected to a page where you should select which locale to open (If you are on Windows that's because the postbuild script in package.json is an echo command and its not supported, but I've used it for deploying on Netlify).

Bonus: Deployment

1. Install Netlify CLI
   
```sh
npm install -g netlify-cli
```

2. Deploy the static site
   
```sh
netlify deploy --prod --dir=out
```

3. Follow the steps provided in the CLI.
