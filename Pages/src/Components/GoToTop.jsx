
import { FaArrowUp } from 'react-icons/fa';

const GoToTop = () => {
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            onClick={handleScrollToTop}
            className="fixed  bottom-20 right-8  z-20"
            style={{ marginLeft: '-5px', marginBottom: '-5px' }}
        >
            <FaArrowUp className='text-[#00b0f0] text-2xl ' />
        </button>
    );
};

export default GoToTop;
