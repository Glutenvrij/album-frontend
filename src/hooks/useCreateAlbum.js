export function useCreateAlbum() {
    async function postAlbum(url, album) {
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
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

    return postAlbum;
};