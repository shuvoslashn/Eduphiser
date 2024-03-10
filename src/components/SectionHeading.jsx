/* eslint-disable react/prop-types */
export default function SectionHeading({ subHeading, heading }) {
    return (
        <div>
            <h4 className='text-xl font-arvo font-bold text-c-red pb-1'>{subHeading}</h4>
            <h3 className='text-3xl lg:text-5xl font-bold text-c-blue'>{heading}</h3>
        </div>
    );
}
