import { Link, useLocation } from "react-router-dom";
import useBoundStore from "../../store/Store";


import { useState } from 'react';
import { createStyles, Header, Container, Group, Burger, Text, Switch, useMantineTheme, useMantineColorScheme, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSun, IconMoonStars } from '@tabler/icons-react';


const useStyles = createStyles((theme) => ({
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
    },

    links: {
        [theme.fn.smallerThan('xs')]: {
            display: 'none',
        },
    },

    burger: {
        [theme.fn.largerThan('xs')]: {
            display: 'none',
        },
    },

    link: {
        display: 'block',
        lineHeight: 1,
        padding: `${rem(8)} ${rem(12)}`,
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,
        /* This is the background color of the default button - dark/light mode */
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.blue[1] : theme.colors.gray[0],
       '&:hover': {
            /* This is the background color of the button and font color when it is hovered - dark/light mode */
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.blue[6] : theme.colors.blue[8],
            color: theme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.gray[0],
        },
    },

    linkActive: {
        '&': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.blue[6] : theme.colors.blue[8],
            color: theme.colorScheme === 'dark' ? theme.colors.gray[8] : theme.colors.gray[8],
        },
    },
}));

interface HeaderSimpleProps {
    links: { link: string; label: string ; type: string}[];
}

export function Navbar(props) {

    const {links, activePage, setActivePage} = props;
    const [opened, {toggle}] = useDisclosure(false);
    const {classes, cx} = useStyles();

    const theme = useMantineTheme();
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const [checked, setChecked] = useState(colorScheme === 'dark' ? true : false);

    //THIS IS FROM THE OLD SCRIPT
    const { logoutService, user } = useBoundStore((state) => state);
    const onLogout = () => {
        logoutService();
    };
    const toLogin = () => {setActivePage('login');

    };
    //

    const items = links.map((link) => (
        <Text key={link.label} component={Link} className={cx(classes.link, {[classes.linkActive]: activePage === link.link})}
              to={link.link} onClick={(event) => {setActivePage(link.link);}}>{link.label}</Text>
    ));

    const itemsPublic = links.map((link) => (
        link.type==='public' ? (
        <Text key={link.label} component={Link} className={cx(classes.link, {[classes.linkActive]: activePage === link.link})}
              to={link.link} onClick={(event) => {setActivePage(link.link);}}>{link.label}</Text> ) : null
    ));


    const changeTheme = () => {
        toggleColorScheme();
        setChecked(checked===true? false: true);
    }

    return (
        <Header height={60} mb={180}>
            <Container className={classes.header}>
                    <Switch
                        checked={checked} onChange={(event) => changeTheme()}
                        size="md"
                        color={colorScheme === 'dark' ? 'gray' : 'dark'}
                        onLabel={<IconSun size="2em" stroke={2.5} color={theme.colors.yellow[4]} />}
                        offLabel={<IconMoonStars size="2em" stroke={2.5} color={theme.colors.blue[6]} />}
                    />
                <Text size={28}></Text>
                <Group spacing={5} className={classes.links}>



                    {!!user ? (
                        <>
                            {items}
                            <Text key='logout' component={Link} className={cx(classes.link)} onClick={onLogout}>
                                Logout
                            </Text>
                        </>
                    ) : (
                        <>
                            {itemsPublic}
                            <Text key='login' component={Link} className={cx(classes.link, {[classes.linkActive]: activePage === '/login'})} to='/login' onClick={()=>{setActivePage('/login');toLogin;}}>Login</Text>
                        </>
                    )}

                </Group>

                <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm"/>

            </Container>
        </Header>
    );
}




export default Navbar;
