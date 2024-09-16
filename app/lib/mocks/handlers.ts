// // src/mocks/handlers.js
// import { rest } from 'msw'

// export const handlers = [
//   // Mock GET request to /shipping-rate/
//   rest.get(`${process.env.NEXT_PUBLIC_API_URL}/shipping-rate/`, (req, res, ctx) => {
//     return res(
//       ctx.status(200),
//       ctx.json([
//         { id: 1, name: 'Standard Shipping', rate: 5.99 },
//         { id: 2, name: 'Express Shipping', rate: 9.99 },
//       ])
//     )
//   }),
// ]
