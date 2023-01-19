
import './index.css'
import { Button, Input, Form, PasscodeInput, NumberKeyboard, Dialog } from 'antd-mobile';
import { loginServices } from '../../services/login';


const initialValues = {
    username: "Amy",
    password:"1234"
}
const Login = () => {

    const [form] = Form.useForm();

    const onSubmit = async () => {
        const values = form.getFieldsValue();
        const res = await loginServices(values.username, values.password);
        console.log(res);
        if (res) {
            Dialog.alert({
                content: "Login Successfully"
            })
            return;
        }
        Dialog.alert({
            content: "Login Failed"
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
            <Form.Item label='Password' name="password">
            <Input placeholder='password' clearable type='password' /> 
            </Form.Item>
            </Form>
            </div>
    )
}

export default Login; 