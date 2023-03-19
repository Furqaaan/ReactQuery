import { Link, NavLink } from "react-router-dom";

const Blog = () => {
    return (
        <div>
            <Link to="/about">About</Link>
            <NavLink to="/blog">Blog</NavLink>
        </div>
    );
};

export default Blog;
