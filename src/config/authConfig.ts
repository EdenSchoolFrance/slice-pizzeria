function getSecretKey(): string {
    const AUTH_SECRET_KEY: string = process.env.SECRET_KEY

    if (!AUTH_SECRET_KEY) throw new Error("Invalid auth config: AUTH_SECRET_KEY is missing")

    return AUTH_SECRET_KEY
}

export default getSecretKey
