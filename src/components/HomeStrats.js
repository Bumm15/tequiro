import { useEffect, useState } from "react";
import { Tooltip, Typography } from "@material-tailwind/react";
import { strats, TABLE_HEAD } from "../mocks/StratsData";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

export default function HomeStrats() {
    const [tableRows, setTableRows] = useState(strats)
    const [sortedBy, setSortedBy] = useState("votes")
    const [sortOrder, setSortOrder] = useState('asc'); // State to track sort order
    //const TABLE_HEAD = ["Name", "Market", "Winrate", "Risk To Reward", "Profit", "Votes", ""];

    function handleSort(columnName) {
        // Check if the column to be sorted is the same as the last one
        // If so, toggle the sort order; otherwise, set it to ascending
        const order = sortedBy === columnName && sortOrder === 'asc' ? 'desc' : 'asc';

        sortStratsBy(columnName, order);
        setSortOrder(order); // Update the sort order in state
    }

    function sortStratsBy(key, order = 'asc') {
        const sortedArray = tableRows.sort((a, b) => {
            let valueA = a[key];
            let valueB = b[key];

            // Convert strings that represent numbers or percentages to actual numbers
            if (typeof valueA === 'string' && (valueA.includes('%') || valueA.includes(','))) {
                valueA = parseFloat(valueA.replace(',', '.').replace('%', ''));
                valueB = parseFloat(valueB.replace(',', '.').replace('%', ''));
            }

            if (order === 'asc') {
                return valueA < valueB ? -1 : (valueA > valueB ? 1 : 0);
            } else { // Assuming 'desc' for any other order value
                return valueA > valueB ? -1 : (valueA < valueB ? 1 : 0);
            }
        });

        setTimeout(() => {
            setTableRows(sortedArray);
            setSortedBy(key);
        }, 0);
    }

    useEffect(() => {
        handleSort("votes")
    }, [])

    return (
        <>
            <div className={`flex justify-between text-primaryText`}>
                <Typography variant="h5">🔥 Hot Strategies</Typography>
                <Typography as="a" variant="small">See All</Typography>
            </div>
            <div className="bg-componentColor w-full lg:mx-0 p-3 text-primaryText rounded-lg overflow-x-scroll md:overflow-x-hidden">

                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map(({ id, name, tooltip }) => (
                                <th key={id} className="border-b border-hover bg-componentColor p-4">
                                    <Typography
                                        variant="small"
                                        className="font-normal leading-none opacity-70 cursor-pointer inline-flex gap-1 text-secondaryText"
                                        onClick={() => handleSort(name)}
                                    >
                                        {name} {tooltip && <Tooltip content={tooltip}><QuestionMarkCircleIcon className="w-4 h-4" /></Tooltip>}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {tableRows.map(({ id, name, market, winrate, riskToReward, profit, votes, hotStrat }, index) => (

                            <tr key={id + "j5a2"} className="even:bg-menuBar hover:bg-hover">
                                <td className="p-4">
                                    <Typography variant="small" className="font-normal text-primaryText">
                                        {name} {hotStrat ? "🔥" : ""}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Typography variant="small" className="font-normal">
                                        {market}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Typography variant="small" className="font-normal">
                                        {winrate}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Typography variant="small" className="font-normal text-primaryText">
                                        {riskToReward}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Typography variant="small" className="font-normal text-primaryText">
                                        {profit}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Typography variant="small" className="font-normal text-primaryText">
                                        {votes}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Typography as="a" href={`/strategies/${id}`} variant="small" className=" text-blue-500">
                                        Details
                                    </Typography>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </>
    )
}