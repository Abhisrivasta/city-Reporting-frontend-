import { loginUser } from "@/hooks/api.user";
import {z} from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, type loginSchema } from "@/validation/user.validation";
import { useForm } from "react-hook-form";

type FormData = z.infer<typeof loginSchema>;

const Login = () => {
  const form = useForm<FormData>({
    resolver:zodResolver(formSchema),
    defaultValues:{
      email:"",
      password:""
    }
  })
  return (
    <div>Login</div>
  )
}

export default Login