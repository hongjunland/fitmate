import {Card, Col, Container, Form, FormGroup, InputGroup, Row, Input, Button} from "reactstrap";
import {useState, useEffect, useRef} from "react";

function SigninForm() {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    useEffect(() => {
        setLoading(true);
    }, [])
    const handleSubmit = async (e) => {
        e.preventDefault();
        fetch(`/auth/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify({
                'email': email,
                'password': password
            })
        })
            .then((res) => {
                console.log(res.json());
                console.log(email);
                console.log(password);
            }).catch((e) => console.error(e))
    }
    return (
        <>
            <Container className="bv-example-row mt-3">
                <Row>
                    <Col className={"col-3"}></Col>
                    <Col className={"col-6"}>
                        <Card className={"text-center-mt-3"} style={{maxWidth: "40rem"}} align={"left"}>
                            <h1 id={"signinTitle"}>Fitmate</h1>
                            <Form className={"text-center"} onSubmit={handleSubmit}>
                                <FormGroup className={"text-center"}>
                                    <InputGroup className={"mt-3 input"}>
                                        <Input type="email" value={email} onChange={(e)=>setEmail(e.currentTarget.value)} placeholder="email"/>
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup className={"text-center"}>
                                    <InputGroup className={"mt-3 input"}>
                                        <Input type="password" value={password} onChange={(e)=>setPassword(e.currentTarget.value)} placeholder="name"/>
                                    </InputGroup>
                                </FormGroup>
                                <Button id="submitBtn" block className="mt-3 mb-3" type="submit">
                                    로그인
                                </Button>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default SigninForm;