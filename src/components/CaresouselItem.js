import { Carousel } from "react-bootstrap"

function CaresouselItem(props) {
  return (
    <Carousel className=" d-block w-50 h-70 mt-5 ms-3" fade controls={false}>
      {props.CarouselPic.map(pic => (
        <Carousel.Item>
          <img className="d-block w-100" src={pic} height="700px" />
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default CaresouselItem
