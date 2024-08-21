import { GlobalStyles } from "./config/global/GlobalStyles";
import { LightTheme } from "./config/theme/LightTheme";
import { AppRoutes } from "./routes/AppRoutes";

export default function App() {
  return (
    <LightTheme>
      <GlobalStyles />
      <AppRoutes />
    </LightTheme>
  );
}
