// Leksjon 11
import React, {useContext} from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { TitleContext } from '../contexts/TitleProvider.jsx';
import { SingleOfficeContext } from '../contexts/SingleOfficeProvider.jsx';

const Grid = styled.div`
display: grid; 
grid-template-columns: repeat(4, 1fr);
grid-column-gap: 50px;
grid-row-gap: 40px;
`;

const GridCard = styled.div`
border: 1px solid black;
`; 

const CardItem = styled.ul`
&:first-child{
    font-weight: bold;
}

`;

const OfficeGrid = ({ list }) => {
    const { updateSingleOffice } = useContext(SingleOfficeContext);
    const {updateState} = useContext(TitleContext)
    const history = useHistory();

   const handleClick = (e) => {
    history.push("/kontorer/"+e)
   };





   return(
   <Grid>
       {list.map((listeobjekter) => (
        
         <GridCard key={listeobjekter.id} value={listeobjekter.id} onClick={()=> {handleClick(`${listeobjekter.id}`); updateSingleOffice(listeobjekter.epost); updateState(`Kontor ${listeobjekter.navn}`)}}>
             <CardItem>{listeobjekter.navn}</CardItem>
             <CardItem>{listeobjekter.adresse}</CardItem>
             <CardItem>{listeobjekter.telefon}</CardItem>
             <CardItem>{listeobjekter.epost}</CardItem>
         </GridCard>
         ))}

      
   </Grid>
   )};

export default OfficeGrid;
