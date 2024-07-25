import React from "react";
import { AppProvider } from "./context/AppContext";

import UserProfileWithContext from "./UserProfileWithContext";

const App: React.FC = () => {
  return (
    <AppProvider>
      <UserProfileWithContext />
    </AppProvider>
  );
};

export default App;
