// Leksjon 11
import React from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { TitleContext } from '../contexts/TitleProvider';


const List = styled.ul`

`;

const ListItem = styled.li`
display:flex;
`; 

const StyledListItem = styled.a`
margin-right: 19px;
&:first-child{
    font-weight: bold;
}

`;

const OfficeList = ({ list }) => {
    const { updateState } = useContext(TitleContext);
    const history = useHistory();

    
    const handleClick = (e) => {
    history.push("/kontorer/"+e)
   };

   
   
    return(

   <List>
       {list.map((listeobjekter) => (
        
        <ListItem key={listeobjekter.id} onClick={()=> {handleClick(`${listeobjekter.id}`); updateState(`Kontor ${listeobjekter.navn}`)}}>
             <StyledListItem>{listeobjekter.navn}</StyledListItem>
             <StyledListItem>{listeobjekter.adresse}</StyledListItem>
             <StyledListItem>{listeobjekter.telefon}</StyledListItem>
             <StyledListItem>{listeobjekter.epost}</StyledListItem>
         </ListItem>
         ))}

      
   </List>
    )
};

export default OfficeList;
