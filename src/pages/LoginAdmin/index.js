import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import api from '../../services/api';
import './styles.css';
import '../../global.css';




import backImage from '../../assets/login_comp.png';
import boxImage from '../../assets/login_box.png';

var bodyStyle = {
    width: "100%",
    height: "100%",
    backgroundImage: "url(" + backImage + ")",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  };


  

function Admin(){

    const [isWrong, setIsWrong] = useState(false);
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();


    async function handleLogin(e){
        e.preventDefault();
       
        try{
            console.log(name, password);
            const user = name;
            const response = await api.post('admin', {user, password});
           

            history.push('/adminMenu');
            
           
        } catch (err){
            //alert('falaha no login');
            setIsWrong(true);

        }

    }


    return(
        <div className="container" >
            <div className="background"style={bodyStyle}>
                <div className="topo" />
                <div className="formulario-login">
                    <form action="" className="form-container" onSubmit={handleLogin}>
                        
                            

                        
                            <div className="campo campo-login">
                                <div className="linha-texto">Capitão</div>
                                <input type="text" placeholder="Nome do Capitão"  value={name} onChange={e => setName(e.target.value)}  />                            
                            </div>

                            <div className="campo  campo-login">
                                <div className="linha-texto">Senha</div>
                                <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />                            
                            </div>
                        
                        

                        <button type="submit" class="btn-circle btn-login">Entrar</button>
                        {isWrong && <div className="error-login">Usuário e/ou senha incorreto.</div>     }
                                  
                        
                    </form>
                </div>               
            </div>
           
        </div>
       
        
    );
}

export default Admin;