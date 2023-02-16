import { TABLET } from "@/constants";
import Link from "next/link";
import styled from "styled-components";

export const SocialLink = styled(Link)`
	margin: 0;

	@media screen and (max-width: ${TABLET}) {
		margin-right: 20px;
	}
`;
