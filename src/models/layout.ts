export type StartViewProps = {
    setIsResult: React.Dispatch<React.SetStateAction<boolean>>,
    setFeeling: React.Dispatch<React.SetStateAction<string>>,
    setIcon: React.Dispatch<React.SetStateAction<string>>
}

export type EndViewProps = {
    feeling: string,
    icon: string,
    setIsResult: React.Dispatch<React.SetStateAction<boolean>>
}

export type FormProps = {
    setIsResult: React.Dispatch<React.SetStateAction<boolean>>,
    setFeeling: React.Dispatch<React.SetStateAction<string>>,
    setIcon: React.Dispatch<React.SetStateAction<string>>
}