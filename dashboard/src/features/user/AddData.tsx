import { useFormik } from "formik"
import { formSchema } from '../../schemas'
import { Form, Button, Input } from 'antd';
import { DatePicker, Space } from 'antd'
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
import { useAddCandidateMutation } from '../api/apiSlice';
import { candidateData } from '../../types/candidate.d';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const dateFormat = 'DD-MM-YYYY';

const initialValues = {
    name: "",
    fatherName: "",
    passportNo: "",
    nationality: "",
    trade: "",
    careOf: "",
    status: "",
    dateOfBirth: Date,
    passportExpiryDate: Date
}

const AddData = () => {

    const showToastMessage = (message:String) => {
        toast.success(message, {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    const navigate = useNavigate();

    const [addCandidate] = useAddCandidateMutation();
    const [form] = Form.useForm()
    const { values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue } = useFormik({
        initialValues,
        validationSchema: formSchema,
        onSubmit: (values, action) => {
            addCandidate<candidateData>({
                name: values.name,
                fatherName: values.fatherName,
                passportNo: values.passportNo,
                nationality: values.nationality,
                trade: values.trade,
                careOf: values.careOf,
                status: values.status,
                dateOfBirth: values.dateOfBirth,
                passportExpiryDate: values.passportExpiryDate
            })
            showToastMessage('Form Submitted Successfuly !');
            form.resetFields();
        }
    })

    const onSubmitForm = () => {
        if (!errors) {
            form.resetFields();
        }
    };

    const resetForm = () => {
        showToastMessage('Form Reset !');
        form.resetFields();
    }


    return (
        <>
            <ToastContainer />
            <Form
                onFinish={handleSubmit}
                form={form}
            >
                <Space>
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[
                            { required: true, message: "please enter value" },
                            { whitespace: true },
                            {
                                min: 2,
                                max: 40,
                                message: "field must be at least 2 and at most 40 characters ",
                            },
                        ]}
                        hasFeedback
                    >
                        <Input
                            className='input-box'
                            placeholder='Name'
                            bordered={true}
                            type="text"
                            value={values.name}
                            onChange={handleChange}
                            allowClear={true}
                            size={'middle'}
                            autoComplete="off"
                        />
                    </Form.Item>
                    <Form.Item
                        label="Father Name"
                        name="fatherName"
                        rules={[
                            { required: true, message: "please enter value" },
                            { whitespace: true },
                            {
                                min: 2,
                                max: 40,
                                message: "field must be at least 2 and at most 40 characters ",
                            },
                        ]}
                        hasFeedback
                    >
                        <Input
                            className='input-box'
                            placeholder='Father Name'
                            bordered={true}
                            type="text"
                            value={values.fatherName}
                            onChange={handleChange}
                            allowClear={true}
                            size={'middle'}
                            autoComplete="off"
                        />
                    </Form.Item>
                </Space>
                <Space>
                    <Form.Item
                        label=" pp No#"
                        name="passportNo"
                        rules={[
                            { required: true, message: "please enter value" },
                            { whitespace: true },
                            {
                                min: 5,
                                max: 40,
                                message: "field must be at least 5 and at most 40 characters ",
                            },
                        ]}
                        hasFeedback
                    >
                        <Input
                            className='input-box'
                            placeholder='PP No#'
                            bordered={true}
                            type="text"
                            value={values.passportNo}
                            onChange={handleChange}
                            allowClear={true}
                            size={'middle'}
                            autoComplete="off"
                        />
                    </Form.Item>
                    <Form.Item
                        label="Nationality"
                        name="nationality"
                        rules={[
                            { required: true, message: "please enter value" },
                            { whitespace: true },
                            {
                                min: 2,
                                max: 40,
                                message: "field must be at least 2 and at most 40 characters ",
                            },
                        ]}
                        hasFeedback
                    >
                        <Input
                            className='input-box'
                            placeholder='Nationality'
                            bordered={true}
                            type="text"
                            value={values.nationality}
                            onChange={handleChange}
                            allowClear={true}
                            size={'middle'}
                            autoComplete="off"
                        />
                    </Form.Item>
                </Space>
                <Space>
                    <Form.Item
                        label="Trade"
                        name="trade"
                        rules={[
                            { required: true, message: "please enter value" },
                            { whitespace: true },
                            {
                                min: 2,
                                max: 40,
                                message: "field must be at least 2 and at most 40 characters ",
                            },
                        ]}
                        hasFeedback
                    >
                        <Input
                            className='input-box'
                            placeholder='Trade'
                            bordered={true}
                            type="text"
                            value={values.trade}
                            onChange={handleChange}
                            allowClear={true}
                            size={'middle'}
                            autoComplete="off"
                        />
                    </Form.Item>
                    <Form.Item
                        label="Care Of"
                        name="careOf"
                        rules={[
                            { required: true, message: "please enter value" },
                            { whitespace: true },
                            {
                                min: 2,
                                max: 40,
                                message: "field must be at least 2 and at most 40 characters ",
                            },
                        ]}
                        hasFeedback
                    >
                        <Input
                            className='input-box'
                            placeholder='Care Of'
                            bordered={true}
                            type="text"
                            value={values.careOf}
                            onChange={handleChange}
                            allowClear={true}
                            size={'middle'}
                            autoComplete="off"
                        />
                    </Form.Item>
                </Space>
                <Space>
                    <Form.Item
                        label="Status"
                        name="status"
                        rules={[
                            { required: true, message: "please enter value" },
                            { whitespace: true },
                            {
                                min: 2,
                                max: 40,
                                message: "field must be at least 2 and at most 40 characters ",
                            },
                        ]}
                        hasFeedback
                    >
                        <Input
                            className='input-box'
                            placeholder='Status'
                            bordered={true}
                            type="text"
                            value={values.status}
                            onChange={handleChange}
                            allowClear={true}
                            size={'middle'}
                            autoComplete="off"
                        />
                    </Form.Item>
                    <Form.Item
                        label="DOB"
                        name="dateOfBirth"
                        rules={[
                            { required: true, message: "please enter value" },
                        ]}
                        hasFeedback
                    >
                        <DatePicker
                            format={dateFormat}
                            placeholder={dateFormat}
                            allowClear={true}
                            size={'middle'}
                            onChange={(value) => {
                                // const date = value?.$d;
                                setFieldValue("dateOfBirth", value)
                            }}
                        />
                    </Form.Item>
                </Space>
                <Form.Item
                    label="PP Exp. Date"
                    name="passportExpiryDate"
                    rules={[
                        { required: true, message: "please enter value" },
                    ]}
                    hasFeedback
                >
                    <DatePicker
                        format={dateFormat}
                        placeholder={dateFormat}
                        allowClear={true}
                        size={'middle'}
                        onChange={(value) => {
                            // const date = value?.$d;
                            setFieldValue("passportExpiryDate", value)
                        }}
                    />
                </Form.Item>
                <Space>
                    <Button htmlType="submit" type='primary' onClick={onSubmitForm}>Submit</Button>
                    <Button type="primary" onClick={() => navigate("/candidate/candidates_list")} >Back</Button>
                    <Button type="primary" danger onClick={resetForm} >Reset</Button>
                </Space>
            </Form>
        </>
    )
}

export default AddData