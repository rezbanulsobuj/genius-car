import React from 'react';
import expert1 from '../../../experts/expert-1.jpg'
import expert2 from '../../../experts/expert-2.jpg'
import expert3 from '../../../experts/expert-3.jpg'
import expert4 from '../../../experts/expert-4.jpg'
import expert5 from '../../../experts/expert-5.jpg'
import expert6 from '../../../experts/expert-6.png'
import Experts from '../Experts/Experts';
const expart = [
    { name: 'sajjad', id: 12, img: expert1 },
    { name: 'Ali', id: 13, img: expert2 },
    { name: 'Khan', id: 14, img: expert3 },
    { name: 'Mohamad', id: 15, img: expert4 },
    { name: 'Rabbi', id: 16, img: expert5 },
    { name: 'Yasmin', id: 17, img: expert6 }
]

const Expert = () => {
    return (
        <div id="experts" className='container'>
            <h1 className='text-primary text-center mt-5'>Our Expert</h1>
            <div className='row gy-5'>
                {
                    expart.map(expart => <Experts expart={expart} key={expart.id}></Experts>)
                }
            </div>
        </div>
    );
};

export default Expert;