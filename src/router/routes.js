const routes = [
  {
    path: "/admin",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Index.vue") }]
  },
  {
    path: "/",
    component: () => import("layouts/MLayout.vue"),
    children: [{ path: "", component: () => import("pages/Index.vue") }]
  },
  {
    path: "/about",
    component: () => import("layouts/MLayout.vue"),
    children: [{ path: "", component: () => import("pages/About.vue") }]
  },
  {
    path: "/question",
    component: () => import("layouts/MLayout.vue"),
    children: [{ path: "", component: () => import("pages/Question.vue") }]
  },
  {
    path: "/contact",
    component: () => import("layouts/MLayout.vue"),
    children: [{ path: "", component: () => import("pages/Contact.vue") }]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
