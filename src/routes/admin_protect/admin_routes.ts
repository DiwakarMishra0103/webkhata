import { lazy } from "react";
import { RouteType } from "../../interface/RouteType";

const Dashboard = lazy(() => import("../../pages/admin/Dashboard/Dashboard"));
const Customers = lazy(() => import("../../pages/admin/Customers/Customers"));
const Items = lazy(() => import("../../pages/admin/Items/Items"));
const Estimates = lazy(() => import("../../pages/admin/Estimates/Estimates"));
const Invoices = lazy(() => import("../../pages/admin/Invoices/Invoices"));
const Recurring_Invoices = lazy(
  () => import("../../pages/admin/Recurring_Invoices/Recurring_Invoices")
);
const Payments = lazy(() => import("../../pages/admin/Payments/Payments"));
const Expenses = lazy(() => import("../../pages/admin/Expenses/Expenses"));
const Users = lazy(() => import("../../pages/admin/User/Users"));
const Reports = lazy(() => import("../../pages/admin/Reports/Reports"));
const Settings = lazy(() => import("../../pages/admin/Settings/Settings"));
const Not_Found = lazy(() => import("../../pages/admin/Not_Found/Not_Found"));
const Account_Settings = lazy(
  () => import("../../pages/admin/Settings/Account_Settings/Account_Settings")
);
const Company_Info = lazy(
  () => import("../../pages/admin/Settings/Company_Info/Company_Info")
);
const Preferences = lazy(
  () => import("../../pages/admin/Settings/Preferences/Preferences")
);
const Customization = lazy(
  () => import("../../pages/admin/Settings/Customization/Customization")
);
const Roles = lazy(() => import("../../pages/admin/Settings/Roles/Roles"));
const Exchange_Rate = lazy(
  () => import("../../pages/admin/Settings/Exchange_Rate/Exchange_Rate")
);
const Notifications = lazy(
  () => import("../../pages/admin/Settings/Notifications/Notifications")
);
const Tax_Type = lazy(
  () => import("../../pages/admin/Settings/Tax_Type/Tax_Type")
);
const Payment_Mode = lazy(
  () => import("../../pages/admin/Settings/Payment_Mode/Payment_Mode")
);
const Custom_Fields = lazy(
  () => import("../../pages/admin/Settings/Custom_Fields/Custom_Fields")
);
const Notes = lazy(() => import("../../pages/admin/Settings/Notes/Notes"));
const Expense_Categories = lazy(
  () =>
    import("../../pages/admin/Settings/Expense_Categories/Expense_Categories")
);
const Mail_Configuration = lazy(
  () =>
    import("../../pages/admin/Settings/Mail_Configuration/Mail_Configuration")
);
const File_Disk = lazy(
  () => import("../../pages/admin/Settings/File_Disk/File_Disk")
);
const Backup = lazy(() => import("../../pages/admin/Settings/Backup/Backup"));

export const Admin_routes: RouteType[] = [
  {
    path: "/admin/dashboard",
    component: Dashboard,
  },
  {
    path: "/admin/customers",
    component: Customers,
  },
  {
    path: "/admin/items",
    component: Items,
  },
  {
    path: "/admin/estimates",
    component: Estimates,
  },
  {
    path: "/admin/invoices",
    component: Invoices,
  },
  {
    path: "/admin/recurring-invoices",
    component: Recurring_Invoices,
  },
  {
    path: "/admin/payments",
    component: Payments,
  },
  {
    path: "/admin/expenses",
    component: Expenses,
  },
  {
    path: "/admin/users",
    component: Users,
  },
  {
    path: "/admin/reports",
    component: Reports,
  },
  {
    path: "/admin/settings",
    component: Settings,
    children: [
      {
        path: "account-settings",
        component: Account_Settings,
      },
      {
        path: "company-info",
        component: Company_Info,
      },
      {
        path: "preferences",
        component: Preferences,
      },
      {
        path: "customization",
        component: Customization,
      },
      {
        path: "roles",
        component: Roles,
      },
      {
        path: "exchange-rate",
        component: Exchange_Rate,
      },
      {
        path: "notifications",
        component: Notifications,
      },
      {
        path: "tax-types",
        component: Tax_Type,
      },
      {
        path: "payment-modes",
        component: Payment_Mode,
      },
      {
        path: "custom-fields",
        component: Custom_Fields,
      },
      {
        path: "notes",
        component: Notes,
      },
      {
        path: "expense-categories",
        component: Expense_Categories,
      },
      {
        path: "mail-configuration",
        component: Mail_Configuration,
      },
      {
        path: "file-disk",
        component: File_Disk,
      },
      {
        path: "backup",
        component: Backup,
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
