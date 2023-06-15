import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useBoundStore from "../../store/Store";
import {
    TextInput,
    PasswordInput,
    Paper,
    Title,
    Container,
    Button,
} from '@mantine/core';

import { useForm } from '@mantine/form';

const LoginPage = () => {
  const navigate = useNavigate();
  const { loginService, authLoading, user } = useBoundStore((state) => state);

  useEffect(() => {
    if (!!user) {
      navigate("/posts");
    }
  }, [user]);


    const form = useForm({
        initialValues: {
            email: '',
            password: '',
        },

    });

  const onLogin = async (values) => {
    let email = values.email;
    let password = values.password;
    if (!email || !password) return;
    loginService(email, password);
  };



    return (
        <Container size={420} my={40}>
            <form onSubmit={form.onSubmit((values) => onLogin(values))}>
            <Title
                align="center"
                sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
            >
                Welcome back!
            </Title>

            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                <TextInput label="Email" placeholder="you@mantine.dev" required
                           withAsterisk
                           {...form.getInputProps('email')}
                />
                <PasswordInput label="Password" placeholder="Your password" required mt="md" {...form.getInputProps('password')}/>
                <Button fullWidth mt="xl" type="submit">
                    Sign in
                </Button>
            </Paper>
            </form>
        </Container>
    );

};

export default LoginPage;
