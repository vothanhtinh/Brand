import { useForm } from 'react-hook-form';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '~/redux/authRequest';
import classNames from 'classnames/bind';
import styles from './login.module.scss';
import { Container } from 'react-bootstrap';

const cx = classNames.bind(styles);
const Login = () => {
    const msg = useSelector((state) => state.auth.login?.msg);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onSubmit = (data) => {
        const { username, password } = data;
        const newUser = {
            username: username,
            password: password,
        };
        loginUser(newUser, dispatch, navigate);
    };

    return (
        <Container>
            <section className={cx('login-container')}>
                <div className={cx('login-content')}>
                    <div className={cx('login-title')}> Log in</div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label>USERNAME</label>
                        <input
                            type="text"
                            {...register('username', { required: true })}
                            placeholder="Enter your username"
                        />
                        {errors.username && <span>Please enter your username</span>}

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
                        {msg && <span>{msg}</span>}
                        <button type="submit">Đăng Nhập</button>
                    </form>
                    <div className={cx('login-register')}>
                        <Link className="login-register-link" to="/register">
                            Register one for free
                        </Link>
                    </div>
                </div>
            </section>
        </Container>
    );
};

export default Login;
