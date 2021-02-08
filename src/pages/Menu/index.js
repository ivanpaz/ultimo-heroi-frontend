import React, {useEffect,useState} from 'react';
import './styles.css';
import {Link} from 'react-router-dom';
import boxImage from '../../assets/menu_box.png';
import MenuBar from './menu-bar';

function Menu() {
    const [teamName, setTeamName] = useState('');
    const [teamCapitan, setTeamCapitan] = useState('');
    const [teamScore, setTemaScore] = useState();

    useEffect(() => {

        setTeamName(localStorage.getItem('userName'));
        setTeamCapitan(localStorage.getItem('userCapitan'));
        setTemaScore(localStorage.getItem('userScore'));
       
      });
   
    return(

        <div className="container" >
            <div className="box-menu"  >
                <MenuBar />
                <div className="body">
                    <div className="user-info">
                        <div className="user-info-item user-info-left">
                            <img src="https://drive.google.com/uc?id=1y3VgFeEAnSqvFqhLye5w6lOFxuD330wC" alt="" className="brasao"/>
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
                    </div>
                </div>

            </div>
           
        </div>


    );

}

export default Menu;