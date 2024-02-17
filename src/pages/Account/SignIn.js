import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Typography, Input, Card, Button } from "@material-tailwind/react";

export default function LoginPage() {
    // const [showPassword, setShowPassword] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const { signUp } = useAuth()

    async function handleRegister(e) {
        e.preventDefault();

        if (passwordRepeat !== password) {
            return;
        }

        const response = await signUp(email, password);

        if (response.error) {
            setError(response.error);
            setMessage('');
        } else {
            setMessage('Registered successfully. Please check your email to verify your account.');
            setError('');
            // Optionally redirect the user or update UI
        }
    }

    return (
        <section className="bg-componentColor rounded-lg grid h-screen items-center lg:grid-cols-2">
            <div className="my-auto p-8 text-center sm:p-10 md:p-20 xl:px-32 xl:py-24 h-full">
                <Typography variant="h3" className="mb-2 text-primaryText">
                    Register
                </Typography>
                <Typography color="gray" className="mb-16 font-normal text-secondaryText">
                    Join us to great journey!
                </Typography>
                <form className="mx-auto max-w-[24rem] text-left">
                    <div className="mb-6">
                        <label htmlFor="email">
                            <Typography
                                variant="small"
                                className="mb-2 block font-medium text-secondaryText"
                            >
                                Your Email
                            </Typography>
                        </label>
                        <Input
                            id="email"
                            color="gray"
                            size="lg"
                            type="email"
                            name="email"
                            placeholder=""
                            onChange={(e) => setEmail(e.target.value)}
                            className="focus:!border-secondaryText text-secondaryText !placeholder:text-secondaryText"
                            labelProps={{
                                className: "hidden",
                            }}
                        />
                    </div>
                    <div className="mb-6">
                        <div className="inline-flex justify-between w-full">
                            <label htmlFor="password">

                                <Typography
                                    variant="small"
                                    className="mb-2 block font-medium text-secondaryText"
                                >
                                    Password
                                </Typography>
                            </label>

                        </div>
                        <Input
                            id="password"
                            color="gray"
                            size="lg"
                            type="password"
                            name="password"
                            placeholder=""
                            className="focus:!border-secondaryText text-secondaryText !placeholder:text-secondaryText"
                            onChange={(e) => setPassword(e.target.value)}
                            labelProps={{
                                className: "hidden",
                            }}
                        />

                    </div>
                    <div className="mb-6">
                        <div className="inline-flex justify-between w-full">
                            <label htmlFor="password_repeat">

                                <Typography
                                    variant="small"
                                    className="mb-2 block font-medium text-secondaryText"
                                >
                                    Repeat password
                                </Typography>
                            </label>

                        </div>
                        <Input
                            id="password_repeat"
                            color="gray"
                            size="lg"
                            type="password"
                            name="password_repeat"
                            placeholder=""
                            className="focus:!border-secondaryText text-secondaryText !placeholder:text-secondaryText"
                            onChange={(e) => setPasswordRepeat(e.target.value)}
                            labelProps={{
                                className: "hidden",
                            }}
                        />

                    </div>
                    <Button color="blue" size="lg" className="mt-6" fullWidth onClick={handleRegister}>
                        log in
                    </Button>
                    <div className="relative flex py-5 items-center">
                        <div className="flex-grow border-t border-gray-400"></div>
                        <span className="flex-shrink mx-4 text-gray-400">Other options</span>
                        <div className="flex-grow border-t border-gray-400"></div>
                    </div>

                    <Button
                        color="white"
                        size="lg"
                        className="mt-4 flex h-12 items-center justify-center gap-2"
                        fullWidth
                    >
                        <img
                            src={`https://www.material-tailwind.com/logos/logo-google.png`}
                            alt="google"
                            className="h-6 w-6"
                        />{" "}
                        sign in with google
                    </Button>
                    <Button
                        color="white"
                        size="lg"
                        className="mt-4 flex h-12 items-center justify-center gap-2"
                        fullWidth
                    >
                        <img
                            src={`https://www.material-tailwind.com/logos/Twitter 2 - Official.png`}
                            alt="google"
                            className="h-6 w-6"
                        />{" "}
                        sign in with x
                    </Button>
                    <Typography
                        color="gray"
                        className="mt-6 text-center font-normal"
                    >
                        Already have an account?{" "}
                        <a href="/account/log-in" className="font-medium text-gray-500 hover:text-blue-500">
                            Sign In here
                        </a>
                    </Typography>
                </form>
            </div>
            <img
                src={`https://www.material-tailwind.com/img/bg-sign-in.avif`}
                alt="background image"
                className="hidden h-screen w-full object-cover lg:block rounded-e-lg"
            />
        </section>
    )
}