// import fetch from 'isomorphic-unfetch';

type Props = {
    phone: string
}

type Data = {
    status_code: number,
    operator_name?: string,
    region?: string,
}



export async function getPhoneInfo({ phone }: Props): Promise<Data> {
    const infoStatEndpoint = "info/stat/"
    const host = process.env.NEXT_PUBLIC_BACKEND_HOST
    const url = `${host}${infoStatEndpoint}`
    const body = JSON.stringify({ phone })
    const headers = { 'Content-Type': 'application/json' }


    const response = await fetch(
        url,
        {
            method: "POST",
            headers,
            body
        },
    )
    const status_code = response.status

    if (status_code !== 200) {
        return {
            status_code,
        }
    }

    const { operator_name, region } = await response.json()
    return {
        status_code,
        operator_name,
        region
    }
}   