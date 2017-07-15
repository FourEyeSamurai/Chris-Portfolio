import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class Contact extends Component {
 
  render() {
   return (
    	<Form>
		    <Form.Group widths='equal'>
			    <Form.Input label='First name' placeholder='First name' />
			    <Form.Input label='Last name' placeholder='Last name' />
			</Form.Group>
			<Form.Group inline>
			</Form.Group>
				<Form.Input label='Email' placeholder='Email' />
			<Form.Group inline>
			</Form.Group>
			<Form.TextArea label='About' placeholder='Let me know how I can help...' />
			<Form.Button>Submit</Form.Button>		
	 	</Form>
    )
  }

}

export default Contact;
