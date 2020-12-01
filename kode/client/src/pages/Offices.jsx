import React, {useState} from 'react';
import styled from 'styled-components';




const Offices = () => {
        const [offices, setOffices] = useState([]);
        const [location, setLocation] = useState();
        console.log("inni offices");
        
        return (<section>
                    {offices && offices.map((office) => (
                        <p key={office.navn}>
                            <p>{office.navn}</p>
                            <p>{office.adresse}</p>
                            <p>{office.telefonnummer}</p>
                            <p>{office.epost}</p>
                        </p>
                ))}

        </section>);
};

export default Offices;

// const createOffices = async () => {
//     await loop();
    
// };

// const loop = () => {
// for(let i = 0; i < 23; i++){   
//     if( i <= 8 ) {
//         setLocation("Fredrikstad");

//     }
//     else if( i >= 9 && i <= 13 ) {
//         setLocation("Sarpsborg");
        
//     } 
//     else if( i >= 14 && i <= 18 ) {
//         setLocation("Moss");
        
//     } 
//     else {
//         setLocation("Oslo");
        
//     }
    
//     const officeData = {
//         id: i,
//         navn: "Rørlegger " + i,
//         adresse: "Rørleggerveien " + i,
//         telefonnummer: "69 99 00 00",
//         epost: location + i + "@epost.no" 
//     }

//     setOffices([officeData, ...offices])
   
// }
// };
