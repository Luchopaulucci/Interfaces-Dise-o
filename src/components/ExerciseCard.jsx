import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import PropTypes from 'prop-types';

const ExerciseCard = ({name, description, link, page}) => {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://static.vecteezy.com/system/resources/previews/002/363/087/original/programming-icon-free-vector.jpg"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">{name}</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p>{description}</p>
      </CardBody>
      <Divider/>
      <CardFooter className="flex justify-between">
        <Link
          isExternal
          showAnchorIcon
          href={link}
        >
          Link al drive
        </Link>
        <Link
          href={`${page}`}
        >
          Pantallas
        </Link>
      </CardFooter>
    </Card>
  )
}

ExerciseCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  page: PropTypes.string,
}

export default ExerciseCard