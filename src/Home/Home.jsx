import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../public/image/password-code-verification-security-protection-authorization-notice-mobile-phone-digital-secure-access-pus-notification-message-cellphone-vector-flat_212005-111.avif'

const Home = () => {
    return (
        <div className='flex justify-around mt-10 '>
            <div className="card w-96 shadow-xl bg-slate-300">
                <figure className="px-10 pt-10">
                    <img src={img} />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">US Phone Verify
                    </h2>
                    <h2 className='text-3xl font-bold'>Management Panel
                    </h2>
                    <p>For questions and assistance contact <a href=""><b>rahmanPrantor</b></a> on Skype.
                    </p>
                    <div className="card-actions">
                        <Link to='/login'>
                            <button className="btn btn-warning">US PHONE VERIFY MOBILE NUMBERS</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;