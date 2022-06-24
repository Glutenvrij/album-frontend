import logo from '../logo.svg'
import { Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import React from 'react'


export const AlbumCard = (properties) => {
    return (
        <Card>
            <CardActionArea>
                <Link to={`/${properties.id}`} style={{ textDecoration: 'none' }}>
                    <CardHeader title={properties.title} subheader={properties.artist}/>
                    <CardMedia image={logo} title={properties.title}/>
                    <CardContent>
                        <Typography variant={"body2"} color={"textSecondary"} component={"p"}>
                            This is a test description of the album.<br /><br />
                            Image url: {properties.imageurl}
                        </Typography>
                    </CardContent>
                </Link>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Edit
                </Button>
            </CardActions>
        </Card>
    );
}
