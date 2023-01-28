import Image from "next/image";

export function ProjectVideo({ title, video }) {
	return (
		<div>
			<Image src={video} alt={`${title.toLowerCase().split(" ").join("-")}`} width={500} height={300} />
		</div>
	);
}
