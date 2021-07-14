import { Carousel } from "antd";

export interface PhotoSliderProps {
  photos: string[];
}

const PhotoSlider: React.FC<PhotoSliderProps> = ({ photos }) => {
  const containerStyle = {
    width: "85%",
    margin: "auto",
    marginTop: "2em",
  };

  const imageStyle = {
    height: "42em",
    margin: "auto",
  };
  console.log(photos);

  return (
    <div style={containerStyle}>
      <Carousel>
        {photos.map((photo) => (
          <div>
            <img src={photo} alt={"photoImage"} style={imageStyle} />
            
          </div>
        ))}
      </Carousel>
      ,
    </div>
  );
};

export default PhotoSlider;
