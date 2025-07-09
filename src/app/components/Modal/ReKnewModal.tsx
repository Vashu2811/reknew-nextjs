'use client';

import axios from 'axios';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ReKnewModal ({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        company: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const { firstName, lastName, email, company } = formData;
    //     const data = {
    //         subject: 'Test from API Gateway',
    //         message: `\n\nDetails:\nName: ${firstName} ${lastName}\nEmail: ${email}\nCompany: ${company}`
    //     };

    //     try {
    //         const res = await axios.post(
    //             'https://r621x20pve.execute-api.us-east-1.amazonaws.com/default/sendSuppportEmail',
    //             JSON.stringify(data), // optional: you can also just pass `data` if the backend accepts JSON
    //             {
    //                 headers: {
    //                     'Content-Type': 'text/plain; charset=utf-8'
    //                 }
    //             }
    //         );

    //         console.log('Response:', res.data);
    //         toast.success('Form submitted successfully!', {
    //             toastStyle: {
    //                 backgroundColor: '#FF512F',
    //                 color: '#fff'
    //             }
    //         });
    //         setFormData({
    //             firstName: '',
    //             lastName: '',
    //             email: '',
    //             company: ''
    //         });

    //         // onClose();
    //     } catch (error) {
    //         console.error('Error:', error);
    //         alert('Submission failed! ' + (error.response?.data || error.message));
    //     }
    // };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { firstName, lastName, email, company } = formData;

        const data = {
            subject: 'New Job Application',
            message: `
                Details:
                Name: ${firstName} ${lastName}
                Email: ${email}
                company: ${company} 
              
            `,
            to: ['akhanna@reknew.ai'] // Add recipient email
            // varivify email  are  panding
        };

        try {
            const res = await axios.post('https://r621x20pve.execute-api.us-east-1.amazonaws.com/default/sendSuppportEmail', JSON.stringify(data), {
                headers: {
                    'Content-Type': 'text/plain; charset=utf-8'
                }
            });

            console.log('Response:', res.data);
            toast.success('Application submitted successfully!', {
                toastStyle: {
                    backgroundColor: '#FF512F',
                    color: '#fff'
                }
            });
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                company: ''
            });
        } catch (error) {
            console.error('Error:', error);
        }
    };

    if (!isOpen) return null;

    return (
        <>
        
            <ToastContainer
                toastClassName="custom-toast"
                bodyClassName="custom-toast-body"
                progressClassName="custom-toast-progress"
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
                <div className="bg-gradient-to-br from-white via-gray-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-3xl shadow-2xl md:p-10 p-2 w-full max-w-4xl h-fit relative border border-gray-200 dark:border-gray-700 animate-fadeIn">
                    <button
                        onClick={onClose}
                        className="absolute top-4 md:top-4 right-4 text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 text-xl md:text-3xl transition-transform transform hover:scale-110"
                        aria-label="Close Modal">
                        ✕
                    </button>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl md:text-center font-extrabold tracking-tight text-gray-800 dark:text-gray-100 mb-4">
                        Connect with <span className="text-[#FF512F]">ReKnew</span>
                    </h2>
                    <p className="text-base md:text-lg dark:text-gray-300 mb-3 md:mb-10 md:text-center max-w-2xl mx-auto text-gray-600">
                        If you are looking for a "AI Adoption Roadmap" Discovery Session, drop your details and we'll connect.
                    </p>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8">
                        {/** First Name */}
                        <div className="flex flex-col">
                            <label className="text-gray-700 dark:text-gray-300 text-sm mb-2 font-medium">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                                className="w-full md:px-5 md:py-3 p-2 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF512F] text-gray-700 dark:text-white bg-white dark:bg-gray-800 placeholder-gray-400 dark:placeholder-gray-500 transition"
                                placeholder="Enter your first name"
                            />
                        </div>
                        {/** Last Name */}
                        <div className="flex flex-col">
                            <label className="text-gray-700 dark:text-gray-300 text-sm mb-2 font-medium">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                                className="w-full md:px-5 md:py-3 p-2 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF512F] text-gray-700 dark:text-white bg-white dark:bg-gray-800 placeholder-gray-400 dark:placeholder-gray-500 transition"
                                placeholder="Enter your last name"
                            />
                        </div>
                        {/** Email */}
                        <div className="flex flex-col">
                            <label className="text-gray-700 dark:text-gray-300 text-sm mb-2 font-medium">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full md:px-5 md:py-3 p-2 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF512F] text-gray-700 dark:text-white bg-white dark:bg-gray-800 placeholder-gray-400 dark:placeholder-gray-500 transition"
                                placeholder="Enter your email address"
                            />
                        </div>
                        {/** Company */}
                        <div className="flex flex-col">
                            <label className="text-gray-700 dark:text-gray-300 text-sm mb-2 font-medium">Company</label>
                            <input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                required
                                className="w-full md:px-5 md:py-3 p-2 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF512F] text-gray-700 dark:text-white bg-white dark:bg-gray-800 placeholder-gray-400 dark:placeholder-gray-500 transition"
                                placeholder="Enter your company name"
                            />
                        </div>
                        <div className="md:col-span-2 mt-2 md:mt-10 flex justify-center">
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-[#FF512F] to-[#FF8A63] hover:from-[#FF8A63] hover:to-[#FF512F] text-white px-2 md:px-10 py-1 md:py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
