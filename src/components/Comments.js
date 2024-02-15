import {
    Avatar,
    Card,
    CardBody,
    Input,
    Rating,
    Typography,
} from "@material-tailwind/react";

export function CardReview({ name, feedback, date, img, replayLevel = 0 }) {
    return (
        <Card shadow={false} className={`flex flex-col bg-componentColor w-full`}>
            <CardBody>
                <Rating value={4} color="amber" className="mb-3 text-blue-500" />
                <Typography
                    variant="leading"
                    className="text-base font-normal !text-secondaryText"
                >
                    {feedback}
                </Typography>
                <div className="mt-5 flex items-center gap-5">
                    <div className="!m-0 !mb-4">
                        <Avatar
                            src={img}
                            alt={img}
                            size="lg"
                            variant="rounded"
                            className="h-[48px] w-[48px] "
                        />
                    </div>
                    <div className="!p-0">
                        <Typography
                            variant="h6"
                            className="font-medium text-primaryText"
                        >
                            {name}
                        </Typography>
                        <Typography className="mb-4 text-base font-normal !text-secondaryText">
                            {date}
                        </Typography>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}

const CONTENTS = [
    {
        name: "Ryan Samuel",
        feedback:
            "If everything I did failed - which it doesn't, it actually succeeds - just the fact that I'm willing to fail is an inspiration. People are so scared to lose that they don't even try. Like, one thing people can't say is that I'm not trying, and I'm not trying my hardest, and I'm not trying to do the best way I know how.",
        date: "03 March 2023",
        img: `https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/avatar1.jpg`,
        replys: [
            {
                name: "Honza Marek",
                feedback: "If everything I did failed - which it doesn't, it actually succeeds - just the fact that I'm willing to fail is an inspiration. People are so scared to lose that they don't even try. Like, one thing people can't say is that I'm not trying, and I'm not trying my hardest, and I'm not trying to do the best way I know how.",
                date: "04 March 2024",
                img: `https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/avatar3.jpg`,
                replayLevel: 1
            }
        ]
    },
    {
        name: "Emma Roberts",
        feedback:
            "If everything I did failed - which it doesn't, it actually succeeds - just the fact that I'm willing to fail is an inspiration. People are so scared to lose that they don't even try. Like, one thing people can't say is that I'm not trying, and I'm not trying my hardest, and I'm not trying to do the best way I know how.",
        date: "14 February 2023",
        img: `https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/avatar2.jpg`,
        replys: []
    },
    {
        name: "Bruce Mars",
        feedback:
            "If everything I did failed - which it doesn't, it actually succeeds - just the fact that I'm willing to fail is an inspiration. People are so scared to lose that they don't even try. Like, one thing people can't say is that I'm not trying, and I'm not trying my hardest, and I'm not trying to do the best way I know how.",
        date: "10 February 2023",
        img: `https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/avatar3.jpg`,
        replys: []
    },
];
export function CommentSection() {
    return (
        <section className="py-10 w-full">
            <div className="mx-auto flex w-full flex-col items-center px-2">
                <Typography variant="h6" className="mb-3">
                    Review
                </Typography>
                <Typography variant="h3" clasName="!text-center">
                    Not sure? Ask our comunity!
                </Typography>
                <Typography
                    variant="leading"
                    color="blue-gray"
                    className="mt-3 max-w-2xl text-center font-normal text-gray-500"
                >
                    If you can&apos;t decide, the answer is no. If two equally difficult
                    paths, choose the one more painful in the short term (pain avoidance
                    is creating an illusion of equality).
                </Typography>
                <div className="mt-32 flex flex-col gap-5 w-full">
                    {/* write comment */}
                    <Card shadow={false} className="flex flex-col bg-componentColor">
                        <CardBody>
                            <div className="mt-5 flex items-center gap-5">
                                <div className="!m-0 !mb-4">
                                    <Avatar
                                        src={"https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/avatar3.jpg"}
                                        alt={"https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/avatar3.jpg"}
                                        size="lg"
                                        variant="rounded"
                                        className="h-[48px] w-[48px] "
                                    />
                                </div>
                                <Input variant="standard" label="Ask a question" placeholder="Ask a question" color="white" />
                            </div>
                            <div className="flex justify-between">
                                <div className="inline-flex items-center gap-5 text-center">
                                    <Rating value={0} color="amber" className="mt-3 h-full text-blue-500" />
                                    <Typography variant="small" className="h-full text-secondaryText">
                                        Or leave a review
                                    </Typography>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                    {CONTENTS.map(({ name, feedback, img, date, replys }, index) => (
                        <>
                            <CardReview
                                key={"comment_" + index}
                                name={name}
                                feedback={feedback}
                                img={img}
                                date={date}
                            />
                            {replys && replys.map(({ name, feedback, img, date, replys, replayLevel }, index) => (
                                <div className={`ml-${10 * replayLevel} mb-5 -mt-3`}>

                                    <CardReview
                                        key={"reply_" + index}
                                        name={name}
                                        feedback={feedback}
                                        img={img}
                                        date={date}
                                        replayLevel={replayLevel}
                                    />
                                </div>
                            ))}
                        </>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CommentSection;