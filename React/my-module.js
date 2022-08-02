export default (name) => {
    // console.log("hello " + name);
    console.log(`hello ${name}`);
}

const topla = (a, b) => a + b;
const cikar = (a, b) => a - b;

const text = "Text";
const user = {
    name: "Burak",
    surname: "TİTİZ",
}

const users = [{
    name: "deagle",
    surname: "DEAGLE"
}, {
    name: "Bızcıt",
    surname: "BIZCIT",
}]
export {
    topla,
    cikar,
    text,
    user,
    users
}