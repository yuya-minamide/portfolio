import styled from "styled-components";
import Image from "next/image";
import { TABLET } from "@/constants";

const VideoContainer = styled.div`
	width: 100%;

	@media screen and (max-width: ${TABLET}) {
		margin-top: 20px;
	}
`;

const Video = styled(Image)`
	width: 100%;
	height: auto;
`;

export function ProjectVideo({ title, video }) {
	return (
		<VideoContainer>
			<Video src={video} alt={`${title.toLowerCase().split(" ").join("-")}`} width={300} height={200} />
		</VideoContainer>
	);
}
