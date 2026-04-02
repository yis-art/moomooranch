import { createBrowserRouter } from "react-router";
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
import { FAQ } from "./pages/FAQ";
import { Visit } from "./pages/Visit";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "blog", Component: Blog },
      { path: "blog/:slug", Component: BlogPost },
      { path: "products", Component: Products },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "journey", Component: Journey },
      { path: "journey/empty-barn", Component: EmptyBarn },
      { path: "taste", Component: Taste },
      { path: "shop", Component: Shop },
      { path: "faq", Component: FAQ },
      { path: "visit", Component: Visit },
    ]
  }
]);
