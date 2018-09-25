import React from 'react';
import { Form, Input, Label, TextArea } from './style'

class AdminPanel extends React.Component {
    render (){
        return (
            <div>
                <Form>
                    
                    <Label for='bookNameInput'>Book name:
                    <Input type='text' placeholder='Book Name' id='bookNameInput' name='bookName'/>
                    </Label>
                    <Label for='bookAuthorInput'>Book author:
                    <Input type='text' placeholder='Book Author' id='bookAuthorInput' name='bookAuthor'/>
                    </Label>
                    <Label for='bookAuthorInput'>Book description:
                    <TextArea  placeholder='Book Description' id='bookDescriptionInput' name='bookDescription'/>
                    </Label>
                    <Label for='bookAuthorInput'>Book Image:
                    <Input type='file' id='bookImageInput' name='bookImage'/>
                    </Label>
                    <Label for='bookAuthorInput'>On stock:
                    <input type='checkbox'  placeholder='bookOnStock' id='bookOnStock' name='bookOnStock'/>
                    </Label>
                    <button type='submite'>Save</button>
                </Form>
            
            </div>
        );
    }
}

export default AdminPanel;