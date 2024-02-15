import HomeStrats from "../components/HomeStrats";
import { mainColors } from "../layout/MainColors";

export default function Home() {

    return (
        <div className="flex flex-col gap-5">
            <div className={`w-full lg:mx-0 bg-componentColor p-32 text-primaryText rounded-lg`}>
                Nějaká omáčka
            </div>

            {/* Trading strategies */}

            <HomeStrats />
        </div >
    )
}