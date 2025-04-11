import React from "react";
import { AuthProvider } from "../src/contexts/AuthContext";
import { QueryClient, QueryClientProvider } from "react-query";
import "../src/style/style.scss";

// Create a client
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider
        apiUrl={process.env.NEXT_PUBLIC_API_URL}
        loginUrl="/api/auth"
        getUserDataUrl="/api/me"
        refreshUrl="/api/token/refresh"
        cookiesAge={86400}
      >
        {getLayout(<Component {...pageProps} />)}
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
