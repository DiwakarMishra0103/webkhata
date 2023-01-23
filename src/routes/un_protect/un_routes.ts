import { lazy } from "react";
import { RouteType } from "../../interface/RouteType";

const Static = lazy(() => import("../../pages/common/Static/Static"));
const Auth = lazy(() => import("../../pages/common/Auth/Auth"));
const Forget = lazy(() => import("../../pages/common/Forget/Forget"));
const Not_Found = lazy(() => import("../../pages/admin/Not_Found/Not_Found"));

export const Un_routes: RouteType[] = [
  {
    path: "/",
    component: Static,
  },
  {
    path: "/auth",
    component: Auth,
  },
  {
    path: "/forget",
    component: Forget,
  },
  {
    path: "*",
    component: Not_Found,
  },
];
