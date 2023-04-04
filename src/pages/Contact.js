import React from 'react'
import Layout from '../components/Layout/Layout';

import { BiMailSend, BiPhoneCall, BiSupport } from 'react-icons/bi';

const Contact = () => {
    return (
        <Layout title={"Contact us - Ecommerce App"}>
            <div className='row contactus'>
                <div className='col-md-6'>
                    <img src='/images/contactus.jpeg' alt='contactus' style={{ width: "100%" }} />
                </div>
                <div className='col-md-4'>
                    <h1 className='bg-dark p-2 text-white text-center'>Contact Us</h1>
                    <p className='text-justify mt-2'>
                        Any query and info about the product please feel free to call us anytime 24X7 Available
                    </p>
                    <p className='mt-3'>
                        <BiMailSend /> www.help@ecommerceapp.com
                    </p>
                    <p className='mt-3'>
                        <BiPhoneCall /> +91-6387971174
                    </p>
                    <p className='mt-3'>
                        <BiSupport /> :1800-0000-0000 (toll-free)
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default Contact