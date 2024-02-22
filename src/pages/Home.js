import { Typography } from "@material-tailwind/react";
import HomeStrats from "../components/HomeStrats";

export default function Home() {

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className='w-full p-3 lg:mx-0 bg-componentColor text-primaryText rounded-lg'>
            <Typography variant="h3">Welcome to ObjectiveTrader.com</Typography><br />
            <p>Here, we’ve got a bunch of trading strategies for you to check out. You can sort them by backtesting data or see what other users think about them.</p><br />
            <p>Looking for a broker? We’ve got you covered. We’ve listed all the brokers we know, along with their pros and cons. No fluff, just the facts.</p><br />
            <p>We’re all about community here. Share your strategies, get some feedback, and learn from others. And hey, we’re working on a cool educational tab to help you understand trading terms better.</p>
            So, take a look around ObjectiveTrader.com. No pressure, just good, objective trading info. Enjoy!
            </div>

            {/* Trading strategies */}

            <HomeStrats />
        </div >
    )
}