import React from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import  { TitleContext } from '../contexts/TitleProvider.jsx';


    const ContactForm = styled.section`
     width: 100%;
     min-height: 900px;
    `;


const Home = () => {
    const { updateState } = useContext(TitleContext);
    const history = useHistory();
    
    const handleClick = (path) => {
        history.push(path)

    }
    return(
        <ContactForm>
            HER KOMMER KONTAKTSKJEMA
        </ContactForm>
    );
};

export default Home;