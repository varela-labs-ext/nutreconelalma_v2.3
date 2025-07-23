
import LoginForm from "./LoginForm";
import logoBbraun from "@/assets/imgs/logo.png";
import medicalLab from "@/assets/imgs/medicalLab.jpg";

const LoginPage = () => {


    return (
        <div className="min-h-screen flex">
            {/* Left side - Image */}
            <div className="hidden lg:block lg:w-1/2 relative">
                <img
                    src={medicalLab}
                    alt="Laboratorio médico"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20" />
            </div>

            {/* Right side - Login Form */}
            <div className="w-full lg:w-1/2 bg-[#4CAF50] flex items-center justify-center p-8">
                <div className="w-full max-w-md space-y-8">
                    <div className="text-right">
                        <img
                            src={logoBbraun}
                            alt="B Braun Logo"
                            className="inline-block h-16"
                        />
                    </div>

                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-white mb-2">CALCULADORA</h1>
                        <h2 className="text-4xl font-bold text-white mb-8">NUTRICIÓN HOSPITALARIA</h2>
                    </div>

                    <LoginForm />

                    <div className="text-center mt-8">
                        <p className="text-white text-xl font-medium">PROTEGEMOS Y MEJORAMOS LA</p>
                        <p className="text-white text-xl font-medium">SALUD DE LAS PERSONAS</p>
                        <p className="text-white text-xl font-medium">EN TODO EL MUNDO</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
