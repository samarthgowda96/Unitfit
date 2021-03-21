import React from 'react';
import { Item } from 'semantic-ui-react';
import classes from './RecipeCard.module.css';
//const paragraph = <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
const recipeCard = (props) => {

    return (

        <div className={classes.Item}>
            <Item.Group divided className={classes.Frame}>
                <Item >
                    <Item.Image className={classes.Img} size='tiny' src={props.img} />
                    <Item.Content  verticalAlign='middle'> {props.name}</Item.Content>
                </Item>
            </Item.Group>
            
        </div>
    );

};

export default recipeCard;