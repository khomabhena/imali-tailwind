const url = 'http://localhost:3030'
// const url = 'https://imali-app-server.onrender.com'

export const fetchMyData = async (route, params) => {
    const response = await fetch(`${url}${route}` + '?' + new URLSearchParams(
        params
    ))
    const { status } = response
    const data = await response.json()
    
    return { status, data }
}