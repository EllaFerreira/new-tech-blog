# TechGirlBlog 

TechGirl connect is a Next.js app designed to unite women in tech. Leveraging AI insights, it offers a dynamic space for female tech enthusiasts to share experiences, resources, and support. Key features include AI-driven content recommendations, a user-friendly forum for discussions, and profiles to highlight each member's tech journey. Aimed at fostering a strong community, it encourages mentorship, collaboration, and the sharing of opportunities within the tech field, all while providing a platform for girls and women to amplify their voices and contributions in technology.

# Getting Started

First, run the development server:
`npm run dev`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

Routing is handled inherently by Next.js, if you want to create a new route create a folder in the pages directory, the name of this folder will be the route name. Learn more here: [Next.js Routing](https://nextjs.org/docs/routing/introduction)

# Dependencies

Here's a list of the dependencies in the application by default, and resources so that you can learn about them if you need to.

## Tailwind 💨

The css framework for easy inline styling with premade CSS classes. With this framework we don't need to any CSS in our application, its all done through easy to use class names with intellisense through the VSC extension ([Tailwind CSS IntelliSense by Tailwind Labs](https://github.com/tailwindlabs/tailwindcss-intellisense)).

[Learn more about Tailwind](https://tailwindcss.com/)

## Jotai 👻

Jotai is our global state manager for this project. It is designed to be incredibly simple and efficient, we only need to bind the global state that we need, where we need it. You can see an example of Jotai's use with the useAtom hook in the main \_app.tsx file. In this case we're using it to store a global snackbar details object. See stores --> atoms for more.

[Learn more about Jotai](https://jotai.org/)

## Zustand 🧸

Zustand is our extended state machine for this project. It is similar to Jotai in the sense that it is simple and lightweight, however Zustand gives us access to a full state machine where we can perform operations on our state as opposed to just updating/reading. See stores --> bear-pack-slice.ts for a nice example of our bear state.

[Learn more about Zustand](https://github.com/pmndrs/zustand)

## React Query ⚡

React query is our caching and async state management. Extremely powerful tool which is yet again, quite light weight especially implementation wise. There will definitely be a few nuances to pick up especially if you aren't used to caching and invalidating queries or working with mutations. See pages --> example --> index.tsx for a paginated pokemon example.

[Learn more about React Query](https://tanstack.com/query/v4/?from=reactQueryV3&original)

## Axios ✨

Enhanced api calling library for extra functionality and interceptors on requests and responses

[Learn more about Axios](https://axios-http.com/docs/intro)

## Formik ✉️

A useful form tool which gives us access to many validation options for our forms.

[Learn more about Formik](https://formik.org/docs/overview)

## Yup ✅

Schema builder which goes hand in hand with formik to create correctly structured schemas for our forms.

[Learn more about Yup](https://github.com/jquense/yup)
