import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

const Profile = () => {
    const { isLoading, data, isError, error, isFetching } = useQuery(
        "todo-list",
        () => {
            return axios("https://jsonplaceholder.typicode.com/todos/1");
        }
    );

    console.log(isLoading);
    console.log(data);

    return <div>{data?.data?.title}</div>;
};

export default Profile;

/**
 * Automatic Caching
 *
 * RQ caches the network request for five minutes.
 * So when you render the page again , the cached data is show to user and
 * in the background a new request is also send , to check if there is a change
 * in the data. If there is a change then the new data is updated. So we don't show a loading stage
 * to user on subsequent request and if the data has been updated then we fetch in background and updated the data.
 * There is a isFetching flag to know about the background fetch.
 * 
 * You can also change this default time of caching
 * 
 * {
 * 	cacheTime: 5000 // to change the cache time. | Default is 5 minutes
 * 	staleTime: 3000 // the time after which the background request should be send to check for new | Default is 0 seconds
 * }
 */



