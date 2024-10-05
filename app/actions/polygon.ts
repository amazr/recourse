'use server'
import { restClient } from '@polygon.io/client-js'

const polygon = restClient(process.env.POLYGON_KEY)

export async function optionsContract(ticker: string) {
    return polygon.reference.optionsContract(ticker)
}