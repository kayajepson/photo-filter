import Image from "next/image";

function Card({
    image = ''
}) {
  return (
    <div className="w-full h-96 md:h-screen/2 relative" data-testid="card-container">
        <Image
          src={image}
          data-testid="card-image"
          layout="fill"
          className="h-full w-full object-cover"
        />
        
    </div>
  );
}

export default Card;
