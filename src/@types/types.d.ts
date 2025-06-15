
declare global {
    type User = {
        id: number,
        fullName: string,
        email: string,
        phone_number: string,
        status: 'online' | 'offline',
        time: string,
        points: number,
        image: string
    }

    type Trace = {
        id: number,
        endpoint: string,
        time: string,
        resultStatus: number,
        enviroment: string
        username: string
    }
}

export {}