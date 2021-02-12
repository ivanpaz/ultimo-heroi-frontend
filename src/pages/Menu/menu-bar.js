import React from 'react';
import './styles.css';
import {Link} from 'react-router-dom';

function MenuBar(){
    return(
        <div className="btn-bar">
                    <Link className="btn-mounth m1" to='/Mission/1' /> 
                    <Link className="btn-mounth m2" to='/Mission/2' /> 
                    <Link className="btn-mounth m3" to='/Mission/3' /> 
                    <Link className="btn-mounth m4" to='/Mission/4' />  
                    <Link className="btn-mounth m5" to='/Mission/5' /> 
                    <Link className="btn-mounth m6" to='/Mission/6' /> 
                    <Link className="btn-mounth m7" to='/Mission/7' /> 
                    <Link className="btn-mounth m8" to='/Mission/8' /> 
                    <Link className="btn-mounth m9" to='/Mission/9' /> 
                    <Link className="btn-mounth m10" to='/Mission/10' /> 
                    <Link className="btn-mounth m11" to='/Mission/11' /> 
                    <Link className="btn-mounth m12" to='/Mission/12' /> 
        </div>
    );

}

export default MenuBar;