import { Toaster } from "sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Router } from "@/routes/sections";

// ----------------------------------------------------------------------

const queryClient = new QueryClient();

// ----------------------------------------------------------------------

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster richColors toastOptions={{ className: 'font-sans' }} />
      <Router />
    </QueryClientProvider>
  );
}
