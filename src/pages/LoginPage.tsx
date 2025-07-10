import { LoginForm } from "../components/auth/LoginForm";
import { GradientLayout } from "../components/layout/GradientLayout";

export default function LoginPage () {

    return (
        <GradientLayout>
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-2xl shadow-xl">
                <h2 className="text-3xl font-extrabold text-center text-gray-900">
                    Sign in to your account
                </h2>
                <LoginForm />
            </div>
        </GradientLayout>
    )
}