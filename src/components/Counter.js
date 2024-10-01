import { useState } from "react"
import { Button, Container, Form } from "react-bootstrap"






export const Counter = () =>{
    const [couter, setCounter] = useState(0)
    const [list, setList]= useState([])

    const addElementList = () =>{
        const nList = list
        nList.push(nList.length + 1)
        setList([...nList])
    }

    const restElementList = () =>{
        const nList = list
        nList.pop()
        setList([...nList])
    }

    return (
        <Container>
            <h3>{couter}</h3>
            <Button onClick={()=>setCounter(couter+1, list+1)}>+</Button>
            <Button onClick={()=>setCounter(couter -1, list-1)}>-</Button>
            <hr></hr>

            <h3>Lista</h3>
            {
                list.map((value, i)=>(
                    <>
                    <Form>
                        <Form.Label></Form.Label>
                    <Form.Control className="mb-3" ></Form.Control>
                </Form>
                </>
                    
                ))
            }

<Button onClick={()=>addElementList()}>+</Button>
<Button onClick={()=>restElementList()}>-</Button>
        </Container>
    )
}