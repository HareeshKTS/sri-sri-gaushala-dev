import { Card } from "@/components/ui/card";
import { useMediaQuery } from "@/shared/utils";
import {
    Area,
    AreaChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import type { RawChartData, SelectMonths } from "../../../Types";
import CustomSelect from "@/shared/CustomSelect";


const rawData: RawChartData[] = [
    { month: "Jan", uv: 80, pv: 100 },
    { month: "Feb", uv: 760, pv: 430 },
    { month: "Mar", uv: 380, pv: 400 },
    { month: "Apr", uv: 200, pv: 400 },
    { month: "May", uv: 880, pv: 300 },
    { month: "Jun", uv: 420, pv: 570 },
    { month: "Jul", uv: 260, pv: 400 },
    { month: "Aug", uv: 490, pv: 100 },
    { month: "Sep", uv: 360, pv: 470 },
    { month: "Oct", uv: 410, pv: 100 },
    { month: "Nov", uv: 680, pv: 810 },
    { month: "Dec", uv: 290, pv: 270 },
];

const months: SelectMonths[] = [
    { label: "(Last 6 months)", value: "last-6-months" },
    { label: "(Last 3 months)", value: "last-3-months" },
    { label: "(Last month)", value: "last-month" },
    { label: "(This year)", value: "this-year" },
];

type WebGrowthProps = {
    isAnimationActive?: boolean;
};

const WebGrowth = ({
    isAnimationActive = true,
}: WebGrowthProps) => {
    const isMobile = useMediaQuery("(max-width:900px)");

    return (
        <Card className="flex h-64 flex-1 flex-col rounded-sm">
            <div className="px-4 pt-4 flex flex-col lg:flex-row justify-between">
                <p className="font-saira text-[clamp(16px,1.5vw,1rem)] font-bold tracking-[0.1px] text-[#002602]"> WebGrowth</p>
                <div className="self-end lg:self-auto">
                    <CustomSelect
                        options={months}
                        placeholder="Select Months"
                        triggerClassName="rounded-sm! min-w-36! max-w-36! text-[#23852D]! bg-white!"
                    />
                </div>
            </div>

            <div className={`w-full flex-1 ${isMobile ? "min-h-64!" : "min-h-40"} px-4`}>
                <ResponsiveContainer
                    width="100%"
                    height="100%"
                >
                    <AreaChart
                        data={rawData}
                        margin={{
                            top: 20,
                            right: 20,
                            left: -15,
                            bottom: 0,
                        }}
                    >
                        <defs>
                            <linearGradient
                                id="webGrowthUvGradient"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop
                                    offset="0%"
                                    stopColor="#2e7d32"
                                    stopOpacity={1.15}
                                />
                                <stop
                                    offset="100%"
                                    stopColor="#ffffff"
                                    stopOpacity={0.05}
                                />
                            </linearGradient>
                        </defs>

                        <CartesianGrid
                            stroke="#DBE4DB"
                            // strokeDasharray="6 3"
                            vertical={false}
                            horizontal
                        />

                        <XAxis
                            dataKey="month"
                            stroke="#000"
                            axisLine={{
                                stroke: "#000",
                                strokeWidth: 0.1,
                            }}
                            tickLine={false}
                            tick={{
                                fontSize: 12,
                                fontFamily: "Saira",
                                fill: "#000",
                            }}
                        />

                        <YAxis
                            stroke="#000"
                            axisLine={{
                                stroke: "#000",
                                strokeWidth: 0.1,
                            }}
                            tickLine={false}
                            tick={{
                                fontSize: 12,
                                fontFamily: "Saira",
                                fill: "#000",
                            }}
                        />

                        <Tooltip
                            cursor={{
                                stroke: "#a9dfd8",
                                strokeDasharray: "4 4",
                            }}
                            contentStyle={{
                                backgroundColor: "#020617",
                                borderRadius: 8,
                                border: "1px solid #1e293b",
                            }}
                            labelStyle={{
                                color: "#ffffff",
                            }}
                            itemStyle={{
                                color: "#a9dfd8",
                            }}
                        />

                        <Area
                            type="linear"
                            dataKey="uv"
                            stroke="#034006"
                            fill="url(#webGrowthUvGradient)"
                            strokeWidth={1}
                            dot={{
                                fill: "#034006",
                                stroke: "none",
                                strokeWidth: 0,
                                r: 4,
                            }}
                            activeDot={{
                                r: 4,
                                fill: "#034006",
                                stroke: "none",
                                strokeWidth: 0,
                            }}
                            isAnimationActive={isAnimationActive}
                            animationBegin={200}
                            animationDuration={1300}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
};

export default WebGrowth;