import { Button, Form } from "react-bootstrap"

const FormComponents8 = ({ onChange }) => {
    return (
    
        <Form>
        <Form.Group>
            <Form.Label>¿Qué papel juega la motivación intrínseca en el aprendizaje?</Form.Label>
            <Form.Control onChange={onChange} name="Pregunta1" placeholder='Ingresa tu Respuesta' />
        </Form.Group>
        <Form.Group>
            <Form.Label>¿Cómo pueden las nuevas tecnologías mejorar el proceso de enseñanza-aprendizaje?</Form.Label>
            <Form.Control onChange={onChange} name='Pregunta2' placeholder='Ingresa tu Respuesta'  />
        </Form.Group>
        <Form.Group>
            <Form.Label>¿De qué manera el aprendizaje colaborativo fomenta el desarrollo de habilidades blandas?</Form.Label>
            <Form.Control onChange={onChange} name='Pregunta3' placeholder='Ingresa tu Respuesta' as='Textarea' />
        </Form.Group>
        <Form.Group>
            <Form.Label>¿Cómo influyen los estilos de aprendizaje en la adquisición de conocimientos?</Form.Label>
            <Form.Control onChange={onChange} name='Pregunta4' placeholder='Ingresa tu Respuesta'  />
        </Form.Group>
        <Form.Group>
            <Form.Label>¿Qué importancia tiene el desarrollo del pensamiento crítico en la educación?</Form.Label>
            <Form.Control onChange={onChange} name='Pregunta5' placeholder='Ingresa tu Respuesta'  />
        </Form.Group>
        <Form.Group>
            <Form.Label>¿Cómo puede la educación emocional contribuir a la formación integral de los estudiantes?
            </Form.Label>
            <Form.Control onChange={onChange} name='Pregunta6' placeholder='Ingresa tu Respuesta'  />
        </Form.Group>

        <Button type='submit'>Enviar</Button>
        <Button type="reset" variant="danger">Cancelar</Button>
    </Form>
    
    )



}


export default FormComponents8