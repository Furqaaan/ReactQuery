import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";

import About from "./components/About";
import Blog from "./components/Blog";
import Error from "./components/Error";
import Home from "./components/Home";
import Profile from "./components/Profile";

const App = () => {
    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
};

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" errorElement={<Error />}>
            <Route index element={<Home />} />
            <Route path="about/:id?" element={<About />} />
            <Route path="profile" element={<Profile />} />
            <Route path="blog" element={<Blog />} />
        </Route>
    )
);

export default App;
