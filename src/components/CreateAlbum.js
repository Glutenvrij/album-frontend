import { AlbumForm } from "./AlbumForm";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";
import { useCreateAlbum } from "../hooks/useCreateAlbum";
import React from 'react'


export function CreateAlbum() {
    const apiEndpoint = process.env.REACT_APP_API_URL;
    const createAlbum = useCreateAlbum();
    const navigate = useNavigate();

    async function handleSubmit(album) {
        const promise = await createAlbum(apiEndpoint, album); //create album function
        if (promise.ok) {
            navigate("/");
        }
    };

    return (
        <>
            <Link to={`/`} style={{ textDecoration: 'none' }}>
                <Button size="large" variant={"contained"} color="primary">
                    Back
                </Button>
            </Link>

            <AlbumForm title="" artist="" imageurl="" onSubmit={handleSubmit} submittext="Add"/>
        </>
    );
}