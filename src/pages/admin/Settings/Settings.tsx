import React from "react";
import { Outlet } from "react-router-dom";

const Settings: React.FC = () => {
  return (
    <div>
      Settings
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Settings;
