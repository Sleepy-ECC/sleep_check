import { createRouter, createRootRoute, createRoute } from "@tanstack/react-router";
import Top from "./page/Top/Top";
import Diagnosis from "./page/Diagnosis/Diagnosis";
import Choice from "./page/Choice/Choice";
import Shuffle from "./page/Shuffle/Shuffle";
import Register from "./page/register/register";
import Login from "./page/login/login";

const rootRoute = createRootRoute();

const topRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: Top,
});

const diagnosisRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/Diagnosis",
    component: Diagnosis,
});

const choiceRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/Choice",
    component: Choice,
});

const shuffleRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/Shuffle",
    component: Shuffle,
});

const registerRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/register",
    component: Register,
});

const loginRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/login",
    component: Login,
});

const routeTree = rootRoute.addChildren([topRoute, diagnosisRoute, choiceRoute, shuffleRoute, registerRoute, loginRoute]);

export const router = createRouter({
    routeTree,
});
