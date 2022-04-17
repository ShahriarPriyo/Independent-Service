import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';

const Footer = () => {


    return (
        <div>

            <footer className='bg-dark text-warning text-center'>
                <h3>copyright @ Shahriar Priyo</h3>
                <p>For Contact join our facebook page.</p>
            </footer>
        </div>
    );
};

export default Footer;