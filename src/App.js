import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './componets/paginas/home'
import Empresa from './componets/paginas/empresa'
import Contato from './componets/paginas/contato'
import NovoProjeto from './componets/paginas/novoProjeto'
import Projetos from './componets/paginas/projetos'


import Container from './componets/Layouts/Container'
import Navbar from './componets/Layouts/Navbar'
import Footer from './componets/Layouts/Footer'




export default function App() {
  return (
  <Router>
    <Navbar />
    <Container customClass="alturaMinima">
      <Routes>
          <Route path="/" exact element= {<Home />} />
          <Route path="/empresa" exact element={<Empresa />}/>     
          <Route path="/contato" exact element={<Contato />}/>   
          <Route path="/novoprojeto" exact element={<NovoProjeto />}/>
          <Route path="/projetos" exact element={<Projetos />}/>
      </Routes>
    </Container>
    <Footer />
  </Router>
  );
}


