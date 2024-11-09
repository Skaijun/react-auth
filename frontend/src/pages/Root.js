import { Outlet, useSubmit } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";
import { useEffect } from "react";
import { getAuthToken, getTokenDuration } from "../util/auth";

function RootLayout() {
  // const navigation = useNavigation();
  const submit = useSubmit();
  const token = getAuthToken();

  useEffect(() => {
    if (token === "EXPIRED") {
      submit(null, { action: "/logout", method: "POST" });
    }

    const tokenDuration = getTokenDuration();

    setTimeout(() => {}, tokenDuration);
  }, [token, submit]);

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
