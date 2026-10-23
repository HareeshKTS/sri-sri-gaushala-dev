export type GalleryBannerValues = {
    heading: string;
    quote: string;
}

export type GalleryListTypes = {
    name: string;
    icon: string;
    photo_count: string;
}

export type GalleryTableTypes = {
    id: number,
    media: string;
    album: string;
    type: string;
    date: string;
    views: string;
    status:string;
}   

export type AddEditTypes={
    album_name:string;
    create_album:string;
}