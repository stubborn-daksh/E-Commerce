import React from 'react'
import Layout from '../components/Layout/Layout'


const Policy = () => {
    return (
        <Layout title={"Privacy Policy - Ecommerce App"}>
            <div className='row contactus'>
                <div className='col-md-6'>
                    <img src='/images/privacy.jpeg' alt='privacy' style={{ width: "100%" }} />
                </div>
                <div className='col-md-4'>
                    <h1 className='bg-dark p-2 text-white text-center'>Privacy Policy</h1>
                    <p className='text-justify mt-2'>
                        Any query and info about the Privacy Issue Please feel free to reach us anytime 24X7 Available
                    </p>

                </div>
            </div>
        </Layout>
    )
}

export default Policy