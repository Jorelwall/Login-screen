import { Moon } from 'phosphor-react';
import { useState, useEffect } from 'react';

export default function DarkModeButton(){ 
    const [theme, setTheme] = useState('light');
    let darkTheme = localStorage.getItem('darkTheme');

    if(darkTheme === null) localStorage.setItem('darkTheme', 'light');

    useEffect(() => { 
        if(darkTheme === 'dark'){
            document.documentElement.classList.add('dark');
            setTheme('dark');
        }else { 
            document.documentElement.classList.remove('dark');
            setTheme('light');
        };
    }, [darkTheme]);

    function handleThemeSwitch(){
        theme === 'dark' ? setTheme('light') : setTheme('dark');

        localStorage.setItem('darkTheme', theme);
    };

    return (
        <>
            <Moon 
                size={32}
                onClick={handleThemeSwitch}
                className='mr-2 mt-2 cursor-pointer dark:text-white'
            />
        </>
    );
}; 