const url = 'http://localhost:3030'

export const postMyData = async (route, formData) => {
    const response = await fetch(`${url}${route}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    })

    const { status } = response
    const data = await response.json()

    return { status, data }
}

