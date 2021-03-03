import React, {useState, useEffect} from 'react';
import api from '../../services/api';
import './styles.css';

function Element(props){
    const [teamId, setTeamId] = useState('');
    const [isDone, setIsDone] = useState(false);
    const [teamName, setTeamName] = useState('Carregando Esquadrão');
    const [teamCapitan, setTeamCapitan] = useState('Carregando Capitão');
    const [teamFeedback, setTeamFeedback] = useState('');
    const [data, setData] = useState(false);

    useEffect(() => {
        console.log(props.id_externo);
        setTeamId(props.id_externo);
        setIsDone(props.feito);
        loadTeam();
        
      }, []);

      const loadTeam = async () => {
         
        
        const response = await api.get(`getTeam`,  {
            headers: {
              'Authorization': props.id_externo
            }
          });

         
          setTeamName(response.data?.name ? response.data.name : "no team name");  
          setTeamCapitan(response.data?.capitan ? response.data.capitan : "no capitan name");
          setTeamFeedback(props.feedback ? props.feedback : "");
          if(response.data?.name && response.data?.capitan){
            setData(true);

          }
         
         
      }


    

    

    return(
      <>
      {data && (
        <tr>
          <td className="team">{teamName}</td>
          <td className="capitan">{teamCapitan}</td>
          <td className="feedback">{teamFeedback}</td>
          {isDone ? 
              <td className="done">SIM</td> :
              <td className="notDone">NÃO</td>
          } 
        </tr>
      )}
        
      </>
      
        
    );

}

export default Element;