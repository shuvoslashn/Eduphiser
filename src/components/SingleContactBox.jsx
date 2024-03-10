// eslint-disable-next-line react/prop-types
export default function SingleContactBox({ text, iconClass, info }) {
    return (
        <div className='p-8 border border-c-red rounded-2xl w-full'>
            <h4 className='text-xl font-arvo font-bold text-c-red pb-4'>{text}</h4>
            <div className='flex gap-4 items-center'>
                <div className='p-4 bg-c-blue w-16 h-16 flex justify-center items-center text-white rounded-full shadow-xl shadow-c-blue/70'>
                    <i className={`${iconClass} text-3xl`}></i>
                </div>
                <h3 className='text-xl 2xl:text-3xl font-bold'>{info}</h3>
            </div>
        </div>
    );
}
