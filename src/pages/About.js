import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
    return (
        <Layout title={"About us - Ecommerce App"}>
            <div className='row contactus'>
                <div className='col-md-6'>
                    <img src='/images/about.jpeg' alt='contactus' style={{ width: "100%" }} />
                </div>
                <div className='col-md-4'>
                    <h1 className='bg-dark p-2 text-white text-center'>Contact Us</h1>
                    <p className='text-justify mt-2'>
                        Welcome to our e-commerce website, where we bring you the convenience of shopping from the comfort of your own home. Our website offers a vast collection of high-quality products at competitive prices, making it easy for you to find the perfect items for your needs.
                        <br></br> <br></br>
                        Thank you for choosing our e-commerce website for your online shopping needs. We're confident that you'll find what you're looking for and have a pleasant shopping experience with us.

                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default About