import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

function ToastMessage({ showToast, setShowToast, toastMessage }) {
    return (
        <>
            <ToastContainer position="top-end" style={{ background: '#7CFC00', marginTop: '100px' }}>
                <Toast show={showToast} onClose={() => setShowToast(false)} delay={1000} autohide>
                    <Toast.Header style={{ height: '30px', justifyContent: 'space-between' }}>
                        <strong>Thông báo</strong>
                    </Toast.Header>
                    <Toast.Body style={{ color: '#1c1c1c', height: '40px', fontSize: '12px' }}>
                        {toastMessage}
                    </Toast.Body>
                </Toast>
            </ToastContainer>
        </>
    );
}
export default ToastMessage;
