import { Button, Form } from "react-bootstrap"

const FormComponents6 = ({ onChange }) => {
    return (
    
        <Form>
        <Form.Group>
            <Form.Label>¿Cómo influyen las redes sociales en la autoestima de los adolescentes?</Form.Label>
            <Form.Control onChange={onChange} name="Pregunta1" placeholder='Ingresa tu Respuesta' />
        </Form.Group>
        <Form.Group>
            <Form.Label>Explica la relación entre el estrés y las enfermedades físicas.</Form.Label>
            <Form.Control onChange={onChange} name='Pregunta2' placeholder='Ingresa tu Respuesta' as='Textarea' />
        </Form.Group>
        <Form.Group>
            <Form.Label>¿Qué factores psicológicos influyen en la toma de decisiones?</Form.Label>
            <Form.Control onChange={onChange} name='Pregunta3' placeholder='Ingresa tu Respuesta'  />
        </Form.Group>
        <Form.Group>
            <Form.Label>¿De qué manera la pandemia afectó la salud mental a nivel global?</Form.Label>
            <Form.Control onChange={onChange} name='Pregunta4' placeholder='Ingresa tu Respuesta'  />
        </Form.Group>
        <Form.Group>
            <Form.Label>¿Cómo se puede mejorar el bienestar emocional en el entorno laboral?</Form.Label>
            <Form.Control onChange={onChange} name='Pregunta5' placeholder='Ingresa tu Respuesta'  />
        </Form.Group>
        <Form.Group>
            <Form.Label>¿Qué impacto tiene la meditación en el control de la ansiedad?</Form.Label>
            <Form.Control onChange={onChange} name='Pregunta6' placeholder='Ingresa tu Respuesta'  />
        </Form.Group>

        <Button type='submit'>Enviar</Button>
        <Button type="reset" variant="danger">Cancelar</Button>
    </Form>
    
    )



}


export default FormComponents6