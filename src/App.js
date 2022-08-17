import { Routes, Route } from "react-router-dom";
import Authentication from "./routes/authentication/authentication.component";
import Home from "./routes/homepage/homepage.component";
import Navigation from "./routes/navigation/navigation.component";

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
