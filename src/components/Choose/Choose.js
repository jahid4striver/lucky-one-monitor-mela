import React from 'react';

const Choose = ({choose}) => {
    return (
        <div>
            <img src={choose.img} alt="" />
            <h1>{choose.name}</h1>
        </div>
    );
};
export default Choose;