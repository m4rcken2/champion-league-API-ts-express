interface HttpResponse{
    statusCode: number,
    body: any
}

export const ok = async (data: any): Promise<HttpResponse> =>{
    return {
        statusCode: 200,
        body: data
    }
}

export const noContent = async(): Promise<HttpResponse> =>{
    return{
        statusCode: 204,
        body: null
    }
}

export const created = async(): Promise<HttpResponse> =>{
    return{
        statusCode: 201,
        body: {
            message: "Player created"
        }
    }
}

export const badRequest = async(): Promise<HttpResponse> =>{
    return{
        statusCode: 400,
        body: null
    }
}