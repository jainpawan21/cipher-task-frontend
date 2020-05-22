import React, { useState, useEffect } from 'react'
import Banner from '../components/Banner'
import { Container} from 'reactstrap'
import { Alert } from 'reactstrap';
import axios from '../constants/axios'
const Home = () => {
    const [visible, setVisible] = useState(false);
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');

    useEffect(() => {
        axios.get('/notifications')
        .then((res) => {
            setDescription(res.data[0].description)
            setUrl(res.data[0].url)
            setVisible(true)
        })
    },[])
    const onDismiss = () => setVisible(false);
        return (
            <div>
            
            <div>
                <Container>
                <Alert color="info" isOpen={visible} toggle={onDismiss}>
                <div >{description} <a href={url}  target="_blank" >Register</a></div>
                </Alert>
                    <Banner />
                </Container>
            </div>
            </div>
        )
    }
export default Home
