import axios from 'axios'

export const hungerMap = async () => {
    const response = await axios.get('https://api.hungermapdata.org/v2/info/country')
    console.log(response)
    // return response
}