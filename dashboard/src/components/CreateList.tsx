import React, { useState } from 'react'
import { Spin } from 'antd';

const CreateList = () => {
    const [loading,setLoading] = useState(true);
    return (
        <>
            {loading && <div className="example"><Spin tip="Pending..." size="large" /></div>}
        </>
    )
}

export default CreateList