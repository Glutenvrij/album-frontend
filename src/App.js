import './App.css';
import React from 'react'

import {AppBar, Container, Link, makeStyles, Toolbar, Typography} from "@material-ui/core";
import {HashRouter, Routes, Route} from "react-router-dom";
import { AlbumOverview } from "./components/AlbumOverview";
import { AlbumDetail } from "./components/AlbumDetail";
import { CreateAlbum } from "./components/CreateAlbum";
 
const useStyles = makeStyles(theme =>({
    toolbar: theme.mixins.toolbar
}));

function App() {
    const classes = useStyles();

    return (
        <div className="App">
            <AppBar position={"sticky"}>
                <Toolbar>
                    <Typography variant="h6">
                        <Link href="/" color="inherit">Album Api</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.toolbar}/>
                <Container>
                    <HashRouter>
                        <Routes>
                            <Route path ="/" element={<AlbumOverview/>} />
                            <Route path="/new" element={<CreateAlbum/>} /> {/*CreateAlbum*/}
                            <Route path="/:id" element={<AlbumDetail/>} />
                        </Routes>
                    </HashRouter>
                </Container>
            </main>
        </div>
    );
}

export default App;
