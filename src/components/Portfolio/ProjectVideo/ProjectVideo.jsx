import { Video, VideoContainer } from "./ProjectVideo.styles";

export function ProjectVideo({ title, video }) {
	return (
		<VideoContainer>
			<Video src={video} alt={`${title.toLowerCase().split(" ").join("-")}`} width={300} height={200} />
		</VideoContainer>
	);
}
