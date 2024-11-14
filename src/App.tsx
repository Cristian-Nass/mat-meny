import { useEffect } from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import useMenu from "./store/useMenu";
import MenuPage from "./pages/MenuPage";

function App() {
  const { getData } = useMenu();

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <>
      <NavigationBar />
      <MenuPage />
    </>
  );
}

export default App;
