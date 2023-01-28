export function ProjectVideo({ title, video }) {
	return (
		<div>
			<img src={video} alt={`${title.toLowerCase().split(" ").join("-")}`} />
		</div>
	);
}
