import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

const Profile = () => {
    const { isLoading, data,isError,error } = useQuery("todo-list", () => {
        return axios("https://jsonplaceholder.typicode.com/todos/1");
    });

    console.log(isLoading);
    console.log(data);

    return <div>{data?.data?.title}</div>;
};

export default Profile;
