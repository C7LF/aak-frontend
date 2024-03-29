export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';

export const correctImageUrl = (imageUrl: string): string => {
  if (!imageUrl) {
    return `${API_URL}/public/img/camaro.jpg`; // Or default image here
  }
  if (imageUrl.indexOf('/') === 0) {
    // It's a relative url, add API URL
    return `${API_URL}${imageUrl}`;
  }

  return imageUrl;
};
