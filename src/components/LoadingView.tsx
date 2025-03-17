import { CircularProgress } from "@mui/joy";

export function LoadingView() {
    return <>
        <div>
            <p>Loading</p>
            <CircularProgress color="neutral" />
        </div>
    </>
}