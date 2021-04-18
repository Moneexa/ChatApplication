import React, { useEffect } from 'react'
import 'antd/dist/antd.css';
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const { Search } = Input;


export default function Chat() {
    useEffect(() => {
        console.log("say something")
    }, [])
    const suffix = (
        <AudioOutlined
            style={{
                fontSize: 16,
                color: '#1890ff',
            }}
        />
    );
    const onSearch = (value: any) => {
      console.log(value)
    }

    return (

        <div className="d-flex flex-column align-items-center justify-content-center">
            <div style={{ borderBottom: "1px grey solid", width: "100%" }}>

                <div className="text-black ml-3" style={{ fontSize: "3rem" }} >
                    Username
                </div>
            </div>
            <div className="d-flex flex-column align-items-center w-100 " style={{ height: "75vh", borderBottom: "1px grey solid", overflowY: "auto" }}>
                <div>anything</div>
                <div>anything</div>
                <div>anything</div>
                <div>anything</div>
                <div>anything</div>
                <div>anything</div>
                <div>anything</div>
                <div>anything</div>
                <div>anything</div>
                <div>anything</div>
                <div>anything</div>
                <div>anything</div>
                <div>anything</div>
                <div>anything</div>
                <div>anything</div>
                <div>anything</div>
                <div>anything</div>
                <div>anything</div>
                <div>anything</div>
                <div>anything</div>
                <div>anything</div>
                <div>anything</div>
                <div>anything</div>
                <div>anything</div>
                <div>anything</div>

            </div>
            <div className="w-100" style={{ borderBottom: "1px solid grey" }}>
                <Search
                    className="w-75 m-3"
                    placeholder="type message  . . ."
                    enterButton="Send"
                    size="large"
                    suffix={suffix}
                    onSearch={onSearch}
                />
            </div>

        </div>
    )
}