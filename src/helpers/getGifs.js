export const getGifs = async (category) => {
  const API_KEY = 'ShIhvt1d3DMY4fI4naGyv96cH5FJluqu'
  const limit = 12
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=${limit}&api_key=${API_KEY}`
  const response = fetch(url)
  const { data } = await (await response).json()
  const gifs = data.map(gif => ({
    id: gif.id,
    title: gif.title,
    url: gif.images?.downsized_medium.url
  }))
  return gifs
}