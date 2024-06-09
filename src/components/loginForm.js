import { login } from "../app/actions";

const LoginForm = () => {
    return (
        <form action={login}>
            <button className="bg-pink-400 text-white p-1 rounded-md m-1 text-lg" type="submit" name="action" value="google"></button>
        </form>
    )
}