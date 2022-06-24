import { useAlbum } from "../hooks/useAlbum";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button, Grid } from "@material-ui/core";
import { AlbumCard } from "./AlbumCard";
import { AlbumForm } from "./AlbumForm";
import React from 'react'


export function AlbumDetail() {
    const apiEndpoint = process.env.REACT_APP_API_URL;
    const { id } = useParams();
    const albumFetchResponse = useAlbum(apiEndpoint, { isLoading: true, data: null }, id);
    const navigate = useNavigate();

    if (!albumFetchResponse[0].data || albumFetchResponse[0].isLoading) {
        return 'Loading...';
    }

    const album = albumFetchResponse[0].data;

    async function handleSubmit(album) {
        const promise = await albumFetchResponse[1](apiEndpoint, album); //updateAlbum function
        if (promise.ok) {
            navigate("/");
        }
    };

    async function handleRemove() {
        const promise = await albumFetchResponse[2](apiEndpoint, id);
        if (promise.ok) {
            navigate("/");
        }
    }

    return (
        <>
            <Grid container spacing={3}>
                <Grid item key={album.id}>
                    <AlbumCard title={album.name} artist={album.artist} id={album.id} imageurl={album.imageUrl} />
                </Grid>
                <Grid item key={"new"}>
                    <Link to={`/`} style={{ textDecoration: 'none' }}>
                        <Button size="large" variant={"contained"} color="primary">
                            Back
                        </Button>
                    </Link>
                </Grid>
            </Grid>
            <AlbumForm title={album.name} artist={album.artist} imageurl={album.imageUrl} onSubmit={handleSubmit} onRemove={handleRemove} submittext="Edit"/>
        </>
    );
}