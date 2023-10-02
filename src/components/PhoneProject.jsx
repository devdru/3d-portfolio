import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import '../assets/css/PhoneProject.css'
import Cards from './card'
import Tilt from 'react-tilt';
import { Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../assets/css/main.css'
export default function PhoneProject() {
    return (
        <>
        <h1 style={{margin:"10% 0 0 10%"}} id='h1'>PROJECTS</h1>
        <div style={{ display: "flex", flexWrap: 'wrap', margin: "10% 10%", justifyContent: "space-between" }}>
            {Cards.map((card) => (
                <Tilt options={{ max: 30, speed: 400, perspective: 1000 }}>
                        <Card id="pcard" >
                            <Box  sx={{display:"flex",justifyContent:"space-between"}}>
                            <CardHeader sx={{color:"white",fontSize:"5px"}}
                        title= {card.title}
                    />
                    <a href={card.git} ><GitHubIcon sx={{color:"white",margin:"30% 20px 0 0"}} /></a>
                            </Box>
                    <CardMedia
                        component="img"
                        height="194"
                        image= {card.img}
                        alt="Paella dish"
                    />
                </Card>
                </Tilt>
            ))}
        </div>
        </>
    );
}