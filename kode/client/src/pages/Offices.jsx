import React, {useState} from 'react';
import styled from 'styled-components';
import OfficeData from './OfficeData';
import OfficeGrid from '../components/OfficeGrid.jsx'
import OfficeList from '../components/OfficeList.jsx'
import { SingleOfficeContext } from '../contexts/SingleOfficeProvider.jsx';
import { useContext } from 'react';

const Offices = () => {
        const [offices, setOffices] = useState(OfficeData);
        const [filter, setFilter] = useState(filter ? filter : OfficeData);
        const [gridOrView, setGridOrView] = useState("1");
        
        const handleFilter = (e) => {
            if(e.target.value === "0"){
                setFilter(offices);
                return;
            }
            const filteredOffices = offices.filter((office) => office.kategori === e.target.value);
            setFilter(filteredOffices);
        }

        const switchMethod = (view) => {
            setGridOrView(view.target.value)
        }

        return (
        <section>
            <select id="selectFilter" onChange={handleFilter}>
                <option value="0">Filter</option>
                <option value="1">Fredrikstad</option>
                <option value="2">Sarpsborg</option>
                <option value="3">Moss</option>
                <option value="4">Oslo</option>
            </select>
            <select id="selectView" onChange={switchMethod}>
                <option value="1" >Grid</option>
                <option value="2">List</option>
            </select>
                {(() => {
                   switch (gridOrView) {
                    case "1":
                        return<OfficeGrid list={filter} />;
                    case "2":
                        return<OfficeList list={filter} />;
                    default:
                        return<OfficeGrid list={filter} />;
                } 
                })()}
        </section>
        );
};

export default Offices;


