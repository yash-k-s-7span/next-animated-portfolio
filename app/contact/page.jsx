"use client"

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const text = "Say Hello";

    const formik = useFormik({
        initialValues: {
            user_message: '',
            user_email: '',
        },
        validationSchema: Yup.object({
            user_message: Yup.string().required('Message is required'),
            user_email: Yup.string().email('Invalid email address').required('Email is required'),
        }),
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            setIsLoading(true);
            setError(false);
            setSuccess(false);

            try {
                await emailjs.send(
                    process.env.NEXT_PUBLIC_SERVICE_ID,
                    process.env.NEXT_PUBLIC_TEMPLATE_ID,
                    {
                        user_message: values.user_message,
                        user_email: values.user_email,
                    },
                    process.env.NEXT_PUBLIC_PUBLIC_KEY
                );
                setSuccess(true);
                resetForm();
                console.log('success')

            } catch (err) {
                setError(true);
                console.log('catch')
            } finally {
                setIsLoading(false);
                setSubmitting(false);
                console.log('finally')

            }
        },
    });

    return (
        <div className='flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 py-8 md:py-12'>
            {/* TEXT CONTAINER */}
            <div className='w-full lg:w-1/2 flex items-center justify-center text-3xl sm:text-4xl lg:text-5xl mb-8 lg:mb-0'>
                <motion.div>
                    {text.split("").map((letter, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 0 }}
                            transition={{ duration: 3, repeat: Infinity, delay: index * 0.1 }}
                        >
                            {letter}
                        </motion.span>
                    ))}
                    😊
                </motion.div>
            </div>
            {/* FORM CONTAINER */}
            <div className='w-full lg:w-1/2'>
                <form onSubmit={formik.handleSubmit} className='bg-red-50 rounded-xl p-6 sm:p-8 text-lg sm:text-xl flex flex-col gap-6 justify-center'>
                    <div className='flex flex-col'>
                        <label htmlFor="user_message" className='mb-2'>Message</label>
                        <input
                            id="user_message"
                            type='text'
                            {...formik.getFieldProps('user_message')}
                            className='w-full bg-transparent border-b-2 border-b-black focus:outline-none py-2'
                        />
                        {formik.touched.user_message && formik.errors.user_message ? (
                            <div className='text-red-500 text-sm mt-1'>{formik.errors.user_message}</div>
                        ) : null}
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="user_email" className='mb-2'>Your email address</label>
                        <input
                            id="user_email"
                            type='email'
                            {...formik.getFieldProps('user_email')}
                            className='bg-transparent w-full border-b-2 border-b-black focus:outline-none py-2'
                        />
                        {formik.touched.user_email && formik.errors.user_email ? (
                            <div className='text-red-500 text-sm mt-1'>{formik.errors.user_email}</div>
                        ) : null}
                    </div>
                    <span>Regards</span>
                    <div className='flex justify-center'>
                        <button
                            type="submit"
                            disabled={formik.isSubmitting || isLoading}
                            className='bg-purple-300 w-full sm:w-2/3 md:w-2/5 rounded-md font-semibold text-gray-600 p-3 hover:bg-purple-400 transition-colors disabled:opacity-50'
                        >
                            {isLoading ? 'Sending...' : 'Send'}
                        </button>
                    </div>
                    <div className='flex flex-col text-center'>
                        {success && <span className='text-green-400 text-base'>Your message has been sent successfully!</span>}
                        {error && <span className='text-red-500 text-base'>Something went wrong</span>}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;