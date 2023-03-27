import HeaderBottom from './components/HeaderBottom';
import HeaderMobile from './components/headerMobile';
import HeaderTop from './components/HeaderTop';

import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

function Header() {
    const isMobile = useMediaQuery({ maxWidth: 575 });
    const [isMenuOpen, setMenuOpen] = useState(false);

    function handleMenuToggle() {
        setMenuOpen(!isMenuOpen);
    }
    return (
        <>
            {isMobile ? (
                <HeaderMobile isOpen={isMenuOpen} onToggle={handleMenuToggle} />
            ) : (
                <>
                    <HeaderTop />
                    <HeaderBottom />
                </>
            )}
        </>
    );
}
export default Header;
