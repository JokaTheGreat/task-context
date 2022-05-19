import { useState } from 'react';
import { data, IItem } from './data';
import { Theme, ThemeProvider, useTheme } from './Context';
import './styles.css';

export function App() {
    const [currentTheme, setCurrentTheme] = useState<Theme>('light');

    function changeTheme() {
        setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
    }

    const className = `app app_${currentTheme}`;
    return (
        <div className={className}>
            <button onClick={changeTheme}>Toggle theme</button>
            <ThemeProvider
                theme={currentTheme}
                children={<List data={data} />}
            />
        </div>
    );
}

function List(props: { data: IItem[] }) {
    return (
        <div>
            {props.data.map((item) => (
                <ListItem caption={item.name} key={item.id} />
            ))}
        </div>
    );
}

function ListItem(props: { caption: string }) {
    const theme = useTheme();
    const className = `listItem listItem_${theme}`;

    return <div className={className}>{props.caption}</div>;
}
