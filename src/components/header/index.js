import React from 'react';
import {
    Container, Logo, Frame, Menu, ButtonLink, Profile, MenuLogo, BurgerMenu, Text, CrossButton, Div, MenuButtonLink, MenuBgImg, ProfileSignUp, AuthButton
} from './styles/header';

export default function Header({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>;
};

Header.Logo = function HeaderLogo({ children, ...restProps }) {
    return <Logo {...restProps}>{children}</Logo>;
};

Header.Menu = function HeaderMenu({ children, ...restProps }) {
    return <Menu {...restProps}>{children}</Menu>;
};

Header.AuthButton = function HeaderAuthButton({ children, ...restProps }) {
    return <AuthButton {...restProps}>{children}</AuthButton>;
};

Header.Profile = function HeaderProfile({ children, ...restProps }) {
    return <Profile {...restProps}>{children}</Profile>;
};

Header.ProfileSignUp = function HeaderProfile({ children, ...restProps }) {
    return <ProfileSignUp {...restProps}>{children}</ProfileSignUp>;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
    return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.MenuButtonLink = function HeaderMenuButtonLink({ children, ...restProps }) {
    return <MenuButtonLink {...restProps}>{children}</MenuButtonLink>;
};

Header.Text = function HeaderText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
};

Header.MenuLogo = function HeaderMenuLogo({ ...restProps }) {
    return <MenuLogo {...restProps} />
};

Header.BurgerMenu = function HeaderBurgerMenu({ children, ...restProps }) {
    return <BurgerMenu {...restProps}>{children}</BurgerMenu>
}

Header.Div = function HeaderDiv({ children, ...restProps }) {
    return <Div {...restProps}>{children}</Div>
}

Header.CrossButton = function HeaderCrossButton({ ...restProps }) {
    return <CrossButton {...restProps} />
}

Header.MenuBgImg = function HeaderMenuBgImg({ ...restProps }) {
    return <MenuBgImg {...restProps} />
}