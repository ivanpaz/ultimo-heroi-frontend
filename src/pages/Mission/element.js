import React, {useState, useEffect} from 'react';
import api from '../../services/api';
import './styles.css';

function Element(props){
    const [mission, setMission] = useState({});

    const [newDone, setDone] = useState(false);
    const [newFfeedback, setFeedback] = useState('');

    useEffect(() => {
        
       setMission(props.mission);
       setDone(props.mission.done);
       setFeedback(props.mission.feedback);
       console.log(props.mission);
        
      }, []);

    const onItemChecked = (e)=>{
        setDone(e.target.checked);
    };

    const onTextChange =(e) => {
        setFeedback(e.target.value);        
    };

    

    async function UpdateMIssion(){
        
        const url = `missions/update`;
        console.log(props.mission._id);
        console.log(newDone);
        console.log(newFfeedback);
        const response = await api.get(`missions/update`,  { headers:{},
            data: {
                done: newDone,
	            feedback: newFfeedback,
	            anex: 'sem link', 
	            _id: props.mission._id
            },
          });

        console.log(response.data);
       
        
      }

    return(

        <div class="mission-element">
            <div className="mission-number">
                <div className="mission-title">Missão {mission.numMission}</div>
                <input type="checkbox" checked={newDone} onChange={onItemChecked}/>
            </div>
            <div className="mission-area">
                <textarea name="" id="" cols="30" rows="5" value={newFfeedback} onChange={onTextChange}/>
                <div className="mission-btns">
                    <div className="anex-btn">anexar</div>
                    <div className="save-btn" onClick={UpdateMIssion}></div>
                </div>
                
            </div>
        </div>
    );

}

export default Element;