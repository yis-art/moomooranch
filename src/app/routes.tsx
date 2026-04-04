import { createBrowserRouter, Navigate } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Blog } from "./pages/Blog";
import { BlogPost } from "./pages/BlogPost";
import { Products } from "./pages/Products";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Journey } from "./pages/Journey";
import { EmptyBarn } from "./pages/EmptyBarn";
import { Taste } from "./pages/Taste";
import { Shop } from "./pages/Shop";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "journey", Component: Journey },
      { path: "journey/empty-barn", Component: EmptyBarn },
      { path: "taste", Component: Taste },
      { path: "blog", Component: Blog },
      { path: "blog/:slug", Component: BlogPost },
      { path: "shop", Component: Shop },
      { path: "products", Component: Products },
      { path: "visit", Component: Contact },
      { path: "contact", element: <Navigate to="/visit" replace /> },
      { path: "faq", element: <Navigate to="/visit" replace /> },
    ]
  }
]);
