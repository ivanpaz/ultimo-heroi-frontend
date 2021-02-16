import React, {useEffect,useState} from 'react';
import './styles.css';
import {Link} from 'react-router-dom';
import boxImage from '../../assets/menu_box.png';
import MenuBar from './menu-bar';
import api from '../../services/api';
import Ranking from '../Lists/playersRank.js';

function Menu() {
    const [teamName, setTeamName] = useState('');
    const [teamCapitan, setTeamCapitan] = useState('');
    const [teamScore, setTemScore] = useState(0);
    const [showGeralScore, setShowGeralScore] = useState(false);
    

    useEffect(() => {
        loadScore();
        setTeamName(localStorage.getItem('userName'));
        setTeamCapitan(localStorage.getItem('userCapitan'));        
       
      });

      const loadScore = async () => {
        try{
            
           
            const response = await api.get(`score`,  {
                headers: {
                  'Authorization': localStorage.getItem('userId')
                }
              });
           
            console.log(response.data.length);
            localStorage.setItem('userScore', response.data.length * 100);
            setTemScore(localStorage.getItem('userScore'));

           
        } catch (err){
            //alert('falaha no login');  

        }

      };

      const showRanking = () =>{
        setShowGeralScore(true);
      };

      const hideRanking = () =>{
        setShowGeralScore(false);
      };

   
    return(

        <div className="container" >
            <div className="box-menu"  >
                <MenuBar />
                <div className="body">
                    
                    {!showGeralScore ? 
                        <div className="user-info">
                            
                            <div className="user-info-item user-info-left">
                                <div className="brasao" />
                            </div>
                            <div className="user-info-item user-info-right">
                                <div className="campo campo-menu">
                                    <div className="linha-texto-menu">Batalhão: <b>{teamName}</b></div>                                                            
                                </div>
                                <div className="campo campo-menu">
                                    <div className="linha-texto-menu">Capitão: <b>{teamCapitan}</b></div>                                                            
                                </div>
                                <div className="campo campo-menu">
                                    <div className="linha-texto-menu">Score: <b>{teamScore} pts</b></div>                                                            
                                </div>
                                
                                
                            </div>
                            <div className="btn-ranking" onClick={showRanking} />
                        </div>
                    :
                        <div className="user-info">
                            <Ranking />
                            <div className="btn-data" onClick={hideRanking} />
                         </div>
                        
                }
                    
                </div>

            </div>
           
        </div>


    );

}

export default Menu;