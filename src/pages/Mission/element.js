import React, {useState, useEffect} from 'react';
import './styles.css';

function Element(props){

    useEffect(() => {
       
        

        console.log(props.mission);
        
        
        
      }, []);

    return(

        <div class="mission-element">
            <div className="mission-number">
                <div className="mission-title">Missão {props.mission.numMission}</div>
                <input type="checkbox" name="" id=""/>
            </div>
            <div className="mission-area">
                <textarea name="" id="" cols="30" rows="5">{props.mission.feedback}</textarea>
                <div className="anex-btn">anexar</div>
            </div>
        </div>
    );

}

export default Element;