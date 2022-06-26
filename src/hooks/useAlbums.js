import { useState, useEffect } from "react";

export function useAlbums(url) {
    const [data, setData] = useState([]);

    async function getDataFromAPI(url) {
        try {
            const response = await fetch(url, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                }
              });
              //console.log(response);
              const data = await response.json();
              setData({
                data
            })
              //console.log(data);
              return data;
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        getDataFromAPI(url);
    }, []);

    return data;
};