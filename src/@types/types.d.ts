
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
        channel_id: number
    }

    type Channel = {
        id: number,
        name: string
    }

    type Trace = {
        id: number,
        endpoint: string,
        time: string,
        resultStatus: number,
        enviroment: string
        username: string
    }

    type DataItem = {
        id: number,
        title: string,
        description: string
        chartData?: {
            values: number[]
        }
    }

    type DataPointsItem = {
        id: number,
        user_id: number,
        points: number
        username: string,
        status: 'online' | 'offline',
    }

    type PrizeProduct = { 
        id: number,
        name: string,
        description: string,
        image: string,
        ordereds: number
        avaliable: boolean
        quantity: number
    } 

    type Order = {
        id: number,
        user_id: number,
        status: 'delivered' | 'ordered' | 'waiting'
    }

}

export {}