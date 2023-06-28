import { Card, CardBody, Typography } from "@material-tailwind/react";
import {
  SunIcon as SunIconSolid,
  SpeakerWaveIcon as SpeakerWaveIconSolid,
} from "@heroicons/react/24/solid";
import {
  SunIcon as SunIconOutline,
  SpeakerWaveIcon as SpeakerWaveIconOutline,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SelectionCard({ ...props }) {
  const type = props.props.type;
  const [iconHovering, seticonHovering] = useState(false);

  let navigate = useNavigate();
  const handleOnClick = () => {
    if (type === "light") {
      navigate("/light");
    } else {
      navigate("/sound");
    }
  };

  return (
    <Card
      className="mt-6 w-4/12 transform transition-all duration-500 ease-in-out hover:scale-105 hover:cursor-pointer hover:shadow-xl"
      onClick={handleOnClick}
    >
      <CardBody className="flex flex-col items-center justify-center gap-5">
        {type === "light" ? (
          iconHovering === false ? (
            <SunIconOutline
              className="text-accentcolor mb-4 h-12 w-12"
              onMouseEnter={() => {
                seticonHovering(true);
              }}
            />
          ) : (
            <SunIconSolid
              className="text-accentcolor mb-4 h-12 w-12"
              onMouseLeave={() => {
                seticonHovering(false);
              }}
            />
          )
        ) : iconHovering === false ? (
          <SpeakerWaveIconOutline
            className="text-accentcolor mb-4 h-12 w-12"
            onMouseEnter={() => {
              seticonHovering(true);
            }}
          />
        ) : (
          <SpeakerWaveIconSolid
            className="text-accentcolor mb-4 h-12 w-12"
            onMouseLeave={() => {
              seticonHovering(false);
            }}
          />
        )}
        <Typography
          variant="h5"
          color="blue-gray"
          className="product-sans mb-2 text-2xl"
        >
          Test Response to {type ? type : "A Stimulus"}
        </Typography>
      </CardBody>
    </Card>
  );
}
