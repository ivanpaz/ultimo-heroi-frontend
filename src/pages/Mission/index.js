import React, {useState, useEffect} from 'react';
import './styles.css';
import Element from './element.js';

import {Link} from 'react-router-dom';

function Mission(props){

    const [mounth, setMounth] = useState(0);

    useEffect(() => {
       
        setMounth(props.match.params.m);
        
        
      }, []);

      function BackBtn(){

      }
    


    return(

        <div className="container" >
            

            <div className="box-container">
                <div className="btns"><Link className="btn-back" to='/Menu' /></div>

                
                <div className="mission-mounth"><h1>MÊS {mounth}</h1> </div>
                
                <div className="mission-list">
                    <Element numberMission='1'/>

                    <Element numberMission='2'/>

                    <Element numberMission='3'/>

                    <Element numberMission='4'/>  
                    
                </div>

                
           
            </div>

            
            <div className="box-mission"></div> 
        </div>
    );

}

export default Mission;