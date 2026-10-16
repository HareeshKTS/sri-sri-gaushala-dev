export type BreedsTypes = {
    Id?: number;
    breed_img?: string;
    breed_name?: string;
    origin_native_place?: string;
    breed_type?: string;
    count?: string;
    description?: string;
    status?: string;
}

export type BreedFormValues = {
    breed_name: string;
    origin: string,
    breed_type: string,
    pure_indian_breeds: string;
    native_place: string;
    description: string;
    count:string | number;
    status:string;
}

export type BannerValues ={
    heading:string;
    quote:string;
}

