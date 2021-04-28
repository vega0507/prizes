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
import StarIcon from '@material-ui/icons/Star';

import Detail from './ProductDetail';

const useStyles = makeStyles((theme) =>({
  root: {
    //maxWidth: 445,
    //width: 310,
    //height: 380,
    
    [theme.breakpoints.up('xs')]: 
        {            
            width: [theme.breakpoints],
            height: 340,
        },
    [theme.breakpoints.up('md')]: 
    {            
        width: 140,
        height: 340,
    },

    [theme.breakpoints.up('md')]: 
    {            
        width: 240,
        height: 340,
    },


    [theme.breakpoints.up('lg')]: 
    {            
        width: 265,
        height: 340,
    },
    
    

  },
  media: {
    height: 220,    
    objectFit: 'fill'
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
      name: 'Termo Mickey',
      imagen: '/static/images/cards/termo_mickey.jfif',
      description: 'It is located within the Las Veraneras Club, this being one of the best Resort in El Salvador, it is a very safe place, with permanent surveillance and controlled access.',
      puntos: '100',
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
        imagen: '/static/images/cards/termo_negro.jfif',
        description: 'Located in one of the safest and most private beaches. The house has 3 bedrooms all with A / C (6 beds). On the first floor there are 2 bedrooms with bathroom.',
        puntos: '200',
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
        puntos: '300',
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
        puntos: '40',
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
        puntos: '140',
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
        puntos: '40',
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
        puntos: '40',
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
        puntos: '40',
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
               {/* <div className={classes.color}>el div</div>*/}
            </Grid>

            <Grid item xs={1}/> 
            <Grid item xs={10}>    
                <Grid container spacing={2}>                   
                    {options.map((img, index) => (            
                    <Grid item xs={12} sm={6} md={4} lg={3} >
                        <Card className={classes.root} raised={true} key={img.name}>
                            <CardActionArea >
                                <CardMedia
                                    component="img"
                                    classes={{media:classes.media, img: classes.img}}
                                    image={img.imagen}
                                    title={img.name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" color="primary" >
                                        {img.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {/*img.description*/}
                                    </Typography>
                                    <Typography gutterBottom variant="h6"   >
                                        <StarIcon color="secondary"/>{img.puntos} Puntos
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions> 
                                {/*                               
                                <Detail item={img}/>
                                <Button size="small" color="primary">
                                    Book
                                </Button>*/}
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
