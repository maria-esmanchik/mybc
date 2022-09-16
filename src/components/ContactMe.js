import { useState } from 'react';
import { Button, Form } from "react-bootstrap";

// Example POST method implementation:
async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'omit', // include, *same-origin, omit
        headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return await response.text(); // parses JSON response into native JavaScript objects
}

export default function ContactMe() {
    const [state, setState] = useState({expanded: false, message: ''});
    async function sendMessage(body) {
        const contactMeUrl = 'https://6znzyl65a6.execute-api.us-east-1.amazonaws.com/default/contactMe';
        const response = await postData(contactMeUrl, { message: state.message });
        //console.log('response='+response); // JSON data parsed by `data.json()` call
    }
    return (
        <div>
            {/* <button type="button" class="btn btn-outline-secondary btn-lg px-4">Contact</button> */}
            <Button size="lg" variant="secondary" 
                    onClick={() => setState({message: state.message, expanded: !state.expanded})}>Contact</Button>
            {state.expanded ? (
                <div className='mt-4'>
                <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Message</Form.Label>
                    <Form.Control type="text" placeholder="Enter your message here" value={state.message}
                        onChange={(e) => setState({message: e.target.value, expanded: state.expanded})}/>
                    <Form.Text className="text-muted">
                    Please type your message to me above.
                    </Form.Text>
                </Form.Group>
                <Button size="lg" variant="primary" onClick={() => sendMessage()}>
                    Submit
                </Button>
                </Form>
                </div>
            ) : null}
        </div>
    )
}