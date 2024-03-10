import { useState } from "react";

export default function ContactForm() {
    const [dataObj, setDataObj] = useState({
        userName: "",
        phone: "",
        email: "",
    });

    const handleChange = ({ target: { name, value } }) => {
        setDataObj({ ...dataObj, [name]: value });
        console.log(dataObj);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thanks For Submitting Data");
    };

    return (
        <form className='flex flex-col gap-6 mt-8' onSubmit={handleSubmit}>
            <div className='flex flex-col gap-3'>
                <div className='relative'>
                    <i className='ri-user-3-fill absolute top-2 left-3' />
                    <input
                        type='text'
                        name='userName'
                        value={dataObj.userName}
                        onChange={handleChange}
                        placeholder='Full Name'
                        className='border w-full pl-9 px-4 py-2'
                    />
                </div>
                <div className='relative'>
                    <i className='ri-phone-fill absolute top-2 left-3' />
                    <input
                        type='text'
                        name='phone'
                        value={dataObj.phone}
                        onChange={handleChange}
                        placeholder='Mobile Number'
                        className='border w-full pl-9 px-4 py-2'
                    />
                </div>
                <div className='relative'>
                    <i className='ri-mail-line absolute top-2 left-3' />
                    <input
                        type='email'
                        name='email'
                        value={dataObj.email}
                        onChange={handleChange}
                        placeholder='Email Id'
                        className='border w-full pl-9 px-4 py-2'
                    />
                </div>
            </div>
            <p>
                By submitting this form, you accept and agree to our <a href='#'>Terms of Use.</a>
            </p>
            <button type='submit' className='btn max-w-44 bg-c-blue text-white shadow-xl shadow-c-blue/30'>
                Submit Now
            </button>
        </form>
    );
}
