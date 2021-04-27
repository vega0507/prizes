import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';


import Detail from './ProductDetail';

const useStyles = makeStyles((theme) =>({
  root: {
    //maxWidth: 445,
    //width: 310,
    //height: 380,
    
    [theme.breakpoints.up('xs')]: 
        {            
            width: [theme.breakpoints],
            height: 380,
        },
    [theme.breakpoints.up('md')]: 
    {            
        width: 140,
        height: 380,
    },

    [theme.breakpoints.up('md')]: 
    {            
        width: 240,
        height: 380,
    },


    [theme.breakpoints.up('lg')]: 
    {            
        width: 265,
        height: 380,
    },
    
    

  },
  media: {
    height: 120,
  },


  color: {
    [theme.breakpoints.up('xs')]: {
        backgroundColor: 'purple'
      },
    [theme.breakpoints.up('sm')]: {
        backgroundColor: 'red'
        },
[theme.breakpoints.up('md')]: 
    {
        backgroundColor: 'yellow'
    },
[theme.breakpoints.up('lg')]: 
    {            
        backgroundColor: 'blue'
    },
[theme.breakpoints.up('xl')]: 
    {            
        backgroundColor: 'green'
    }
}
}));

const options = [
    {
      name: 'Villa Aracely',
      imagen: '/static/images/cards/rancho1.jpg',
      description: 'It is located within the Las Veraneras Club, this being one of the best Resort in El Salvador, it is a very safe place, with permanent surveillance and controlled access.',
      price: '$100.00',
      photos: [
        {
            label: 'Villa Aracely - Pool',
            imgPath: '/static/images/cards/rancho1_1.jpg'
        },
        {
            label: 'Villa Aracely - Pool',
            imgPath: '/static/images/cards/rancho1_2.jpg'
        },
    ],
    },
    {
        name: 'Tierra Nuestra',
        imagen: '/static/images/cards/rancho2.jpg',
        description: 'Located in one of the safest and most private beaches. The house has 3 bedrooms all with A / C (6 beds). On the first floor there are 2 bedrooms with bathroom.',
        price: '$200.00',
        photos: [
            {
                label: 'Villa Aracely - Pool',
                imgPath: '/static/images/cards/rancho2_1.jpg'
            },
            {
                label: 'Villa Aracely - Pool',
                imgPath: '/static/images/cards/rancho2_2.jpg'
            },
            {
                label: 'Villa Aracely - Pool',
                imgPath: '/static/images/cards/rancho2_3.jpg'
            },
        ]
    },
    {
        name: 'Yokota',
        imagen: '/static/images/cards/rancho3.jpg',
        description: 'Spacious one acre beachfront property with landscaped grounds. The house has 3 levels (only 2 levels for guests). It has 4 bedrooms with air conditioning',
        price: '$300.00',
        photos: [
            {
                label: 'Villa Aracely - Pool',
                imgPath: '/static/images/cards/rancho2_1.jpg'
            },
            {
                label: 'Villa Aracely - Pool',
                imgPath: '/static/images/cards/rancho2_2.jpg'
            },
            {
                label: 'Villa Aracely - Pool',
                imgPath: '/static/images/cards/rancho2_3.jpg'
            },
        ]
    },
    {
        name: 'Sofia',
        imagen: '/static/images/cards/rancho4.jpg',
        description: 'Remodeled beachfront house, fully furnished and equipped. It has 4 bedrooms with A / C, 5 bathrooms, hammock ranch, deck facing the beach, swimming pool and parking.',
        price: '$40.00',
        photos: [
            {
                label: 'Villa Aracely - Pool',
                imgPath: '/static/images/cards/rancho1_1.jpg'
            },
            {
                label: 'Villa Aracely - Pool',
                imgPath: '/static/images/cards/rancho1_2.jpg'
            },
        ]
    },
    {
        name: 'PortoFino',
        imagen: '/static/images/cards/rancho5.jpg',
        description: 'You deserve to contemplate the sunrises and sunsets from a large terrace, with 180 ° views of the sea, located on one of the best beaches in El Salvador',
        price: '$140.00',
        photos: [
            {
                label: 'Villa Aracely - Pool',
                imgPath: '/static/images/cards/rancho1_1.jpg'
            },
            {
                label: 'Villa Aracely - Pool',
                imgPath: '/static/images/cards/rancho1_2.jpg'
            },
        ]
    },
    {
        name: 'El Almendro',
        imagen: '/static/images/cards/rancho6.jpg',
        description: 'Remodeled beachfront home. It has 4 bedrooms with A / C, 5 bathrooms, kitchen, dining room, BBQ, hammock ranch, deck in front of the beach, swimming pool and parking.',
        price: '$40.00',
        photos: [
            {
                label: 'Villa Aracely - Pool',
                imgPath: '/static/images/cards/rancho1_1.jpg'
            },
            {
                label: 'Villa Aracely - Pool',
                imgPath: '/static/images/cards/rancho1_2.jpg'
            },
        ]
    },
    {
        name: 'San Juan',
        imagen: '/static/images/cards/rancho7.jfif',
        description: 'Fully furnished and equipped. It is located in the middle of the private complex of La Bocana San Juan on Costa Azul beach. Offers peace of mind',
        price: '$40.00',
        photos: [
            {
                label: 'Villa Aracely - Pool',
                imgPath: '/static/images/cards/rancho1_1.jpg'
            },
            {
                label: 'Villa Aracely - Pool',
                imgPath: '/static/images/cards/rancho1_2.jpg'
            },
        ]
    },
    {
        name: 'Villa Surf',
        imagen: '/static/images/cards/rancho8.jpg',
        description: 'Shalpa\'s private beachfront home, gated community security. It has 3 bedrooms, 2 bathrooms, three rooms and 2 large balconies',
        price: '$40.00',
        photos: [
            {
                label: 'Villa Aracely - Pool',
                imgPath: '/static/images/cards/rancho1_1.jpg'
            },
            {
                label: 'Villa Aracely - Pool',
                imgPath: '/static/images/cards/rancho1_2.jpg'
            },
        ]
    },
  ];



export default function Main() {
  const classes = useStyles();  
  return (
    <div>
        <Grid container>    
            <Grid item xs={12}>
                <div className={classes.color}>el div</div>
            </Grid>

            <Grid item xs={1}/> 
            <Grid item xs={10}>    
                <Grid container spacing={2}>                   
                    {options.map((img, index) => (            
                    <Grid item xs={12} sm={6} md={4} lg={3} >
                        <Card className={classes.root} raised={true} key={img.name}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={img.imagen}
                                    title={img.name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2" color="primary" >
                                        {img.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {img.description}
                                    </Typography>
                                    <Typography gutterBottom variant="h6" component="h2" color="secondary" >
                                        {img.price}<LocalOfferIcon/>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>                                
                                <Detail item={img}/>
                                <Button size="small" color="primary">
                                    Book
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>        
                ))}
                
            </Grid>
            <Grid item xs={1}/> 
        </Grid>
        
    </Grid>
    </div>
  );
}
