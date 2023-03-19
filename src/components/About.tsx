import axios from "axios";
import { useEffect, useState } from "react";

const About = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => {
            const { data } = await axios(
                "https://jsonplaceholder.typicode.com/todos/1"
            );
            setData(data);
        })();
    }, []);

    return <div>{data.title}</div>;
};

export default About;
