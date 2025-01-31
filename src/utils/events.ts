declare global {
    interface Window {
        dataLayer: unknown[];
    }
}

interface Payload {
    [key: string]: string;
}

export const sendDataToGAServices = async (payload: Payload) => {
    try {
        const now = new Date();
        const date = `${now.getFullYear()}-${
            now.getMonth() + 1
        }-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

        await fetch(
            "https://script.google.com/macros/s/AKfycbx5Cr7wV_LeblwEfIO1iIhuIhsUyyaRF-cJUGoanBoHjlYAL-G9OTaygA-bTUieXUJ39Q/exec",
            {
                redirect: "follow",
                method: "POST",
                body: JSON.stringify({
                    date,
                    ...payload,
                }),
                headers: {
                    "Content-Type": "text/plain;charset=utf-8",
                },
            },
        );
    } catch (error) {
        console.error("Error!", error);
    }
};

export const sendDataToGAServicesWithContacts = async (payload: Payload) => {
    try {
        const now = new Date();
        const date = `${now.getFullYear()}-${
            now.getMonth() + 1
        }-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

        await fetch(
            "https://script.google.com/macros/s/AKfycbzIjRzRcsN-YGCH2Nlrl0KsZ5FICXb3wMmpLkXUgv4yKtqF0iEmHiHTFLa78OzbJSn4kg/exec",
            {
                redirect: "follow",
                method: "POST",
                body: JSON.stringify({
                    date,
                    ...payload,
                }),
                headers: {
                    "Content-Type": "text/plain;charset=utf-8",
                },
            },
        );
    } catch (error) {
        console.error("Error!", error);
    }
};