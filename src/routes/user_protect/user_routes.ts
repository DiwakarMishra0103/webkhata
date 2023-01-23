import { lazy } from "react";
import { RouteType } from "../../interface/RouteType";

const Dashboard = lazy(() => import("../../pages/user/Dashboard/Dashboard"));
const Estimates = lazy(() => import("../../pages/user/Estimates/Estimates"));
const Invoices = lazy(() => import("../../pages/user/Invoices/Invoices"));
const Payments = lazy(() => import("../../pages/user/Payments/Payments"));
const Settings = lazy(() => import("../../pages/user/Settings/Settings"));
const Not_Found = lazy(() => import("../../pages/admin/Not_Found/Not_Found"));
const Account_Settings = lazy(
  () => import("../../pages/user/Settings/Accounts_Settings/Accounts_Settings")
);
const Address_Info = lazy(
  () => import("../../pages/user/Settings/Address_Info/Address_Info")
);

export const User_routes: RouteType[] = [
  {
    path: "/customer/dashboard",
    component: Dashboard,
  },
  {
    path: "/customer/estimates",
    component: Estimates,
  },
  {
    path: "/customer/invoices",
    component: Invoices,
  },
  {
    path: "/customer/payments",
    component: Payments,
  },
  {
    path: "/customer/settings",
    component: Settings,
    children: [
      {
        path: "custome-profile",
        component: Account_Settings,
      },
      {
        path: "address-info",
        component: Address_Info,
      },
      {
        path: "*",
        component: Not_Found,
      },
    ],
  },
  {
    path: "*",
    component: Not_Found,
  },
];
