import React from 'react';
import './ProductList.css'
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';

const ProductList = () => {
    const navigate = useNavigate();
    
    const handleNavigate = () => {
        navigate('/form');
    };

    return (
        <div>
            <Button onClick={handleNavigate}>Заполнить форму</Button>
        </div>
    );
};

export default ProductList;
