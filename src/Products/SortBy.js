import * as React from 'react';
import MenuButton from '@mui/joy/MenuButton';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListDivider from '@mui/joy/ListDivider';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import ArrowRight from '@mui/icons-material/ArrowRight';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import Dropdown from '@mui/joy/Dropdown';

export default function GroupMenu() {
    const SIZES = ['Featured', 'Best Selling', 'Name, A-Z', 'Name, Z-A', 'Price,low to high', 'Price,high to low', 'Date,new to old', "Date,old to new"];
    const [size, setSize] = React.useState('Name, A-Z');

    return (
        <Dropdown>
            <MenuButton size={'small'} sx={{ borderWidth: 1, borderRadius: '0px', fontSize: '12px', fontWeight: '500', color: '#8A8A8A' }} endDecorator={<ArrowDropDown />}>{size}</MenuButton>
            <Menu sx={{ minWidth: 160, fontSize: '14px', borderRadius: 'none', color: '#8A8A8A' }}>
                <ListItem nested>
                    <List aria-label="sizes">
                        {SIZES.map((item) => (
                            <MenuItem
                                key={item}
                                role="menuitemradio"
                                aria-checked={item === size ? 'true' : 'false'}
                                onClick={() => {
                                    setSize(item);
                                }}
                            >
                                {item}
                            </MenuItem>
                        ))}
                    </List>
                </ListItem>
            </Menu>
        </Dropdown>
    );
}
