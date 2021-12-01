export const getGreeting = async () => {
    console.log("Hi");
    const response = await fetch("api/v1/greetings");
    console.log(response)
    return response.json();
};