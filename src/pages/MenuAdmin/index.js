import React, {useEffect,useState} from 'react';
import './styles.css';
import {Link} from 'react-router-dom';
import api from '../../services/api';
import Ranking from '../Lists/playersRank.js';
import Element from './element.js';
import logo from '../../assets/loading.gif';

function MenuAdmin() {
   const [month, setMonth] = useState(0);
   const [mission, setMission] = useState(0); 
   const [tableData, setTableData] = useState([]);
   const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
                   
        //loadMissionList();
      });

      const loadMissionList = async () => {
          setIsLoading(true);
        try{      
           
            const response = await api.post(`listTeamsByMountMission`, {
                numMonth: month,
                numMission: mission
            
            });

            console.log("aaa",response.data);
           setTableData(response.data);
            

           
        } catch (err){
            //alert('falaha no login');  

        }
        setIsLoading(false);

      };

      const updateMonth = (e) =>{
        console.log("mes",e.target.value); 
        setMonth(e.target.value);
      };

      const updateMission = (e) =>{
        console.log("mission",e.target.value); 
        setMission(e.target.value);
      };

      const handleLoading = () =>{
        setIsLoading(!isLoading);
      };

      

   
    return(

        <div className="container" >
            <div className="box-menu-admin"  >
                
                <div className="body">
                    <div className="btn-admin">
                        <select className="mouth-list admin-item" onChange={updateMonth}>
                            <option selected value="0"></option>
                            <option value="1">Janeiro</option>
                            <option value="2">Fevereiro</option>
                            <option value="3">Março</option>
                            <option value="4">Abril</option>
                            <option value="5">Maio</option>
                            <option value="6">Junho</option>
                            <option value="7">Julho</option>
                            <option value="8">Agosto</option>
                            <option value="9">Setembro</option>
                            <option value="10">Outubro</option>
                            <option value="11">Novembro</option>
                            <option value="12">Dezembro</option>                        
                        </select>

                        <select className="missions-list admin-item" onChange={updateMission} >
                            <option value="0"></option>
                            <option value="1">Missão 1</option>
                            <option value="2">Missão 2</option>
                            <option value="3">Missão 3</option>
                            <option value="4">Missão 4</option>
                            <option value="5">Missão 5</option>                                                
                        </select>

                        <div className="btn-load-table admin-item" onClick={loadMissionList}>Carregar</div>

                    </div>
                    {!isLoading ?
                    <div className="tabela">
                        <table class="w3-table w3-striped">
                            <thead>
                                <td className="team">Esquadrão</td>
                                <td className="capitan">Capitão</td>
                                <td className="feedback">Feedback</td>
                                <td className="isDone">Participou</td>
                            </thead>
                            <tbody>
                            {tableData.map((missionItem,i) => 
                                <Element id_externo={missionItem.team_id} feito={missionItem.done} toggleLoading={handleLoading} feedback={missionItem.feedback}/>    
                            )}
                            
                            </tbody>
                        </table>
                    </div>
                    :
                    <img src={logo} alt="loading..." />
                
                
                }
                    
                   
                    
                </div>

            </div>
           
        </div>


    );

}

export default MenuAdmin;