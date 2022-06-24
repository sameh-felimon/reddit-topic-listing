export const getPostedInHours = (time: any): number => {
    return new Date(time).getHours();
}

export const isValidImage = (url: string | undefined) => {
    return url && url != 'self' && /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
}
