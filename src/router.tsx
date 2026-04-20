import { createRouter, createRootRoute, createRoute } from "@tanstack/react-router";
import Top from "./Top";
import Diagnosis from "./Diagnosis";

const rootRoute = createRootRoute();

const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: Top,
});

const aboutRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/Dianosis",
    component: Diagnosis,
});

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute]);

export const router = createRouter({
    routeTree,
});
