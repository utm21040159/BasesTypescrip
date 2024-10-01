import { Button, Form } from "react-bootstrap"


const FormComponents4 = ({ onChange }) => {
    return (
    
        <Form>
        <Form.Group>
            <Form.Label> ¿Cuáles fueron las principales causas de la Primera Guerra Mundial?</Form.Label>
            <Form.Control onChange={onChange} name="Pregunta1" placeholder='Ingresa tu Respuesta' />
        </Form.Group>
        <Form.Group>
            <Form.Label>Explica el impacto de la Revolución Industrial en la configuración de las sociedades modernas.</Form.Label>
            <Form.Control onChange={onChange} name='Pregunta2' placeholder='Ingresa tu Respuesta' as='Textarea' />
        </Form.Group>
        <Form.Group>
            <Form.Label> ¿Cómo influyó la Guerra Fría en el desarrollo de la tecnología espacial?</Form.Label>
            <Form.Control onChange={onChange} name='Pregunta3' placeholder='Ingresa tu Respuesta'  />
        </Form.Group>
        <Form.Group>
            <Form.Label>¿Qué importancia tuvo el movimiento sufragista en la historia de los derechos humanos?</Form.Label>
            <Form.Control onChange={onChange} name='Pregunta4' placeholder='Ingresa tu Respuesta'  />
        </Form.Group>
        <Form.Group>
            <Form.Label>¿De qué manera los movimientos independentistas influyeron en la configuración de América Latina?</Form.Label>
            <Form.Control onChange={onChange} name='Pregunta5' placeholder='Ingresa tu Respuesta'  />
        </Form.Group>
        <Form.Group>
            <Form.Label>¿Qué efectos tuvo la caída del Muro de Berlín en la política internacional?</Form.Label>
            <Form.Control onChange={onChange} name='Pregunta6' placeholder='Ingresa tu Respuesta'  />
        </Form.Group>

        <Button type='submit'>Enviar</Button>
        <Button type="reset" variant="danger">Cancelar</Button>
    </Form>
    
    )



}


export default FormComponents4