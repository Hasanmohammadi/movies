import { Carousel } from "antd";
import { useParams } from "react-router";

export interface PhotoSliderProps {
  photos: string[];
}

const PhotoSlider: React.FC<PhotoSliderProps> = ({ photos }) => {
  const { id }: { name: string; id: string } = useParams();
  const containerStyle = {
    width: "85%",
    margin: "auto",
    marginTop: "2em",
  };

  const imageStyle = {
    height: "42em",
    margin: "auto",
  };

  return (
    <div style={containerStyle}>
      <Carousel>
        {photos.map((photo) => (
          <div key={id}>
            <img src={photo} alt={"photoImage"} style={imageStyle} />
          </div>
        ))}
      </Carousel>
      ,
    </div>
  );
};

export default PhotoSlider;
