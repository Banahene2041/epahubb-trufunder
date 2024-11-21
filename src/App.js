import { createBrowserRouter, RouterProvider } from "react-router-dom"
import {
  Error,
  Landing,
  ContactUs,
  AffiliatePartner,
  ClientArea,
  Faqs,
  HomeLayout,
} from "./pages"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "affiliate-partner",
        element: <AffiliatePartner />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "faqs",
        element: <Faqs />,
      },
      {
        path: "client-area",
        element: <ClientArea />,
      },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}
export default App
