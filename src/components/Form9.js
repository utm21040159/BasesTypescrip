import { Button, Form } from "react-bootstrap"

const FormComponents9 = ({ onChange }) => {
    return (
    
        <Form>
        <Form.Group>
            <Form.Label>¿Cómo influye la práctica regular de ejercicio en la salud mental?</Form.Label>
            <Form.Control onChange={onChange} name="Pregunta1" placeholder='Ingresa tu Respuesta' />
        </Form.Group>
        <Form.Group>
            <Form.Label>¿Qué factores psicológicos afectan el rendimiento de los atletas de alto rendimiento?</Form.Label>
            <Form.Control onChange={onChange} name='Pregunta2' placeholder='Ingresa tu Respuesta'  />
        </Form.Group>
        <Form.Group>
            <Form.Label>¿Cómo ha evolucionado la tecnología en el análisis del rendimiento deportivo?</Form.Label>
            <Form.Control onChange={onChange} name='Pregunta3' placeholder='Ingresa tu Respuesta' as='Textarea' />
        </Form.Group>
        <Form.Group>
            <Form.Label>¿De qué manera la nutrición influye en el rendimiento deportivo?</Form.Label>
            <Form.Control onChange={onChange} name='Pregunta4' placeholder='Ingresa tu Respuesta'  />
        </Form.Group>
        <Form.Group>
            <Form.Label>¿Cómo afecta el dopaje en la ética del deporte profesional?</Form.Label>
            <Form.Control onChange={onChange} name='Pregunta5' placeholder='Ingresa tu Respuesta'  />
        </Form.Group>
        <Form.Group>
            <Form.Label>¿Qué impacto tiene el deporte en la cohesión social y comunitaria?</Form.Label>
            <Form.Control onChange={onChange} name='Pregunta6' placeholder='Ingresa tu Respuesta'  />
        </Form.Group>

        <Button type='submit'>Enviar</Button>
        <Button type="reset" variant="danger">Cancelar</Button>
    </Form>
    
    )



}


export default FormComponents9