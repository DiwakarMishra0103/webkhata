import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { Admin_routes } from "./admin_protect/admin_routes";
import { RouteType } from "../interface/RouteType";
import { User_routes } from "./user_protect/user_routes";
import Admin_Protected from "./admin_protect/Admin_Protected";
import User_Protected from "./user_protect/User_Protected";
import { Un_routes } from "./un_protect/un_routes";

const RoutesList = () => {
  return (
    <>
      <Routes>
        {Un_routes.map((routeObj: RouteType, index: number) => {
          return (
            <Fragment key={index}>
              <Route
                path={routeObj.path}
                element={
                  <React.Suspense fallback={<>loading...</>}>
                    <routeObj.component />
                  </React.Suspense>
                }
              />
            </Fragment>
          );
        })}

        {Admin_routes.map((routeObj: RouteType, index: number) => {
          return (
            <Fragment key={index}>
              <Route
                path={routeObj.path}
                element={
                  <React.Suspense fallback={<>loading...</>}>
                    <Admin_Protected>
                      <routeObj.component />
                    </Admin_Protected>
                  </React.Suspense>
                }
              >
                {/* nested children routes */}

                {routeObj.children?.map(
                  (nestedObj: RouteType, index: number) => {
                    return (
                      <Fragment key={index}>
                        <Route
                          path={nestedObj.path}
                          element={
                            <React.Suspense fallback={<>loading....</>}>
                              <Admin_Protected>
                                <nestedObj.component />
                              </Admin_Protected>
                            </React.Suspense>
                          }
                        />
                      </Fragment>
                    );
                  }
                )}
              </Route>
            </Fragment>
          );
        })}

        {User_routes.map((routeObj: RouteType, index: number) => {
          return (
            <Fragment key={index}>
              <Route
                path={routeObj.path}
                element={
                  <React.Suspense fallback={<>loading...</>}>
                    <User_Protected>
                      <routeObj.component />
                    </User_Protected>
                  </React.Suspense>
                }
              >
                {/* nested children routes */}

                {routeObj.children?.map(
                  (nestedObj: RouteType, index: number) => {
                    return (
                      <Fragment key={index}>
                        <Route
                          path={nestedObj.path}
                          element={
                            <React.Suspense fallback={<>loading....</>}>
                              <User_Protected>
                                <nestedObj.component />
                              </User_Protected>
                            </React.Suspense>
                          }
                        />
                      </Fragment>
                    );
                  }
                )}
              </Route>
            </Fragment>
          );
        })}
      </Routes>
    </>
  );
};

export default RoutesList;
