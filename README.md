# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# Top Cranes General Transport

## Contact Form Email

The contact form sends enquiries to `sales@topcranestransport.com` through the Vercel `/api/contact` function and Resend.

Configure these Vercel environment variables before deploying:

- `RESEND_API_KEY`: API key from Resend
- `CONTACT_FROM_EMAIL`: a sender address from a domain verified in Resend, for example `Top Cranes Website <website@topcranestransport.com>`

Keep the Resend API key server-side. Do not add it to a `VITE_` variable or commit it to the repository.
