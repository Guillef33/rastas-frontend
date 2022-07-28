const ENDPOINT = 'http://localhost:8000'

export default function login ({ username, password }) {

    return fetch(`${ENDPOINT}/login`)
}