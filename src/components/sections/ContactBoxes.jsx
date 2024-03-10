import SingleContactBox from "../SingleContactBox";

export default function ContactBoxes() {
    return (
        <section className='py-[60px] md:py-[100px]'>
            <div className='container flex flex-col xl:flex-row gap-8'>
                <SingleContactBox text='Call Us in this number' iconClass={"ri-phone-fill"} info='+919472180449' />
                <SingleContactBox text='Email Us on  Address' iconClass={"ri-mail-line"} info='vkrnitd@gmail.com' />
                <SingleContactBox text='Whatsapp Us in this number' iconClass={"ri-whatsapp-line"} info='+919472180449' />
            </div>
        </section>
    );
}
