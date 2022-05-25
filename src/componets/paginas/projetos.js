
import { useLocation } from 'react-router-dom'
import Mensagens from '../Layouts/Mensagens'

export default function Projetos(){

    const location = useLocation()

    let message = ''

    if(location.state){
        message = location.state.message
    }

    return(
        <div> 
            <h1> Meus Projetos </h1>

            {message && <Mensagens type="sucesso" msg={message} />}
        </div>
        
    )
}

