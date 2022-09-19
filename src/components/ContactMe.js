import { useState } from 'react';
import { Button, Form } from "react-bootstrap";

// POST method implementation:
async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'omit', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return await response.json();
    //response.json().then(r => console.log('json()=', r)).catch(r => console.log('e =', r)); // parses JSON response into native JavaScript objects
    //return {success:true};
}

export default function ContactMe() {
    const [state, setState] = useState({
        expanded: false, sending: false, message: '', 
        status: "Please don't forget to put your contact information to let me get back to you."
    });
    async function sendMessage() {
        setState({...state, sending: true});
        const contactMeUrl = 'https://6znzyl65a6.execute-api.us-east-1.amazonaws.com/default/contactMe';
        let reply = 'Sorry, there was an error while sending your message to me.';
        try {
            const response = await postData(contactMeUrl, { message: state.message });
            if (response) {
                reply = 'Thanks for contacting me.';
                if (response.messageId) reply += ' Your message ID is ' + response.messageId;
            }
        } catch(e) {
            console.log('error =', e); 
        }
        setState({...state, sending: false, status: reply});
    }
    return (
        <div>
            {/* <button type="button" class="btn btn-outline-secondary btn-lg px-4">Contact</button> */}
            <Button size="lg" variant="secondary" 
                    onClick={() => setState({...state, expanded: !state.expanded})}>Contact</Button>
            {state.expanded ? (
                <div className='mt-4'>
                <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Send to Maryia Yesmanchyk</Form.Label>
                    <Form.Control as="textarea" rows={10} placeholder="Enter your message here" value={state.message}
                        onChange={(e) => setState({...state, message: e.target.value})}/>
                    <Form.Text className="text-muted">
                    {state.status}
                    </Form.Text>
                </Form.Group>
                <Button size="lg" variant="primary" onClick={() => sendMessage()} disabled={state.sending}>
                    Submit
                </Button>
                </Form>
                </div>
            ) : null}
        </div>
    )
}