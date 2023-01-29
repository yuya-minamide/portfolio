import styled from "styled-components";
import { CommonButton } from "../index";

export function ProjectDescription({ description, url, button }) {
	return (
		<>
			<p>{description}</p>
			<CommonButton url={url} content={button} style={{ width: "200px" }} />
		</>
	);
}
