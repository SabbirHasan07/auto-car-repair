'use client'
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

interface FormData {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

const ContactForm: React.FC = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
    const [isLoading, setIsLoading] = useState(false); // State for loading

    const onSubmit = (data: FormData) => {
        setIsLoading(true); // Set loading to true when the form is submitting

        const emailData = {
            to_name: "Admin",
            from_name: data.name,
            email: data.email,
            phone: data.phone,
            subject: data.subject,
            message: data.message,
        };

        emailjs.send(
            "service_5mflveo",
            "template_xvkvwnb",
            emailData,
            "pnxyg4_lLNVASVINY"
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message sent successfully!');
                reset(); // Reset the form fields after successful submission
            })
            .catch((err) => {
                console.error('FAILED...', err);
                alert('Failed to send message, please try again.');
            })
            .finally(() => {
                setIsLoading(false); // Reset loading state after the request finishes
            });
    };

    return (
        <div className='my-11'>
            <h1 className='text-center mt-8 font-bold text-4xl'>CONTACT US</h1>
            <hr className='my-4' />
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
                <div className="mb-4">
                    <label className="block text-gray-700">Name:</label>
                    <input
                        type="text"
                        {...register('name', { required: true })}
                        className={`mt-1 block w-full border rounded-md p-2 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.name && <span className="text-red-500">This field is required</span>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Email:</label>
                    <input
                        type="email"
                        {...register('email', { required: true })}
                        className={`mt-1 block w-full border rounded-md p-2 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.email && <span className="text-red-500">This field is required</span>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Phone Number:</label>
                    <input
                        type="tel"
                        {...register('phone', { required: true })}
                        className={`mt-1 block w-full border rounded-md p-2 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.phone && <span className="text-red-500">This field is required</span>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Subject:</label>
                    <input
                        type="text"
                        {...register('subject', { required: true })}
                        className={`mt-1 block w-full border rounded-md p-2 ${errors.subject ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.subject && <span className="text-red-500">This field is required</span>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Message:</label>
                    <textarea
                        {...register('message', { required: true })}
                        className={`mt-1 block w-full border rounded-md p-2 ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                        rows={4}
                    />
                    {errors.message && <span className="text-red-500">This field is required</span>}
                </div>

                <button
                    type="submit"
                    className={`w-full font-bold py-2 rounded ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-gray-800 text-white hover:bg-red-600'}`}
                    disabled={isLoading} // Disable the button while loading
                >
                    {isLoading ? 'Sending...' : 'Send'} {/* Change the button text based on loading state */}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
