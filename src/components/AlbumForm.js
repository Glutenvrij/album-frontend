import { useForm, Controller } from "react-hook-form";
import { Button } from "@material-ui/core";
import { useState } from "react";
import React from 'react'


export const AlbumForm = (props) => {
    const [album] = useState();

    const { handleSubmit, control } = useForm({
        defaultValues: album
            ? album
            : {
                name: props.title,
                artist: props.artist,
                imageUrl: props.imageurl
            }
    });

    return (
        <form onSubmit={handleSubmit(data => props.onSubmit(data))}>
            <label>
                Name:
                <Controller
                    name="name"
                    control={control}
                    render={({ field }) => <input {...field} />}
                    />
            </label>
            <label>
                Artist:
                <Controller
                    name="artist"
                    control={control}
                    render={({ field }) => <input {...field} />}
                />
            </label>
            <label>
                Image URL:
                <Controller
                    name="imageUrl"
                    control={control}
                    render={({ field }) => <input {...field} />}
                />
            </label>
            <Button type="submit" variant="contained" color="primary">
                {props.submittext}
            </Button>
            {props.onRemove !== undefined ?
                <Button type="button" variant="contained" color="primary" onClick={() => props.onRemove()}>
                    Delete
                </Button> : <></>
            }
        </form>
    )
}