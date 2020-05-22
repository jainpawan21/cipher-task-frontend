import React from 'react'
import {ReactComponent as ReactLogo}  from '../constants/temp.svg'
import {Row, col} from 'reactstrap'
export default function Banner() {
    return (
        <div style={{margin: '0 auto'}}>
        <Row>
            
            <div style={{margin: '40px 80px'}}>
                <h3>Nurturing the Future</h3>

                <p>Get educated by the leading Industry Experts. Work on the most relevant projects. Get top-notch & highly job-oriented curriculum.</p>
            </div>
            <div 
            style={{width: '400px', height: '600px', margin:'auto'}}
            >
                <ReactLogo />
            </div>
        </Row>
        </div>
    )
}
