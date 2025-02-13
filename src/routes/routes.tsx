import { createRoute } from "@tanstack/react-router";
import { RootRoute } from "./__root";
import HomePage from "@/pages/home/HomePage";
import SecondPage from "@/pages/second/SecondPage";

export const HomeRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: "/",
  component: HomePage,
});

export const SecondPageRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: "/second-page",
  component: SecondPage,
});

export const rootTree = RootRoute.addChildren([HomeRoute, SecondPageRoute]);
