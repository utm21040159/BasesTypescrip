
import { Card, Container } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
import FormComponents from './components/Forms';
import FormComponents2 from './components/Forms2';
import FormComponents3 from './components/Forms3';
import FormComponents4 from './components/Forms4';
import FormComponents5 from './components/Forms5';
import FormComponents6 from './components/Form6';
import FormComponents7 from './components/Form7';
import FormComponents8 from './components/Form8';
import FormComponents9 from './components/Form9';
import FormComponents10 from './components/Form10';





function App() {
  const [data, setData] = useState({})
 

  const onChange = (e) =>{
    e.preventDefault();
    const obj = data
    obj[e.target.name] = e.target.value
    setData(obj);

    //const com = compra 
    //com[e.target]
    console.log(data);

    
  }

  const onClick = () =>{
    console.log(data)
  }
  return (
   <Container>
    <Card className='mt-3'>
      <Card.Body>
        <Card.Title>
          Formulario para Dar de Alta un Usuario</Card.Title>
          <FormComponents onChange={onChange} onClick={onClick}/>
      </Card.Body>
      <Card.Body>
        <Card.Title>
          Tecnologia y sociedad</Card.Title>
          <FormComponents2 onChange={onChange} onClick={onClick}/>
      </Card.Body>
      <Card.Body>
        <Card.Title>
         Ciencia y Medio Ambiente</Card.Title>
          <FormComponents3 onChange={onChange} onClick={onClick}/>
      </Card.Body>

      <Card.Body>
        <Card.Title>
         Historia y Politica</Card.Title>
          <FormComponents4 onChange={onChange} onClick={onClick}/>
      </Card.Body>

      <Card.Body>
        <Card.Title>
         Economia y Fininzas </Card.Title>
          <FormComponents5 onChange={onChange} onClick={onClick}/>
      </Card.Body>

      <Card.Body>
        <Card.Title>
        Psicología y Salud Mental</Card.Title>
          <FormComponents6 onChange={onChange} onClick={onClick}/>
      </Card.Body>

      <Card.Body>
        <Card.Title>
        Filosofía y Ética</Card.Title>
          <FormComponents7 onChange={onChange} onClick={onClick}/>
      </Card.Body>

      <Card.Body>
        <Card.Title>
        Educación y Aprendizaje</Card.Title>
          <FormComponents8 onChange={onChange} onClick={onClick}/>
      </Card.Body>

      <Card.Body>
        <Card.Title>
        Deportes y Salud</Card.Title>
          <FormComponents9 onChange={onChange} onClick={onClick}/>
      </Card.Body>

      <Card.Body>
        <Card.Title>
        Ciencia y Tecnología</Card.Title>
          <FormComponents10 onChange={onChange} onClick={onClick}/>
      </Card.Body> 
      
    </Card>
   </Container>
  );
}

export default App;
