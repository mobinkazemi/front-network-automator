import TopNavigation from "../../components/TopNavigation";
import { contentOfNotLoggedIn } from "./functions/viewFunctions/on_not_logged_in";

const loggedIn = false;
const HomePage = () => {
  return (
    <>
      <TopNavigation></TopNavigation>
      {loggedIn ? null : contentOfNotLoggedIn()}
    </>
  );
};

export default HomePage;
