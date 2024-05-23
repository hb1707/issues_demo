'use client'
import {Button, Form} from "@douyinfe/semi-ui";

export default function Home() {
  const initValues = {
    name: 'semi',
    shortcut: 'se'
  };

  const style = { width: '100%' };

  const { Select, Input } = Form;

  return (
      <Form initValues={initValues}>
        <Input
            field="name"
            style={style}
            trigger='blur'
            rules={[
              { required: true, message: 'required error' },
              { type: 'string', message: 'type error' },
              { validator: (rule, value) => value === 'semi', message: 'should be semi' },
              { validator: (rule, value) => value && value.startsWith('se'), message: 'should startsWith se' }
            ]}
        />
        <Input
            field="shortcut"
            style={style}
            stopValidateWithError
            rules={[
              { required: true, message: 'required error' },
              { type: 'string', message: 'type error' },
              { validator: (rule, value) => value === 'semi', message: 'should be semi' },
              { validator: (rule, value) => value && value.startsWith('se'), message: 'should startsWith se' }
            ]}
        />
        <Button htmlType='submit'>提交</Button>
      </Form>
  );
}
