import { Button, Form } from "react-bootstrap"


const FormComponents2 = ({ onChange }) => {
    return (
    
    <Form>
        <Form.Group>
            <Form.Label>¿Cómo crees que la inteligencia artificial cambiará el mercado laboral en los próximos 10 años?</Form.Label>
            <Form.Control onChange={onChange} name="Pregunta1" placeholder='Ingresa tu Respuesta' />
        </Form.Group>
        <Form.Group>
            <Form.Label>¿Qué impacto tiene la tecnología en las relaciones interpersonales?</Form.Label>
            <Form.Control onChange={onChange} name='Pregunta2' placeholder='Ingresa tu Respuesta' />
        </Form.Group>
        <Form.Group>
            <Form.Label>Explica cómo las redes sociales han transformado el periodismo.</Form.Label>
            <Form.Control onChange={onChange} name='Pregunta3' placeholder='Ingresa tu Respuesta' as='Textarea' />
        </Form.Group>
        <Form.Group>
            <Form.Label>¿De qué manera los dispositivos móviles han cambiado la manera en que consumimos información?</Form.Label>
            <Form.Control onChange={onChange} name='Pregunta4' placeholder='Ingresa tu Respuesta'  />
        </Form.Group>
        <Form.Group>
            <Form.Label>¿Cómo influye la digitalización en el sector educativo?</Form.Label>
            <Form.Control onChange={onChange} name='Pregunta5' placeholder='Ingresa tu Respuesta'  />
        </Form.Group>
        <Form.Group>
            <Form.Label>¿Cuál es el rol de la ética en el desarrollo tecnológico?</Form.Label>
            <Form.Control onChange={onChange} name='Pregunta6' placeholder='Ingresa tu Respuesta'  />
        </Form.Group>

        <Button type='submit'>Enviar</Button>
        <Button type="reset" variant="danger">Cancelar</Button>
    </Form>
    
    )



}


export default FormComponents2