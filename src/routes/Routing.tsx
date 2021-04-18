import React, {useEffect} from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Contents from '../components/SepComponents/Contents'
import Headers from '../components/CommonComponents/Headers'
import 'antd/dist/antd.css';
import { Layout } from 'antd';
export default function Routing() {
    const { Footer } = Layout
    
    return (
        <Router>
            <Layout>
                <Headers />
                <Contents />
                <Footer>Footers</Footer>
            </Layout>
        </Router>

    )
}