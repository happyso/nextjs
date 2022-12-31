import { axiosInstance } from 'axiosInstance'
import React from 'react'
import { Staff } from 'types/types'

async function getData(): Promise<Staff[]> {
    const { data } = await axiosInstance.get('/staff')
    return data
}

export default function DataTable() {
    return <div></div>
}
