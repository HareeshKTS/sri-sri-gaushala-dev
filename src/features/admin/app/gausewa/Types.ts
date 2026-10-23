export type BannerValues = {
    heading: string;
    quote: string;
}

export type BannerList = {
    id: number;
    icon: string;
    subject: string;
    description: string;
}

export type FeqDataTypes = {
    id: number;
    no: string;
    question: string;
    answer: string;
    update_on: string;
}

export type AddEditFeqValues = {
    question: string;
    answer: string;
}