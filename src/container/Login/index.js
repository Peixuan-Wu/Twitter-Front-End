
import './index.css'
import { Button, Input, Form, PasscodeInput, NumberKeyboard, Dialog } from 'antd-mobile';

const initialValues = {
    username: "Amy",
    pwd:"1234"
}
const Login = () => {
    const [form] = Form.useForm();
    const onSubmit = () => {
        const values = form.getFieldsValue();
        Dialog.alert({
            content: JSON.stringify(values)
        })
    }
   
    return (
            <div  className='login'>
            <Form form={form}  layout='horizontal' mode='card' initialValues={initialValues} footer={
             <Button block color='primary' onClick={onSubmit} size="large">
                Login
             </Button>}>  
            <Form.Item label='UserName' name="username">
            <Input placeholder='Amy' />
            </Form.Item>
            <Form.Item label='Password' name="pwd">
            <Input placeholder='password' clearable type='password' /> 
            </Form.Item>
            </Form>
            </div>
    )
}

export default Login; 