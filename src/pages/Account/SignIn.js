import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Typography, Input, Checkbox, Button } from "@material-tailwind/react";

export default function RegisterPage() {
    const [showPassword, setShowPassword] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signIn } = useAuth()

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signIn(email, password);
        } catch (error) {

        }
    }

    return (
        <section className="grid h-screen items-center lg:grid-cols-2">
            <div className="my-auto p-8 text-center sm:p-10 md:p-20 xl:px-32 xl:py-24">
                <Typography variant="h3" color="blue-gray" className="mb-2">
                    Register
                </Typography>
                <Typography color="gray" className="mb-16 font-normal">
                    Join us to great journey!
                </Typography>
                <form action="#" className="mx-auto max-w-[24rem] text-left">
                    <div className="mb-6">
                        <label htmlFor="email">
                            <Typography
                                variant="small"
                                className="mb-2 block font-medium text-gray-900"
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
                            placeholder="name@mail.com"
                            className="focus:!border-t-gray-900"
                            labelProps={{
                                className: "hidden",
                            }}
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password">
                            <Typography
                                variant="small"
                                className="mb-2 block font-medium text-gray-900"
                            >
                                Password
                            </Typography>
                        </label>
                        <Input
                            id="password"
                            color="gray"
                            size="lg"
                            type="password"
                            name="password"
                            placeholder="********"
                            className="focus:!border-t-gray-900"
                            labelProps={{
                                className: "hidden",
                            }}
                        />
                        <Checkbox
                            label={
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="flex font-medium items-center !text-gray-500"
                                >
                                    I agree with the &nbsp;
                                    <Typography
                                        as="a"
                                        href="#"
                                        color="blue-gray"
                                        variant="small"
                                        className="underline font-medium"
                                    >
                                        Terms and Conditions
                                    </Typography>
                                </Typography>
                            }
                            containerProps={{
                                className: "-ml-2.5",
                            }}
                        />
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="-ml-3">
                            <Checkbox
                                color="gray"
                                label="Subscribe me to newsletter"
                                labelProps={{
                                    className: "font-medium",
                                }}
                            />
                        </div>
                        <Typography as="a" href="#" color="gray" className="font-medium">
                            Forgot password
                        </Typography>
                    </div>
                    <Button color="gray" size="lg" className="mt-6" fullWidth>
                        sign in
                    </Button>
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
                        Not registered?{" "}
                        <a href="/account/register" className="font-medium text-gray-900">
                            Create account
                        </a>
                    </Typography>
                </form>
            </div>
            <img
                src={`https://www.material-tailwind.com/img/bg-sign-in.avif`}
                alt="background image"
                className="hidden h-screen w-full object-cover lg:block"
            />
        </section>
    )
}