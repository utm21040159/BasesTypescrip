import { Button, Form } from "react-bootstrap"


const FormComponents = ({ onChange }) => {
    return (
    
    <Form>
        <Form.Group>
            <Form.Label>Nombre:</Form.Label>
            <Form.Control onChange={onChange} name="name" placeholder='Ingresa tu Nombre' />
        </Form.Group>
        <Form.Group>
            <Form.Label>Apellidos:</Form.Label>
            <Form.Control onChange={onChange} name='apellidos' placeholder='Ingresa tus Apellidos' />
        </Form.Group>
        <Form.Group>
            <Form.Label>Correo Electronico:</Form.Label>
            <Form.Control onChange={onChange} name='correo' placeholder='Ingresa tu Correo' type='email' />
        </Form.Group>
        <Form.Group>
            <Form.Label>Numero De Telefono:</Form.Label>
            <Form.Control onChange={onChange} name='telefono' placeholder='Ingresa tu Numero' type='number' />
        </Form.Group>
        <Form.Group>
            <Form.Label>Direccion:</Form.Label>
            <Form.Control onChange={onChange} name='direccion' placeholder='Ingresa tu Direccion' />
        </Form.Group>
        <Form.Group>
            <Form.Label>Descripcion:</Form.Label>
            <Form.Control onChange={onChange} name='descripcion' placeholder='Escribe aqui' as='Textarea' />
        </Form.Group>

        <Button type='submit'>Enviar</Button>
        <Button type="reset" variant="danger">Cancelar</Button>
    </Form>
    
    )



}


export default FormComponents