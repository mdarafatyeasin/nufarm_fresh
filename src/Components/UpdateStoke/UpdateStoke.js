import React from 'react';
import { useParams } from 'react-router-dom';

const UpdateStoke = () => {
    const { updateId } = useParams()
    return (
        <div>
            <h2>wellcome to Update {updateId}</h2>
        </div>
    );
};

export default UpdateStoke;