# Next.js ChatGPT Clone

A ChatGPT Clone web application built with Next.js, TypeScript, Tailwind CSS, Convex, and Clerk Auth.

## Running the project

These instructions will help you set up and run the project on your local machine for development and testing purposes.

1. **Clone the repository:**

```bash
git clone https://github.com/Ibarakilol/nextjs-chatgpt-clone.git
cd nextjs-chatgpt-clone
```

2. **Install the required dependencies:**

```bash
npm i
```

3. **Configure environment variables:**

Create a `.env.local` file in the project root and set the necessary environment variables.

```
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
```

On your Convex Dashboard go to your development project's Settings tab and add to Environment Variables a key `CLERK_AUTH_URL` with Clerk auth url.

4. **Run convex development server:**

```bash
npx convex dev
```

5. **On second terminal run the development server:**

```bash
npm run dev
```

## Built with

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Convex](https://convex.dev/)
- [Clerk Auth](https://clerk.com/)
