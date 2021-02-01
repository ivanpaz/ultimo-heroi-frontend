import React from 'react';
import './styles.css';
import {Link} from 'react-router-dom';

function MenuBar(){
    return(
        <div className="btn-bar">
                    <Link className="btn-mounth" to='/Mission/1' /> 
                    <Link className="btn-mounth" to='/Mission/2' /> 
                    <Link className="btn-mounth" to='/Mission/3' /> 
                    <Link className="btn-mounth" to='/Mission/4' />  
                    <Link className="btn-mounth" to='/Mission/5' /> 
                    <Link className="btn-mounth" to='/Mission/6' /> 
                    <Link className="btn-mounth" to='/Mission/7' /> 
                    <Link className="btn-mounth" to='/Mission/8' /> 
                    <Link className="btn-mounth" to='/Mission/9' /> 
                    <Link className="btn-mounth" to='/Mission/10' /> 
                    <Link className="btn-mounth" to='/Mission/11' /> 
                    <Link className="btn-mounth" to='/Mission/12' /> 
        </div>
    );

}

export default MenuBar;