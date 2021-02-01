import React, {useEffect} from 'react';
import './styles.css';
import {Link} from 'react-router-dom';
import boxImage from '../../assets/menu_box.png';
import MenuBar from './menu-bar';

function Menu() {

    
   
    return(

        <div className="container" >
            <div className="box-menu"  >
                <MenuBar />
                <div className="body">
                    <div className="user-info">
                        <div className="user-info-left">
                            <img src="" alt="" className="brasao"/>
                        </div>
                        <div className="user-info-right">
                            <div className="info-team"></div>
                            <div className="info-capitan"></div>
                            <div className="info-score"></div>
                        </div>
                    </div>
                </div>

            </div>
           
        </div>


    );

}

export default Menu;