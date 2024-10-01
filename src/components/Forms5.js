import { Button, Form } from "react-bootstrap"


const FormComponents5 = ({ onChange }) => {
    return (
    
        <Form>
        <Form.Group>
            <Form.Label> ¿Cómo afecta la inflación al poder adquisitivo de los ciudadanos?</Form.Label>
            <Form.Control onChange={onChange} name="Pregunta1" placeholder='Ingresa tu Respuesta' />
        </Form.Group>
        <Form.Group>
            <Form.Label>¿Qué rol desempeñan los bancos centrales en la economía de un país?</Form.Label>
            <Form.Control onChange={onChange} name='Pregunta2' placeholder='Ingresa tu Respuesta' as='Textarea' />
        </Form.Group>
        <Form.Group>
            <Form.Label>¿Cómo influyen las tasas de interés en las decisiones de inversión de las empresas?</Form.Label>
            <Form.Control onChange={onChange} name='Pregunta3' placeholder='Ingresa tu Respuesta'  />
        </Form.Group>
        <Form.Group>
            <Form.Label>¿Qué impacto tiene el comercio internacional en el crecimiento económico?</Form.Label>
            <Form.Control onChange={onChange} name='Pregunta4' placeholder='Ingresa tu Respuesta'  />
        </Form.Group>
        <Form.Group>
            <Form.Label>¿De qué manera la automatización está transformando el sector manufacturero?</Form.Label>
            <Form.Control onChange={onChange} name='Pregunta5' placeholder='Ingresa tu Respuesta'  />
        </Form.Group>
        <Form.Group>
            <Form.Label>¿Cómo afecta el crecimiento del comercio electrónico a las pequeñas empresas?</Form.Label>
            <Form.Control onChange={onChange} name='Pregunta6' placeholder='Ingresa tu Respuesta'  />
        </Form.Group>

        <Button type='submit'>Enviar</Button>
        <Button type="reset" variant="danger">Cancelar</Button>
    </Form>
    
    )



}


export default FormComponents5