import { TABLET } from "@/constants";
import Image from "next/image";
import styled from "styled-components";

export const VideoContainer = styled.div`
	width: 100%;

	@media screen and (max-width: ${TABLET}) {
		margin-top: 20px;
	}
`;

export const Video = styled(Image)`
	width: 100%;
	height: auto;
`;
