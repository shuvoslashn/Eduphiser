import ContactForm from "../ContactForm";
import SectionHeading from "../SectionHeading";
import contactImg from "./../../assets/img/contactImg.png";

export default function ContactFormSection() {
    return (
        <section className='py-[60px] md:py-[100px]'>
            <div className='container md:grid md:items-center md:grid-cols-12'>
                <img src={contactImg} alt='Contact Form Image' className='md:-mb-40 w-full md:col-span-6' />
                {/* contact form */}
                <div className='md:col-span-6 md:w-[80%]'>
                    <SectionHeading subHeading={"Enter details and"} heading={"Get a call from us."} />
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}
