import React from 'react';
import Layout from '../layout/Layout';
import logo from '../../Assets/logo2.jpg';

const About = () => {
    
    return ( 
        <Layout title="About" description="About page" >
            <div className="text-center mt-5">
                <div>
                    <img src={logo} alt="BookStore" className="logo"/>
                </div>
                <div style={{ marginTop: 10 }}>
                    <h1>About</h1>
                    <p>Just another books store</p>
                </div>
            </div>
        </Layout>
     );
}
 
export default About;