import React, {useState, useEffect} from 'react';
import './styles.css';
import Element from './element.js';
import Drive from './drive.js';
import api from '../../services/api';
import { gapi } from 'gapi-script';

import {Link} from 'react-router-dom';
import { getAllByTestId } from '@testing-library/react';

function Mission(props){

    const [mounth, setMounth] = useState('');
    const [missions, setMissions] = useState([]);

    useEffect(() => {    
        console.log(process.env.REACT_APP_GOOGLE_DRIVE_API_KEY);   
        setMounth(props.match.params.m);
        loadData();    
        
      }, []);

      function BackBtn(){

      }



      async function loadData(){
        //const url = `missions/${props.match.params.m}`;
        
        const response = await api.get(`missions/${props.match.params.m}`,  {
            headers: {
              'Authorization': localStorage.getItem('userId')
            }
          });

        //console.log(response.data);
        setMissions(response.data);
        
      }
    


    return(

        <div className="container" >
            

            <div className="box-container">
                <div className="right-area area">
                    <div className="btns">
                        <Link className="btn-back" to='/Menu' />
                    </div>

                   <div className="mission-content">
                    <div className="mission-mounth"><h1>MÊS {mounth}</h1> </div>
                        
                        <div className="mission-list">


                        {missions.length>0 ? missions.map((missionItem,i) => 
                            <Element numberMission='1' mission={missionItem}/> 
                           
                           
                        )
                    :
                    <h1>Sem missões disponiveis nesse mês</h1>
                    }
                             
                            
                        </div> 
                    </div> 
                    
                </div>
            </div>

            
            
        </div>
    );

}

export default Mission;