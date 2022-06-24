import { useState, useEffect } from "react";

// export function useAlbums(endpoint) {
//     const [albums, setAlbums] = useState([]);
    
//     useEffect(() => {
//         const request = fetch(endpoint, {
//                          method: 'GET',
//                          mode: 'no-cors',
//                          headers: {
//                              "Access-Control-Allow-Origin": "*"
//                          }
//                        });

//         request
//             .then((apiResponse) => {
//                 if (!apiResponse.ok) {
//                     console.error(apiResponse.statusText);
//                     return;
//                 }

//                 return apiResponse.json();
//             })
//             .then((apiResult) => {
//                 setAlbums(apiResult);
//             });
//     }, []);
//     console.log(albums);
//     return albums;
// };
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
    }, [data]);

    return data;
};