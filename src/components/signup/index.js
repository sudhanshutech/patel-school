import React from "react";
import {
  Container,
  SubContainer,
  Label,
  Input,
  Button,
  MessageText,
  MessageContainer,
  Link,
  Headline,
  Div,
  Forget,
  Img,
  Line1,
  Line2,
  OrText,
  SignDiv,
  Image,
  Text,
  GoogleSignin,
} from "./styles/signup";

export default function Signup({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Signup.SubContainer = function SignupSubContainer({ children, ...restProps }) {
  return <SubContainer {...restProps}>{children}</SubContainer>;
};

Signup.Label = function SignupLabel({ children, ...restProps }) {
  return <Label {...restProps}>{children}</Label>;
};

Signup.Input = function SignupInput({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>;
};

Signup.Button = function SignupButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

Signup.MessageContainer = function SignupMessageContainer({
  children,
  ...restProps
}) {
  return <MessageContainer {...restProps}>{children}</MessageContainer>;
};

Signup.MessageText = function SignupMessageText({ children, ...restProps }) {
  return <MessageText {...restProps}>{children}</MessageText>;
};

Signup.Link = function SignupLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Signup.Div = function SignupDiv({ children, ...restProps }) {
  return <Div {...restProps}>{children}</Div>;
};

Signup.Headline = function SignupHeadline({ children, ...restProps }) {
  return <Headline {...restProps}>{children}</Headline>;
};

Signup.Forget = function SignupForget({ children, ...restProps }) {
  return <Forget {...restProps}>{children}</Forget>;
};

Signup.Img = function SignupForget({ ...restProps }) {
  return <Img {...restProps} />;
};

Signup.SignDiv = function SignupSignDiv({ children, ...restProps }) {
  return <SignDiv {...restProps}>{children}</SignDiv>;
};

Signup.Line1 = function SignupLine1({ ...restProps }) {
  return <Line1 {...restProps} />;
};

Signup.Line2 = function SignupLine2({ ...restProps }) {
  return <Line2 {...restProps} />;
};

Signup.OrText = function SignupOrText({ children, ...restProps }) {
  return <OrText {...restProps}>{children}</OrText>;
};

Signup.GoogleSignin = function SignupGoogleSignin({ children, ...restProps }) {
  return <GoogleSignin {...restProps}>{children}</GoogleSignin>;
};

Signup.Image = function SignupImage({ children, ...restProps }) {
  return <Image {...restProps}>{children}</Image>;
};

Signup.Text = function SignDivText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
