import React from 'react';
import LogoGreen from '../../components/logos/LogoGreen';
import LogoLight from '../../components/logos/LogoLight';
import { useTheme } from '../../contexts/ThemeContext';

const Logo = () => {
    const { theme } = useTheme();

    return theme === 'light' ? <LogoGreen /> : <LogoLight />;
};

export default Logo;
