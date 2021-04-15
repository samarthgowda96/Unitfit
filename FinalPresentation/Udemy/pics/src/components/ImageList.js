
import React from 'react';
const styles={
  background:'red',
  borderRadius: '10px',
  margin:'center',
  textAlign: 'center'

}
const stylesDescription={
  background:"yellow",
  borderRadius: '10px',
  margin:'center',
  textAlign: 'center'


}

const ImageList = props => {
  
  const images = props.images.map(({id, name, energy,carbohydrates,fat,protein,sodium,license_author,update_date}) => {
    return <>
    <div style={styles}>
    <h1 key={id}>{name}</h1></div><br></br>

    <div style={stylesDescription}><br></br>
    <h3 > Energy:{energy} Carbohydrates:{carbohydrates} Fat:{fat} Protein:{protein}  sodium:{sodium}</h3>  
    <br></br> <h4>license:{license_author} CreatedDate:{update_date}</h4>
    </div>
    </>

  });
  const images1 = props.images.map(({id,image_url_secondary}) => {
    return <>
    
    <img key={id}  src={image_url_secondary} />;
    
    
    </>

  });
  

  return <div>{images1}</div>;
  

};

export default ImageList;
