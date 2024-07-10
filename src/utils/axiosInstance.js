import axios from "axios";

export const getErrorMessage = (error) => {
    let message;

    if (axios.isAxiosError(error)) {
        const statusCode = error?.response?.status;
        if (statusCode === 400 || statusCode === 404 || statusCode === 403) {
            message = error?.response?.data?.message || error?.message;
        } else {
            message = "Something went wrong";
        }
    }

    return message;
};
