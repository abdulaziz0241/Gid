import MainPage from "pages/main-page/main";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
// import Layout from "../layout";
const Layout = lazy(() => import("../layout"))
const Tabs = lazy(() => import("../personal/tabs"))
const Auth = lazy(() => import("../auth/auth"))
const Blog = lazy(() => import("../pages/blog"))
const Application = lazy(() => import("../pages/application"))
const Transport = lazy(() => import("../pages/transport"))
const Select = lazy(() => import("../pages/select"))
const Footer = lazy(() => import("../footer/footer"))



export const routers = createBrowserRouter([
   {
      element: <Layout />,
      children: [
         {
            path: '/',
            element: <Auth />
         },
         {
            path: '/main',
            element: <Tabs />
         },
         {
            path: '/layout',
            element: <Layout />
         },
         {
            path: '/blog',
            element: <Blog />
         },
         {
            path: '/application',
            element: <Application />
         },
         {
            path: '/transport',
            element: <Transport />
         },
         {
            path: '/select',
            element: <Select />
         },
         {
            path: '/footer',
            element: <Footer />
         },
         {
            path: '/master',
            element: <MainPage />
         }
      ]
   },

])


