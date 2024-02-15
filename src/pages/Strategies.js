import { useParams, useLocation } from "react-router-dom"
import { strats, tags } from "../mocks/StratsData"
import { Card, CardBody, CardFooter, Chip, Tooltip, Typography } from "@material-tailwind/react"
import ChartThing from "../components/Chart"
import { ChartBarIcon } from "@heroicons/react/24/solid"
import { CommentSection } from "../components/Comments"


export default function Strategies() {
    const params = useParams()
    console.log(useLocation())
    const currentStrat = strats[params["stratid"] - 1]
    return (
        <>
            <div className="flex flex-col gap-3 text-primaryText">


                <div className="flex justify-between mt-3 bg-mainbg text-primaryText">
                    <Typography variant="h5" className="mb-5">{currentStrat.name} {currentStrat.hotStrat && "🔥"}</Typography>
                    <div className="inline-flex gap-5">
                        {currentStrat.tags.map(tag => (
                            <Tooltip content={tags[tag]?.tooltip}>
                                <Chip icon={tags[tag]?.icon} color={tags[tag]?.color} size="sm" className="h-5 w-5 p-3 justify-items-center" />
                            </Tooltip>
                        ))}
                    </div>
                </div>

                <aside className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Card className="bg-componentColor rounded-lg text-primaryText">
                        <CardBody>
                            <Typography>Krátký popis dnawn asnd awnas nsan askdna lwnds lnadalsdnw dlkasnd klawnkd nsaldn askldn saldn klawdnsakl dnakns akl</Typography>
                        </CardBody>
                        <CardFooter>
                            Show more
                        </CardFooter>
                    </Card>
                    <div className="bg-componentColor p-3 rounded-lg">

                        <div className={`grid grid-cols-2 gap-3`}>
                            <div className="inline-flex gap-3 hover:bg-hover p-3 rounded-md">
                                <ChartBarIcon className="w-5 h-5 text-blue-500" />
                                <Typography>
                                    {currentStrat.profit}
                                </Typography>
                            </div>
                            <div className="inline-flex gap-3 hover:bg-hover p-3 rounded-md">
                                <ChartBarIcon className="w-5 h-5 text-blue-500" />
                                <Typography>
                                    {currentStrat.market}
                                </Typography>
                            </div>
                            <div className="inline-flex gap-3 hover:bg-hover p-3 rounded-md">
                                <ChartBarIcon className="w-5 h-5 text-blue-500" />
                                <Typography>
                                    {currentStrat.winrate}
                                </Typography>
                            </div>
                            <div className="inline-flex gap-3 hover:bg-hover p-3 rounded-md">
                                <ChartBarIcon className="w-5 h-5 text-blue-500" />
                                <Typography>
                                    {currentStrat.riskToReward}
                                </Typography>
                            </div>
                            <div className="inline-flex gap-3 hover:bg-hover p-3 rounded-md">
                                <ChartBarIcon className="w-5 h-5 text-blue-500" />
                                <Typography>
                                    {currentStrat.votes}
                                </Typography>
                            </div>
                        </div>
                    </div>

                    <meta name="google-site-verification" content="_6K7vVBnwpIbh3rkRC3YbBVl6YoEAT2AvB8_0Og60BI" />
                </aside>
                <Typography variant="h6" color="white">
                    Backtest data
                </Typography>
                <div className="!bg-componentColor rounded-lg p-3">
                    <ChartThing />
                </div>
                <div className="p-10 bg-componentColor rounded-lg">
                    Reklama?
                </div>

                <div className="bg-componentColor rounded-lg p-3">
                    Další sračky lol

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet libero felis, sed aliquam sem ullamcorper vitae. Aliquam facilisis at nibh vel semper. Sed et erat quis lorem elementum vestibulum nec vehicula lacus. Duis suscipit aliquam magna non lobortis. Praesent euismod, libero in porttitor interdum, nunc tortor ornare eros, at pharetra eros urna at orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus porttitor, metus dictum vestibulum tristique, eros nulla maximus erat, id convallis massa eros vitae eros. Integer eu justo nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas porta orci nec urna convallis, sed aliquet justo faucibus. In libero enim, congue in ornare ac, condimentum vitae magna.
                    </p><p>
                        Nullam porttitor arcu diam. Nunc in ornare massa. Nulla ullamcorper libero nibh, eu varius libero varius eu. Nam at ipsum sodales, lacinia arcu sed, ullamcorper nisl. Donec facilisis nulla a diam placerat, vitae blandit tortor hendrerit. Praesent eleifend, arcu non bibendum volutpat, enim metus ullamcorper metus, sit amet iaculis tortor velit non dui. Sed sit amet felis imperdiet, euismod nisl et, feugiat elit.</p>
                </div>

                <CommentSection />
            </div >
        </>
    )
}