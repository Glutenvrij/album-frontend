import { useState, useEffect } from "react";

export function useAlbum(url, defaultResponse, id) {
    const [data, setData] = useState(defaultResponse);

    async function getDataFromAPI(url) {
        try {
            const res = await fetch(url + `/${id}`);
            const data = await res.json();
            setData({
                isLoading: false,
                data
            })
        } catch (e) {
            console.error(e);
        }
    }

    async function updateAlbum(url, album) {
        try {
            const response = await fetch(url + `/put/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    id: id,
                    name: album.name,
                    artist: album.artist,
                    imageUrl: album.imageUrl
                })
            });
            
            return response;
        } catch (e) {
            console.error(e);
        }
    }

    async function removeAlbum(url, id) {
        try {
            const response = await fetch(url + `/delete/${id}`, {
                method: "DELETE"
            });

            return response;
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        getDataFromAPI(url)
    }, []);

    return [data, updateAlbum, removeAlbum];
};