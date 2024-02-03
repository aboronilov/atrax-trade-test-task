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
    const url = "http://127.0.0.1:8000/api/info/stat/"

    const body = JSON.stringify({ phone })
    // const params = new URLSearchParams({phone});
    // const url = baseURL + params.toString();
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

    // console.log(response)

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