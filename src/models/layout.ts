export type StartViewProps = {
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
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
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setIsResult: React.Dispatch<React.SetStateAction<boolean>>,
    setFinalFeeling: React.Dispatch<React.SetStateAction<string>>,
    setIcon: React.Dispatch<React.SetStateAction<string>>
}