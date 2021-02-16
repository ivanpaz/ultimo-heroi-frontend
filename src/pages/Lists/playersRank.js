import api from '../../services/api';
import { DataGrid } from '@material-ui/data-grid';
import React, {useState, useEffect} from 'react';






const columns = [
  { field: 'team', headerName: 'Esquadrão', width: 150,sortable: false },
  { field: 'capitan', headerName: 'Capitão', width: 230,sortable: false },
  { field: 'score', headerName: 'Pontuação', width: 150,sortable: false }
];



const rows = [
  {id: "1", team: "Time 1", capitan: 'Snow', score: 35 },
  {id: "2", team: "Time 2", capitan: 'Ivan', score: 135 },
  {id: "3", team: "Time 3", capitan: 'Jonny', score: 235 },
 
];

let tmpTimes = [];

function Ranking(props){

    const [showTimes, setShowTimes] = useState(false);
    const [teams, setTeams] = useState(rows);

    useEffect(() => {        
        
        loadData();    
        
      }, []);

    

      async function loadData(){
        //const url = `missions/${props.match.params.m}`;
        
        const response = await api.get(`time`);

        console.log(response.data);
        const listTimes = response.data;
        
       listTimes.forEach(obj => {
        
            const newRow = {
                id: obj._id, 
                team: obj.name,
                capitan: obj.capitan,
                score: obj.score
            };
           
            tmpTimes = [...tmpTimes, newRow];
           
            
            
        });
        console.log("2",tmpTimes);
       setTeams(tmpTimes);
       console.log(teams);

      }
    



  return (
    
    <div style={{ height: '75vh', width: '72vw' }}>
      <DataGrid rows={tmpTimes} columns={columns} pageSize={150}  />
    </div>
  );
}

export default Ranking;
