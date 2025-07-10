import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

export const login = async (email: string, password: string) => {

    return await signInWithEmailAndPassword(getAuth(), email, password)

}


export const signup = async (email: string, password: string) => {

    return await createUserWithEmailAndPassword(getAuth(), email, password)
}