import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function CardProject() {
  return (
    <Card className="mt-6 w-96" variant="neomorphism" color="transparent">
      <CardBody>
        <Typography variant="h5" className="mb-2">
          Proyecto oscuro
        </Typography>
        <Typography>Contenido de ejemplo en tema oscuro.</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button size="sm" variant="filled">
          Learn More
        </Button>
      </CardFooter>
    </Card>
  );
}
