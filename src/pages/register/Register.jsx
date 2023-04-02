import { registerUser } from '~/redux/authRequest';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './register.module.scss';
import { useForm } from 'react-hook-form';

const cx = classNames.bind(styles);
const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        const { username, password, email } = data;
        const newUser = {
            email: email,
            password: password,
            username: username,
        };
        registerUser(newUser, dispatch, navigate);
    };

    return (
        <section className={cx('register-container')}>
            <div className={cx('register-content')}>
                <div className={cx('register-title')}> Sign up </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>EMAIL</label>
                    <input
                        type="text"
                        {...register('email', {
                            required: true,
                            pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: 'Vui lòng đúng định dạng email',
                            },
                        })}
                        placeholder="Enter your email"
                    />
                    {errors.email && <span>{errors.email.message}</span>}
                    <label>USERNAME</label>
                    <input
                        type="text"
                        {...register('username', { required: true })}
                        placeholder="Enter your username"
                    />
                    {errors.username && <span>{errors.username.message}</span>}

                    <label>PASSWORD</label>
                    <input
                        type="password"
                        {...register('password', {
                            required: true,
                            pattern: {
                                value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                                message: 'Tối thiểu tám ký tự(chữ cái, số, ký tự đặc biệt)',
                            },
                        })}
                        placeholder="Enter your password"
                    />
                    {errors.password && <span>{errors.password.message}</span>}
                    <button type="submit">Đăng Ký</button>
                </form>
            </div>
        </section>
    );
};

export default Register;
