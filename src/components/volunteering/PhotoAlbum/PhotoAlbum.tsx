import { useState } from "react";
import RPhotoAlbum from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import Mate from "@/assets/volunteering/bball-mate.jpg";
import Ddu from "@/assets/volunteering/ddu.jpg";
import Ftc from "@/assets/volunteering/ftc.jpg";
import Lego from "@/assets/volunteering/lego.jpg";
import StateOfOrigin from "@/assets/volunteering/stateoforigin.jpg";
import Wookie from "@/assets/volunteering/wookie.jpg";
import Building from "@/assets/volunteering/building.jpg";
import AudioVisuals from "@/assets/volunteering/audiovisuals.jpg";
import Steamworks from "@/assets/volunteering/steamworks.jpg";
import { Box, useBreakpointValue } from "@chakra-ui/react";

const photos = [
  {
    src: Mate,
    height: 3456,
    width: 5184,
    title: "MATE",
    description:
      "The first robot I built in FIRST Robotics Compeitition as a student participant (labelled 3132).  In this shot, it's shooting two basketballs into a hoop autonomously",
  },
  {
    src: Ddu,
    height: 916,
    width: 1920,
    title: "DDU 2012",
    description:
      "The first time we hosted a FIRST Robotics Competition tournament in Australia;  I was a key part of the organising committee",
  },
  {
    src: Ftc,
    height: 919,
    width: 1221,
    title: "FIRST Tech Challenge Asia Pacific Invitational 2023",
    description:
      "A snapshot from the 2023 FIRST Tech Challenge Asia Pacific Invitational tournament;  I ran the robot fields as one of two Field Technical Advisors",
  },
  {
    src: Lego,
    height: 3072,
    width: 4080,
    title: "FIRST LEGO League",
    description:
      "A robot competing autonomously in the FIRST LEGO League, for which I act as national head referee.",
  },
  {
    src: StateOfOrigin,
    height: 919,
    width: 1225,
    title: "FIRST Tech Challenge State of Origin",
    description:
      "A few of my students and fellow mentors from the FTC State of Origin competition;  we competed with a custom polycarbonate robot and ended up coming second among the NSW teams",
  },
  {
    src: Wookie,
    height: 919,
    width: 1225,
    title: "Wookie",
    description:
      "A robot built by a team I mentored in the FIRST Robotics Competition while working at a makerspace for kids.  I later went on to hire one of the team's programmers for two years as a frontend developer when he went to uni.",
  },
  {
    src: Building,
    height: 3024,
    width: 4032,
    title: "Building a robot",
    description:
      "Me (right) mentoring some students in constructing a robot for the FIRST Robotics Competition during an off-season event hosted at Macquarie University.",
  },
  {
    src: AudioVisuals,
    height: 3036,
    width: 4048,
    title: "Operating the livestream",
    description:
      "At many events, I end up running the audio-visuals for the event and operating the livestream to YouTube; this was a National FIRST LEGO League tournament and I was backstage running the scoring system, cameras and audio.",
  },
  {
    src: Steamworks,
    height: 3036,
    width: 4048,
    title: "Steamworks",
    description:
      "An overview of the competition floor for an off-season FIRST Robotics Competition event for the 2017 game, Steamworks.  Most of the event is run by volunteers, many of whom are professional engineers.",
  },
];

const PhotoAlbum = () => {
  const [index, setIndex] = useState(-1);

  const columns = useBreakpointValue([1, 2]);

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
