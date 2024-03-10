import StripeLine from "./../assets/img/stripe.svg";
import StripeMobileLine from "./../assets/img/stripeMobile.svg";
export default function Stripe() {
    return (
        <div>
            <img src={StripeLine} alt='StripeLine' className='w-full hidden md:block' />
            <img src={StripeMobileLine} alt='StripeLine' className='w-full md:hidden' />
        </div>
    );
}
