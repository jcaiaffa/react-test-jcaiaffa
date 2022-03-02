import React, { useState } from "react";
import useSelector from "../../shared/hooks/useSelector";
import styled from "styled-components";
import useDispatch from "../../shared/hooks/useDispatch";
import { setUsername } from "../../store/login";
import { useNavigate } from "react-router-dom";

const LoginWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
`;

const Login = () => {
	const [name, setName] = useState("");
	const dispatch = useDispatch();

	const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
		setName(target.value);
	};

	const handleKeyPress = ({ code }: React.KeyboardEvent<HTMLInputElement>) => {
		if (code === "Enter" || code === "NumpadEnter") {
			dispatch(setUsername(name));
			name ? navigate("/") : null;
		}
	};
	const username = useSelector((state) => state.login.username);
	const navigate = useNavigate();

	const handleSubmit = () => {
		name ? dispatch(setUsername(name)) : null;
		name ? navigate("/") : null;
	};

	return (
		<div>
			<LoginWrapper>
				{username ? (
					<div>
						<h1>Welcome {username}</h1>
						<button
							onClick={() => {
								dispatch(setUsername(""));
							}}
						>
							Logout
						</button>
					</div>
				) : (
					<div>
						<h1>Test Login</h1>
						<input
							type="text"
							placeholder="Enter your name"
							onChange={handleChange}
							onKeyPress={name ? handleKeyPress : undefined}
						/>
						<button onClick={handleSubmit}>login</button>
					</div>
				)}
			</LoginWrapper>
		</div>
	);
};

export default Login;
