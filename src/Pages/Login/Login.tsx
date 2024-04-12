import React, { useState } from "react";
import { Grid, Paper, Typography, TextField, FormHelperText, Button } from "@mui/material";

interface LoginComponentState {
    email: string,
    emailError: boolean,
    password: string,
    passwordError: boolean
};

function Login() {

    const [state, setState] = useState<LoginComponentState>({
        email: "",
        emailError: false,
        password: "",
        passwordError: false
    });

    const submit = () => {
        let { email, password } = state;

        if (email === "" || email === null || email === undefined) {
            setState((ref) => ({ ...ref, emailError: false }));
        }

        if (!!email && !!password) {
            let obj: any = {};
            obj.email = email;
            obj.password = state.password;
        }
    };

    return (
        <div
            style={{
                backgroundImage: `url('https://wallpapercave.com/wp/wp2939993.jpg')`,
                backgroundSize: 'cover',
                opacity: '500px',
                backgroundPosition: 'center',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Grid container style={{ justifyContent: "center", alignItems: "center" }}>
                <Grid item xs={10} sm={6} md={4} lg={3} >
                    <Grid style={{ display: "flex", flexDirection: "column" }}>
                    </Grid>
                    <Paper style={{ padding: "25px 25px", borderRadius: "10px", backgroundColor: 'rgba(255, 255, 255, 0.2)', boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2)' }}>
                        <Grid container spacing={2} style={{ justifyContent: "center", alignItems: "center", }}>
                            <Typography variant="h5" align="center" fontFamily="monospace" gutterBottom>
                                Login
                            </Typography>
                            <Grid item xs={10}>
                                <TextField
                                    fullWidth
                                    required
                                    label="Email"
                                    variant="standard"
                                    value={state.email}
                                    onChange={(event) => setState({ ...state, email: event.target.value, emailError: false })}
                                    error={state.emailError}
                                />
                                {state.emailError === true &&
                                    <FormHelperText style={{ color: "red", marginLeft: "5px" }}>Please enter the email</FormHelperText>
                                }
                            </Grid>
                            <Grid item xs={10}>
                                <form onSubmit={(event) => event.preventDefault()}>
                                    <TextField
                                        fullWidth
                                        required
                                        type="password"
                                        label="Password"
                                        variant="standard"
                                        value={state.password}
                                        onChange={(event) => setState({ ...state, password: event.target.value })}
                                        autoComplete='off'
                                    />
                                </form>
                            </Grid>
                            <Grid item xs={10}>
                                <Button
                                    fullWidth
                                    type="submit"
                                    variant="contained"
                                    onClick={() => { submit() }}
                                >
                                    Login
                                </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
};

export default Login;