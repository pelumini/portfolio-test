import axios from 'axios'

const fetcher = async <T>(url: string, headers = {}): Promise<T | null> => {
  try {
    const { data } = await axios.get<T>(url, {
      headers,
      withCredentials: true,
    })
    console.log('fetcher data', data)
    return data
  } catch (e: any) {
    console.log('fetcher error', e)
    return null
  }
}

export default fetcher
