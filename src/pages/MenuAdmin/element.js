import React, {useState, useEffect} from 'react';
import api from '../../services/api';
import './styles.css';

function Element(props){
    const [teamId, setTeamId] = useState('');
    const [isDone, setIsDone] = useState(false);
    const [teamName, setTeamName] = useState('Carregando Esquadrão');
    const [teamCapitan, setTeamCapitan] = useState('Carregando Capitão');

    useEffect(() => {
        console.log(props.id_externo);
        setTeamId(props.id_externo);
        setIsDone(props.feito);
        loadTeam();
        
      }, []);

      const loadTeam = async () => {
         
        console.log("id", props.id_externo);
        const response = await api.get(`getTeam`,  {
            headers: {
              'Authorization': props.id_externo
            }
          });

          
          setTeamName(response.data.name);
          setTeamCapitan(response.data.capitan);
          console.log(isDone);
         
      }


    

    

    return(

        <tr>
            <td>{teamName}</td>
            <td>{teamCapitan}</td>
            {isDone ? 
                <td className="done">SIM</td> :
                <td className="notDone">NÃO</td>
            }
            
        </tr>
    );

}

export default Element;