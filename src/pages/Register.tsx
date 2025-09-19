import { registerUser } from '../hooks/api.user'
import {useForm} from 'react-hook-form';
import {z} from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema } from '@/validation/user.validation';

import { Button } from '@/components/ui/button';
import { Form ,FormControl,FormField,FormItem,FormLabel,FormMessage} from '@/components/ui/form';
import { Input } from '@/components/ui/input';


type FormData = z.infer<typeof formSchema>;

const Register = () => {
  // This line connects your form to the Zod rulebook
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      fullName:'',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });
  
  // This function only runs if all Zod rules pass
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
 async function onSubmit(values : any) {
    console.log("Form is valid! Sending data to the server:", values);
   try {
     const response = await registerUser(values);
     console.log("Register successfully",response);
   } catch (error) {
    console.log("Registration failed",error);
   }
    
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
         {/* Username */}
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Full Name */}
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter full name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Enter email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Password */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Enter password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Confirm Password */}
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Confirm password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit'>Create Account</Button>
      </form>
    </Form>
  );
}

export default Register;