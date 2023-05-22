import CreateUser from "./pages/createUser";
import CreateExercise from "./pages/createExercise";
import Navbar from "./components/navbar";
import MainRoutes from "./routes/mainRoutes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  );
}

export default App;
