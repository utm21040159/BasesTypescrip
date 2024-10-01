import { Button, Form } from "react-bootstrap"

const FormComponents7 = ({ onChange }) => {
    return (
    
        <Form>
        <Form.Group>
            <Form.Label>¿Cuál es el significado de la "libertad" en la filosofía de Jean-Paul Sartre?</Form.Label>
            <Form.Control onChange={onChange} name="Pregunta1" placeholder='Ingresa tu Respuesta' />
        </Form.Group>
        <Form.Group>
            <Form.Label>¿De qué manera la ética utilitarista influye en la toma de decisiones morales?</Form.Label>
            <Form.Control onChange={onChange} name='Pregunta2' placeholder='Ingresa tu Respuesta'  />
        </Form.Group>
        <Form.Group>
            <Form.Label>Explica el concepto de "justicia" según John Rawls.</Form.Label>
            <Form.Control onChange={onChange} name='Pregunta3' placeholder='Ingresa tu Respuesta' as='Textarea' />
        </Form.Group>
        <Form.Group>
            <Form.Label>¿Qué impacto tiene el relativismo moral en la sociedad contemporánea?</Form.Label>
            <Form.Control onChange={onChange} name='Pregunta4' placeholder='Ingresa tu Respuesta'  />
        </Form.Group>
        <Form.Group>
            <Form.Label>¿Cómo ha evolucionado la concepción del "bien común" a lo largo de la historia de la filosofía?</Form.Label>
            <Form.Control onChange={onChange} name='Pregunta5' placeholder='Ingresa tu Respuesta'  />
        </Form.Group>
        <Form.Group>
            <Form.Label>¿Qué desafíos plantea la ética en el ámbito de la inteligencia artificial?</Form.Label>
            <Form.Control onChange={onChange} name='Pregunta6' placeholder='Ingresa tu Respuesta'  />
        </Form.Group>

        <Button type='submit'>Enviar</Button>
        <Button type="reset" variant="danger">Cancelar</Button>
    </Form>
    
    )



}


export default FormComponents7