const url = 'http://localhost:3030'

export const fetchMyData = async (route) => {
    const response = await fetch(`${url}${route}`)
    const { status } = response
    const data = await response.json()
    
    return { status, data }
}