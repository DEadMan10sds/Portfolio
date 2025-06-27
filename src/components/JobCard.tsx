import { Card, CardBody } from "@material-tailwind/react"
import type JobInterface from "../interfaces/Job"

export const JobCard = ({ job }: { job: JobInterface }) => {
    return <Card className="w-full">
        <CardBody>
            {job.company}
        </CardBody>
    </Card>
}