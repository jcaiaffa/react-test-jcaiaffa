import styled from "styled-components";
import React from "react";
import parse from "html-react-parser";

type Props = {
	content: string;
};

const GenericTextWrapper = styled.div`
	display: flex;
	text-align: left;
	max-width: 1200px;
	margin: 0 auto;
	padding: 50px 60px;
	flex-direction: column;
`;

const GenericText = ({ content }: Props) => {
	return (
		<div>
			<GenericTextWrapper>{parse(content)}</GenericTextWrapper>
		</div>
	);
};

export default GenericText;
