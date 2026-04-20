import { createRouter, createRootRoute, createRoute } from "@tanstack/react-router";
import App from "./App";
import About from "./About";

const rootRoute = createRootRoute();

const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: App,
});

const aboutRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/About",
    component: About,
});

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute]);

export const router = createRouter({
    routeTree,
});
