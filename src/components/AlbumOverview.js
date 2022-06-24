import {Button, Grid} from "@material-ui/core";
import { AlbumCard } from "./AlbumCard";
import { useAlbums } from "../hooks/useAlbums";
import { Link } from "react-router-dom";
import { Card } from "@material-ui/core";
import React from 'react'


export function AlbumOverview() {

    const apiEndpoint = process.env.REACT_APP_API_URL;

    const albumsFetch = useAlbums(apiEndpoint, {data: null});
    const albums = albumsFetch.data;
    //console.log(albums);
    if(albums)
    {
    return (
        <Grid container spacing={3}>
            {albums.map((album) => (
                <Grid key={album.id}>
                    <AlbumCard  title={album.name} artist={album.artist} id={album.id}/>
                </Grid>
            ))}
            <Grid key={"new"}>
                <Card>
                    <Link to={`/new`} style={{ textDecoration: 'none' }}>
                        <Button size="large" variant={"contained"} color="primary">
                            Add
                        </Button>
                    </Link>
                </Card>
            </Grid>
        </Grid>
    );
            }
            else{
                return console.log("error in albumoverview");
            }
}
