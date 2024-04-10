import { useState } from "react";
import RPhotoAlbum from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import Screenshot from "@/assets/projects/screenshots/ausfirst.png";
import { Box, useBreakpointValue } from "@chakra-ui/react";

const photos = [
	{
		src: Screenshot,
		height: 1130,
		width: 914,
		title: "FIRST Australia Registration System",
		description: "A screenshot of the registration system",
	},
];

const PhotoAlbum = () => {
	const [index, setIndex] = useState(-1);

	const columns = useBreakpointValue([1, 1]);

	return (
		<Box h="100%" w="100%">
			<RPhotoAlbum
				photos={photos}
				layout="masonry"
				columns={columns}
				onClick={({ index }) => setIndex(index)}
			/>
			<Lightbox
				slides={photos}
				open={index >= 0}
				index={index}
				close={() => setIndex(-1)}
				// enable optional lightbox plugins
				plugins={[Fullscreen, Slideshow, Thumbnails, Zoom, Captions]}
			/>
		</Box>
	);
};

export default PhotoAlbum;
