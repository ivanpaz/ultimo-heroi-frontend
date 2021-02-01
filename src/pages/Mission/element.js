import React from 'react';
import './styles.css';

function Element(props){

    return(

        <div class="mission-element">
            <div className="mission-number">
                <div className="mission-title">Missão {props.numberMission}</div>
                <input type="checkbox" name="" id=""/>
            </div>
            <div className="mission-area">
                <textarea name="" id="" cols="30" rows="5"></textarea>
                <div className="anex-btn">anexar</div>
            </div>
        </div>
    );

}

export default Element;