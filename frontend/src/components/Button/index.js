import { Container } from "./style";

export const Button = ({ children, ...props }) => {
	return <Container {...props}>{children}</Container>;
};
