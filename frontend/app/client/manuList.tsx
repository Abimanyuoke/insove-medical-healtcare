import { ReactNode } from "react"

interface IPropMenu {
    id: string,
    path: string,
    label: string
}

let MenuList: IPropMenu[] = [
    {
        id: `home`,
        path: `/client/home`,
        label: `Home`
    },
    {
        id: `doctor`,
        path: `/client/doctor`,
        label: `Doctors`
    },
    {
        id: `departement`,
        path: `/client/departement`,
        label: `Departement`
    },
    {
        id: `services`,
        path: `/client/services`,
        label: `Services`
    },
    {
        id: `blog`,
        path: `/client/blog`,
        label: `Blog`
    },
    {
        id: `contact`,
        path: `/client/contact`,
        label: `Contact`
    },
]

export default MenuList
