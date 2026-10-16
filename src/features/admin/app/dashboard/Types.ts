export type insightsTypes = {
    title: string;
    icon: string | null;
    count: string | number;
    name: string;
}

export type TodaysSummaryTypes = {
    summary: string;
    count: number | string;
}

export type MostViewedTypes = {
    page_name: string;
    count: number | string;
}

export type RecentTypes={
    name:string;
    time:string;
}


export type RawChartData = {
    month: string;
    uv: number;
    pv: number;
};

export type SelectMonths = {
    label:string;
    value: string;
}