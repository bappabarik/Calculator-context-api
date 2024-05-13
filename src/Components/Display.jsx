import { useCalculator } from '../Contexts/CalContext';

const Display = () => {
    const { expression } = useCalculator()
    console.log(expression);

    return (
        <div className='bg-slate-500 rounded-md w-full p-1'>
            <input value={expression} className=' font-bold text-2xl p-4 outline-none w-full text-right' readOnly />
        </div>
    );
}

export default Display;
